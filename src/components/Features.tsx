'use client';

import { useTranslations } from '../lib/i18n';
import { Wallet, Calendar, Shield, Percent } from 'lucide-react';

export function Features() {
  const t = useTranslations('features');

  const features = [
    {
      icon: Wallet,
      title: t('feature1.title'),
      description: t('feature1.description')
    },
    {
      icon: Calendar,
      title: t('feature2.title'),
      description: t('feature2.description')
    },
    {
      icon: Shield,
      title: t('feature3.title'),
      description: t('feature3.description')
    },
    {
      icon: Percent,
      title: t('feature4.title'),
      description: t('feature4.description')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    </div>
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

