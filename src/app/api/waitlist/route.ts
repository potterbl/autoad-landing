import { NextRequest, NextResponse } from 'next/server';

// Type definitions
interface WaitlistEntry {
  name: string;
  telegram: string;
  role: string;
  comment?: string;
  timestamp: string;
}

// Simple in-memory storage for demo purposes
// In production, you'd want to use a database or external service
const waitlistEntries: Array<WaitlistEntry> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, telegram, role, comment } = body;

    // Basic validation
    if (!name || !telegram || !role) {
      return NextResponse.json(
        { error: 'Name, telegram, and role are required' },
        { status: 400 }
      );
    }

    // Validate role
    if (!['advertiser', 'admin'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role specified' },
        { status: 400 }
      );
    }

    // Check if telegram already exists
    const existingEntry = waitlistEntries.find(entry =>
      entry.telegram.toLowerCase() === telegram.toLowerCase()
    );
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Telegram already registered' },
        { status: 400 }
      );
    }

    // Add to waitlist
    const entry = {
      name: name.trim(),
      telegram: telegram.trim(),
      role: role.trim(),
      comment: comment?.trim() || '',
      timestamp: new Date().toISOString()
    };

    waitlistEntries.push(entry);

    // Log to console (visible in server logs)
    console.log('New waitlist entry:', entry);

    // Send to Telegram Bot (multiple recipients)
    await sendToTelegram(entry);

    return NextResponse.json(
      { success: true, message: 'Successfully added to waitlist' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing waitlist entry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Send notification to multiple Telegram recipients
async function sendToTelegram(entry: WaitlistEntry) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_IDS = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_IDS) {
    console.log('Telegram integration not configured');
    return;
  }

  // Split chat IDs by comma or newline and filter out empty values
  const chatIdList = CHAT_IDS
    .split(/[,\n]/)
    .map(id => id.trim())
    .filter(id => id.length > 0);

  const message = `🚀 Новая заявка на предрегистрацию AutoAd Broker!

👤 Имя: ${entry.name}
💬 Telegram: ${entry.telegram}
🎯 Роль: ${entry.role === 'advertiser' ? 'Заказчик рекламы' : 'Администратор канала'}${entry.comment ? `\n📝 Комментарий: ${entry.comment}` : ''}
⏰ Время: ${new Date(entry.timestamp).toLocaleString('ru-RU')}

#AutoAdBroker #PreRegistration #${entry.role === 'advertiser' ? 'Advertiser' : 'ChannelAdmin'}`;

  // Send message to each chat ID
  for (const chatId of chatIdList) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML'
        }),
      });

      if (!response.ok) {
        console.error(`Failed to send Telegram message to ${chatId}:`, await response.text());
      } else {
        console.log(`✅ Message sent to chat ID: ${chatId}`);
      }
    } catch (error) {
      console.error(`Error sending to Telegram chat ${chatId}:`, error);
    }
  }
}

// GET endpoint to view waitlist (for admin purposes)
export async function GET() {
  // In production, add authentication here
  return NextResponse.json({
    count: waitlistEntries.length,
    entries: waitlistEntries.map(entry => ({
      ...entry,
      telegram: entry.telegram.replace(/(.{2}).*(@.*)/, '$1***$2') // Mask telegram for privacy
    }))
  });
}
