'use client';

import { useTranslations } from '../lib/i18n';
import { Database, Server, Lock } from 'lucide-react';

export function Security() {
  const t = useTranslations('security');

  const securityFeatures = [
    {
      icon: Database,
      title: 'Transaction Layer',
      text: t('transaction_layer')
    },
    {
      icon: Server,
      title: 'Payment Queues',
      text: t('payment_queues')
    },
    {
      icon: Lock,
      title: 'Security Features',
      text: t('security_features')
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Icon className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
