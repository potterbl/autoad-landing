import { useParams } from 'next/navigation';
import en from '../dictionaries/en.json';
import uk from '../dictionaries/uk.json';
import ru from '../dictionaries/ru.json';

const dictionaries = { en, uk, ru };

export type Locale = 'en' | 'uk' | 'ru';

export function useTranslations(namespace?: string) {
  const params = useParams();
  const locale = (params?.locale as Locale) || 'en';

  return function t(key: string): string {
    const dict = dictionaries[locale] || dictionaries.en;
    const keys = namespace ? `${namespace}.${key}` : key;

    const result = keys.split('.').reduce((obj: unknown, k: string) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return (obj as Record<string, unknown>)[k];
      }
      return undefined;
    }, dict as unknown);

    return typeof result === 'string' ? result : key;
  };
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.en;
}
