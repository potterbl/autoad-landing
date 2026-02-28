import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage for demo purposes
// In production, you'd want to use a database or external service
const waitlistEntries: Array<{
  name: string;
  email: string;
  telegram: string;
  timestamp: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, telegram } = body;

    // Basic validation
    if (!name || !email || !telegram) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEntry = waitlistEntries.find(entry => entry.email === email);
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Add to waitlist
    const entry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      telegram: telegram.trim(),
      timestamp: new Date().toISOString()
    };

    waitlistEntries.push(entry);

    // Here you could integrate with:
    // 1. Google Sheets API
    // 2. Telegram Bot API to send notifications
    // 3. Email service (SendGrid, Mailgun, etc.)
    // 4. Database (PostgreSQL, MongoDB, etc.)

    // For now, just log to console (visible in server logs)
    console.log('New waitlist entry:', entry);

    // Optional: Send to Telegram Bot
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

// Optional: Send notification to Telegram
async function sendToTelegram(entry: any) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.log('Telegram integration not configured');
    return;
  }

  try {
    const message = `🚀 New AutoAd Broker Waitlist Entry!

👤 Name: ${entry.name}
📧 Email: ${entry.email}
💬 Telegram: ${entry.telegram}
⏰ Time: ${new Date(entry.timestamp).toLocaleString()}`;

    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      console.error('Failed to send Telegram message:', await response.text());
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
  }
}

// GET endpoint to view waitlist (for admin purposes)
export async function GET() {
  // In production, add authentication here
  return NextResponse.json({
    count: waitlistEntries.length,
    entries: waitlistEntries.map(entry => ({
      ...entry,
      email: entry.email.replace(/(.{2}).*(@.*)/, '$1***$2') // Mask email for privacy
    }))
  });
}
