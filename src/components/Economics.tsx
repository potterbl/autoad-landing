'use client';

import { useTranslations } from '../lib/i18n';
import { DollarSign, TrendingUp, Clock, Shield } from 'lucide-react';

export function Economics() {
  const t = useTranslations('economics');

  const economicsPoints = [
    {
      icon: DollarSign,
      title: 'Service Commission',
      text: t('service_fee')
    },
    {
      icon: TrendingUp,
      title: 'Minimum Withdrawal',
      text: t('min_withdrawal')
    },
    {
      icon: Shield,
      title: 'Withdrawal Methods',
      text: t('withdrawal_methods')
    },
    {
      icon: Clock,
      title: 'Withdrawal Speed',
      text: t('withdrawal_speed')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {economicsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
