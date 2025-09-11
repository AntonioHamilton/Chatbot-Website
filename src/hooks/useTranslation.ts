import { useEffect, useState } from 'react';

export const useTranslation = () => {
  const [language, setLanguage] = useState('EN_US');

  useEffect(() => {
    const stored = localStorage.getItem('language');
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
