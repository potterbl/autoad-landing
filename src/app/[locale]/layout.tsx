import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { generateSEOMetadata } from '../../lib/seo';

const locales = ['en', 'uk', 'ru'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com';

  if (!locales.includes(locale)) {
    notFound();
  }

  return generateSEOMetadata(locale as 'en' | 'uk' | 'ru', baseUrl);
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Performance and security */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AutoAd Broker",
              "url": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'}/${locale}`,
              "description": locale === 'ru'
                ? "Автоматизированная платформа Telegram-рекламы с единым кошельком и escrow-защитой"
                : locale === 'uk'
                ? "Автоматизована платформа Telegram-реклами з єдиним гаманцем та escrow-захистом"
                : "Automated Telegram advertising platform with unified wallet and escrow protection",
              "inLanguage": locale === 'uk' ? 'uk-UA' : locale === 'ru' ? 'ru-RU' : 'en-US',
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'}/${locale}?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
