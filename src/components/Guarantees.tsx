'use client';

import { useTranslations } from '../lib/i18n';

export function Guarantees() {
  const t = useTranslations('guarantees');

  const guarantees = [
    {
      id: 'guarantee1',
      icon: '🔍',
      title: t('guarantee1.title'),
      description: t('guarantee1.description')
    },
    {
      id: 'guarantee2',
      icon: '⏰',
      title: t('guarantee2.title'),
      description: t('guarantee2.description')
    },
    {
      id: 'guarantee3',
      icon: '⚡',
      title: t('guarantee3.title'),
      description: t('guarantee3.description')
    },
    {
      id: 'guarantee4',
      icon: '✅',
      title: t('guarantee4.title'),
      description: t('guarantee4.description')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((guarantee) => (
            <div
              key={guarantee.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
    </section>
  );
}

