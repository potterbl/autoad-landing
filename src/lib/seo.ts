import { Metadata } from 'next';

type Locale = 'en' | 'uk' | 'ru';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

const seoData: Record<Locale, SEOData> = {
  en: {
    title: 'AutoAd Broker - Telegram Advertising Platform | Beta Access',
    description: 'Join AutoAd Broker waitlist - automated Telegram advertising exchange with unified wallet, smart calendar, and escrow protection. Launch March 2026.',
    keywords: 'telegram advertising, automated ads, crypto payments, escrow protection, smart calendar, telegram marketing, advertising platform, beta access',
    ogTitle: 'AutoAd Broker - Revolutionary Telegram Advertising Platform',
    ogDescription: 'Automated Telegram advertising without personal messages. Unified balance, smart booking, secure payments. Get early access!'
  },
  uk: {
    title: 'AutoAd Broker - Платформа Telegram-реклами | Ранній доступ',
    description: 'Приєднайтеся до списку очікування AutoAd Broker - автоматизована біржа Telegram-реклами з єдиним гаманцем, смарт-календарем та escrow-захистом. Запуск березень 2026.',
    keywords: 'telegram реклама, автоматизована реклама, крипто платежі, escrow захист, смарт календар, telegram маркетинг, рекламна платформа, ранній доступ',
    ogTitle: 'AutoAd Broker - Революційна платформа Telegram-реклами',
    ogDescription: 'Автоматизована Telegram-реклама без особистих повідомлень. Єдиний баланс, розумне бронювання, безпечні платежі!'
  },
  ru: {
    title: 'AutoAd Broker - Платформа Telegram-рекламы | Ранний доступ',
    description: 'Присоединяйтесь к списку ожидания AutoAd Broker - автоматизированная биржа Telegram-рекламы с единым кошельком, смарт-календарем и escrow-защитой. Запуск март 2026.',
    keywords: 'telegram реклама, автоматизированная реклама, крипто платежи, escrow защита, смарт календарь, telegram маркетинг, рекламная платформа, ранний доступ',
    ogTitle: 'AutoAd Broker - Революционная платформа Telegram-рекламы',
    ogDescription: 'Автоматизированная Telegram-реклама без личных сообщений. Единый баланс, умное бронирование, безопасные платежи!'
  }
};

export function generateSEOMetadata(locale: Locale, baseUrl: string = 'https://autoad-broker.com'): Metadata {
  const data = seoData[locale];
  const canonicalUrl = `${baseUrl}/${locale}`;

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    authors: [{ name: 'AutoAd Broker Team' }],
    creator: 'AutoAd Broker',
    publisher: 'AutoAd Broker',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en`,
        'uk': `${baseUrl}/uk`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`
      }
    },
    openGraph: {
      type: 'website',
      locale: locale === 'uk' ? 'uk_UA' : locale === 'ru' ? 'ru_RU' : 'en_US',
      url: canonicalUrl,
      title: data.ogTitle,
      description: data.ogDescription,
      siteName: 'AutoAd Broker',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: data.ogTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.ogTitle,
      description: data.ogDescription,
      images: [`${baseUrl}/og-image.jpg`],
      creator: '@autoadbroker',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_VERIFICATION_ID,
      yandex: process.env.YANDEX_VERIFICATION_ID,
    },
    other: {
      'msapplication-TileColor': '#3b82f6',
      'theme-color': '#3b82f6',
    }
  };
}
