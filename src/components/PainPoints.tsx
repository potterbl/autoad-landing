'use client';

import { useTranslations } from '../lib/i18n';
import { Clock, ShieldX, CreditCard, MessageSquare } from 'lucide-react';

export function PainPoints() {
  const t = useTranslations('pain_points');

  const painPoints = [
    {
      icon: Clock,
      text: t('point1')
    },
    {
      icon: ShieldX,
      text: t('point2')
    },
    {
      icon: CreditCard,
      text: t('point3')
    },
    {
      icon: MessageSquare,
      text: t('point4')
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

        <div className="bg-gray-200 rounded-2xl p-8">
          <div className="grid grid-cols-1 gap-4">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-400 rounded-lg p-4 flex items-center gap-4"
                >
                  <Icon className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-700 font-medium">{point.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

