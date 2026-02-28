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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="text-left lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
              {t('title')}
            </h1>
            <div className="max-w-2xl">
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

          {/* Right side - Phone mockup */}
          <div className="lg:block hidden">
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="relative bg-black rounded-[2rem] p-1">
                  <div className="bg-white rounded-[1.5rem] overflow-hidden h-[600px]">
                    {/* Phone screen content */}
                    <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-600 leading-relaxed">
                          {t('demo_placeholder')}
                        </div>
                        <div className="mt-6 space-y-2">
                          <div className="h-3 bg-blue-200 rounded animate-pulse"></div>
                          <div className="h-3 bg-purple-200 rounded animate-pulse"></div>
                          <div className="h-3 bg-blue-200 rounded w-3/4 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
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
