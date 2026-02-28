This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Waitlist Form Updates

The form now collects:
- **Full Name** - Required field
- **Telegram** - Username (@username) or phone number - Required
- **Comment/Question** - Optional textarea for additional information

## 🔔 Multiple Telegram Recipients

To receive notifications in multiple Telegram chats, set up your `.env.local`:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
# Multiple recipients - separate with commas or new lines:
TELEGRAM_CHAT_ID=123456789,987654321,555666777
```

## ✨ UI Improvements

- Removed skeleton loading effects from Features and How It Works sections
- All content is now displayed immediately for better user experience
- Hover effects still provide enhanced interactivity

## 🔍 SEO Optimization

Complete SEO implementation for maximum search engine visibility:

### Core SEO Features
- **Sitemap.xml** - Auto-generated multilingual sitemap
- **Robots.txt** - Search engine crawling permissions  
- **Manifest.json** - PWA support with app icons

### Advanced SEO
- **Meta tags** - Dynamic titles, descriptions, keywords for each language
- **Open Graph** - Social sharing optimization (Facebook, LinkedIn)
- **Twitter Cards** - Twitter sharing optimization
- **Structured data** - JSON-LD schema for Organization and Website
- **Canonical URLs** - Proper hreflang for multilingual sites

### Performance SEO
- **Image optimization** - WebP and AVIF support
- **Security headers** - X-Frame-Options, X-Content-Type-Options
- **Compression** - Gzip compression enabled
- **CSS optimization** - Experimental CSS optimization

### Analytics Ready
- **Google Analytics 4** - Configure with NEXT_PUBLIC_GA_ID
- **Yandex Metrika** - Configure with NEXT_PUBLIC_YANDEX_METRIKA_ID
- **Search Console** - Verification ready with GOOGLE_VERIFICATION_ID

### Environment Variables for SEO
```env
NEXT_PUBLIC_BASE_URL=https://autoad-broker.com
GOOGLE_VERIFICATION_ID=your_google_verification_code
YANDEX_VERIFICATION_ID=your_yandex_verification_code
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
```

### SEO Testing
After deployment, test:
- `/sitemap.xml` - Check sitemap generation
- `/robots.txt` - Verify crawling rules
- `/manifest.webmanifest` - PWA manifest
- Google Search Console - Submit sitemap
- Facebook Debugger - Test Open Graph

