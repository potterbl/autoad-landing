'use client';

import { useTranslations } from '../lib/i18n';

export function Economics() {
  const t = useTranslations('economics');

  const economicsPoints = [
    {
      icon: '💰',
      title: t('deposit_title'),
      text: t('deposit')
    },
    {
      icon: '✅',
      title: t('service_fee_title'),
      text: t('service_fee')
    },
    {
      icon: '🎯',
      title: t('withdrawal_title'),
      text: t('withdrawal')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {economicsPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Additional details */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('withdrawal_settings_label')}:</h4>
              <p>{t('min_withdrawal')}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('withdrawal_methods_label')}:</h4>
              <p>{t('withdrawal_methods')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
