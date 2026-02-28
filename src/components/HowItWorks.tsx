'use client';

import { useTranslations } from '../lib/i18n';

export function HowItWorks() {
  const t = useTranslations('how_it_works');

  const steps = [
    {
      id: 'step1',
      number: '1',
      icon: '🔗',
      title: t('step1.description'),
      detail: t('step1.detail')
    },
    {
      id: 'step2',
      number: '2',
      icon: '💰',
      title: t('step2.description'),
      detail: t('step2.detail')
    },
    {
      id: 'step3',
      number: '3',
      icon: '🤖',
      title: t('step3.description'),
      detail: t('step3.detail')
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

        {/* Desktop horizontal layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-3 gap-8 relative z-10">
              {steps.map((step) => (
                <div key={step.id} className="text-center">
                  <div className="bg-white border-4 border-blue-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold">
                  {step.number}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{step.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
