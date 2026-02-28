'use client';

import { useTranslations } from '../lib/i18n';

export function Roadmap() {
  const t = useTranslations('roadmap');

  const versions = [
    {
      id: 'v1',
      status: 'current',
      title: t('v1.title'),
      description: t('v1.description')
    },
    {
      id: 'v2',
      status: 'planned',
      title: t('v2.title'),
      description: t('v2.description')
    },
    {
      id: 'v3',
      status: 'future',
      title: t('v3.title'),
      description: t('v3.description')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Desktop layout */}
        <div className="relative hidden lg:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {versions.map((version, index) => (
              <div key={version.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                    version.status === 'current' 
                      ? 'bg-green-500' 
                      : version.status === 'planned' 
                        ? 'bg-blue-500'
                        : 'bg-gray-400'
                  }`}></div>
                </div>

                {/* Content card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? 'ml-8' : 'mr-8'
                  }`}>
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {version.title}
                      </h3>
                      {version.status === 'current' && (
                        <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          {t('status_current')}
                        </span>
                      )}
                      {version.status === 'planned' && (
                        <span className="ml-3 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          {t('status_planned')}
                        </span>
                      )}
                      {version.status === 'future' && (
                        <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                          {t('status_future')}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {version.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {versions.map((version, index) => (
              <div key={version.id} className="relative pl-8">
                {/* Mobile timeline dot */}
                <div className="absolute left-0 top-6 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                    version.status === 'current' 
                      ? 'bg-green-500' 
                      : version.status === 'planned' 
                        ? 'bg-blue-500'
                        : 'bg-gray-400'
                  }`}></div>
                </div>

                {/* Mobile content card */}
                <div className="w-full">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {version.title}
                        </h3>
                        {version.status === 'current' && (
                          <span className="w-fit px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            {t('status_current')}
                          </span>
                        )}
                        {version.status === 'planned' && (
                          <span className="w-fit px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {t('status_planned')}
                          </span>
                        )}
                        {version.status === 'future' && (
                          <span className="w-fit px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {t('status_future')}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {version.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
