#!/bin/bash

echo "🧪 Testing AutoAd Broker Waitlist API with your Telegram settings..."
echo ""

# Test API endpoint
echo "📡 Sending test form submission..."

curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Тестовый пользователь",
    "telegram": "@test_user",
    "comment": "Это тестовая заявка для проверки интеграции с Telegram ботом"
  }' \
  --silent \
  --show-error \
  || echo "❌ Server not running. Start with: npm run dev"

echo ""
echo "📲 Check your Telegram chats:"
echo "   - Chat ID: 433111180"
echo "   - Chat ID: 937504591"
echo ""
echo "✅ If you received notifications in both chats, integration is working!"
