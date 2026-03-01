'use client';

import { useTranslations } from '../lib/i18n';
import { useParams } from 'next/navigation';
import { FlyingTriangles } from './FlyingTriangles';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params?.locale as string || 'en';

  // Map locale to GIF filename
  const getGifForLocale = (locale: string) => {
    switch (locale) {
      case 'ru':
        return '/ru.gif';
      case 'uk':
        return '/ukr.gif';
      default:
        return '/en.gif';
    }
  };

  // JSON-LD structured data for Organization
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AutoAd Broker",
    "description": t('subtitle'),
    "url": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'}/${locale}`,
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://autoad-broker.com'}/logo.png`,
    "sameAs": [
      "https://t.me/autoadbroker",
      "https://twitter.com/autoadbroker"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["en", "uk", "ru"]
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      {/* Flying triangles background */}
      <div className="absolute inset-0">
        <FlyingTriangles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {t('title')}
            </h1>
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                {t('subtitle')}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-10">
                🚀 {t('launch_date')}
              </div>
            </div>
            <div className="mt-10">
              <a
                href="#waitlist"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label={`${t('cta')} - ${t('subtitle')}`}
              >
                {t('cta')}
              </a>
            </div>
          </div>

          {/* Right side - Phone mockup - Always visible with fixed dimensions */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative" style={{ width: '384px', height: '624px' }}>
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl w-full h-full">
                <div className="relative bg-black rounded-[2rem] p-1 w-full h-full">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden relative w-full h-full">
                    {/* Phone screen content - GIF Preview */}
                    <Image
                      src={getGifForLocale(locale)}
                      alt={`AutoAd Broker Preview - ${locale.toUpperCase()}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  {/* Phone notch */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full"></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
