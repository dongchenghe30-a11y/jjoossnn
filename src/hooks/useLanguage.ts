import { useState, useCallback, useEffect, useMemo } from 'react';
import type { Language } from '@/i18n';
import { translations } from '@/i18n';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('json-formatter-lang');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('json-formatter-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const toggleLanguage = useCallback(() => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  }, []);

  const t = useMemo(() => ({
    ...translations[lang],
    lang,
  }), [lang]);

  return { lang, toggleLanguage, t };
}
