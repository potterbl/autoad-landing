'use client';

import { useTranslations } from '../lib/i18n';
import { Linkedin, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function FounderSection() {
  const t = useTranslations('founder');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-blue-100">
                <Image
                  src="/founder-avatar.jpeg"
                  alt="Founder Avatar"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Message */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t('message')}
              </p>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/potterbl/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href="https://t.me/potter_bl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
