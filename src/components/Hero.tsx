'use client';

import { useTranslations } from '../lib/i18n';
import { useParams } from 'next/navigation';
import { FlyingTriangles } from './FlyingTriangles';

export function Hero() {
  const t = useTranslations('hero');
  const params = useParams();
  const locale = params?.locale as string || 'en';

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
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            {t('title')}
          </h1>
          <div className="max-w-4xl mx-auto">
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
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label={`${t('cta')} - ${t('subtitle')}`}
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
