'use client';

import { useTranslations } from '../lib/i18n';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            >
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
