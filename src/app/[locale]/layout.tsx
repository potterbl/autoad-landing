import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

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

  const titles = {
    en: 'AutoAd Broker - Telegram Advertising Platform',
    uk: 'AutoAd Broker - Платформа Telegram-реклами',
    ru: 'AutoAd Broker - Платформа Telegram-рекламы'
  };

  const descriptions = {
    en: 'Automated Telegram advertising exchange with smart calendar and secure transactions. Launch in 2 months.',
    uk: 'Автоматизована біржа Telegram-реклами зі смарт-календарем і безпечними угодами. Запуск через 2 місяці.',
    ru: 'Автоматизированная биржа Telegram-рекламы со смарт-календарем и безопасными сделками. Запуск через 2 месяца.'
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      languages: {
        en: '/en',
        uk: '/uk',
        ru: '/ru'
      }
    }
  };
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
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
