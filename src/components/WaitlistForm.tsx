'use client';

import { useTranslations } from '../lib/i18n';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function WaitlistForm() {
  const t = useTranslations('waitlist');
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    role: '',
    comment: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate role selection
    if (!formData.role) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', telegram: '', role: '', comment: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="waitlist" className="py-20 bg-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
        </div>

        <div className="bg-gray-200 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('form.name')}
                required
                className="w-full px-4 py-3 bg-gray-400 placeholder-gray-600 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
              />
            </div>
            <div>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder={t('form.telegram')}
                required
                className="w-full px-4 py-3 bg-gray-400 placeholder-gray-600 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200"
              />
            </div>
            <div>
              <div className="space-y-3">
                <label className="block text-gray-700 text-sm font-medium">
                  {t('form.role')}
                </label>
                <div className="relative">
                  <div className="flex items-center justify-between bg-gray-400 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, role: 'advertiser' }))}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                        formData.role === 'advertiser'
                          ? 'bg-gray-700 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t('form.role_options.advertiser')}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, role: 'admin' }))}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                        formData.role === 'admin'
                          ? 'bg-gray-700 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {t('form.role_options.admin')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder={t('form.comment')}
                rows={3}
                className="w-full px-4 py-3 bg-gray-400 placeholder-gray-600 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>{t('form.submit')}</span>
                  </>
                )}
              </button>
            </div>

            {status === 'success' && (
              <div className="text-center text-green-700 bg-green-100 py-2 px-4 rounded-lg">
                {t('form.success')}
              </div>
            )}

            {status === 'error' && (
              <div className="text-center text-red-700 bg-red-100 py-2 px-4 rounded-lg">
                {t('form.error')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

