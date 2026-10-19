import { useEffect, useState } from 'react';

const PARAM_LANGUAGES: Record<string, string> = {
  pt: 'PT_BR',
  en: 'EN_US',
};

let languageParamConsumed = false;

const consumeLanguageParam = () => {
  if (languageParamConsumed) return null;
  languageParamConsumed = true;
  const value = new URLSearchParams(window.location.search)
    .get('language')
    ?.toLowerCase();
  const language = value ? PARAM_LANGUAGES[value] : undefined;
  if (!language) return null;

  localStorage.setItem('language', language);
  return language;
};

export const useTranslation = () => {
  const [language, setLanguage] = useState('EN_US');

  useEffect(() => {
    const stored = consumeLanguageParam() ?? localStorage.getItem('language');
    if (stored) setLanguage(stored);

    const handleChange = (e: CustomEvent) => {
      setLanguage(e.detail);
    };

    window.addEventListener('languageChange', handleChange as EventListener);
    return () => {
      window.removeEventListener(
        'languageChange',
        handleChange as EventListener
      );
    };
  }, []);

  return { language };
};
