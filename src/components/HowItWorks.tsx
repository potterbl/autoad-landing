'use client';

import { useTranslations } from '../lib/i18n';
import { Smartphone } from 'lucide-react';

export function HowItWorks() {
  const t = useTranslations('how_it_works');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start justify-center lg:justify-between max-w-5xl mx-auto">
            {/* Left Steps */}
            <div className="lg:w-1/3 space-y-16 lg:pt-8">
              <div className="text-left">
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {t('step1.title')}
                  </div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {t('step2.title')}
                  </div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                </div>
              </div>
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
              <div className="text-left">
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {t('step3.title')}
                  </div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded w-4/5"></div>
                </div>
              </div>
              <div className="text-left">
                <div className="bg-gray-200 rounded-lg p-4 mb-4">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {t('result.title')}
                  </div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded mb-2"></div>
                  <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

