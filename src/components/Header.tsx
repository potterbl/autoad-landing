'use client';

import { useTranslations } from '../lib/i18n';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const t = useTranslations('header');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {t('title')}
            </h1>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

