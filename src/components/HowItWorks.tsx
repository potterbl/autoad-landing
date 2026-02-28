'use client';

import { useTranslations } from '../lib/i18n';

export function HowItWorks() {
  const t = useTranslations('how_it_works');

  const steps = [
    {
      id: 'step1',
      title: t('step1.title'),
      description: t('step1.description'),
      detail: t('step1.detail')
    },
    {
      id: 'step2',
      title: t('step2.title'),
      description: t('step2.description'),
      detail: t('step2.detail')
    },
    {
      id: 'step3',
      title: t('step3.title'),
      description: t('step3.description'),
      detail: t('step3.detail')
    },
    {
      id: 'result',
      title: t('result.title'),
      description: t('result.description'),
      detail: t('result.detail')
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

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between max-w-6xl mx-auto">
            {/* Left Steps */}
            <div className="lg:w-1/3 space-y-16 lg:pt-8">
              {steps.slice(0, 2).map((step, index) => (
                <div
                  key={step.id}
                  className="text-left"
                >
                  <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-300 transition-colors duration-200">
                    <div className="text-sm font-semibold text-blue-600 mb-3">
                      {step.title}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.description}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Phone */}
            <div className="lg:w-1/3 flex justify-center my-12 lg:my-0">
              <div className="bg-white p-4 rounded-3xl shadow-xl border-4 border-gray-900">
                <div className="w-20 h-40 bg-white rounded-2xl flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-900 rounded-full mb-32"></div>
                </div>
              </div>
            </div>

            {/* Right Steps */}
            <div className="lg:w-1/3 space-y-16 lg:pt-8">
              {steps.slice(2, 4).map((step, index) => (
                <div
                  key={step.id}
                  className="text-left"
                >
                  <div className="bg-gray-200 rounded-lg p-6 hover:bg-gray-300 transition-colors duration-200">
                    <div className="text-sm font-semibold text-green-600 mb-3">
                      {step.title}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {step.description}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

