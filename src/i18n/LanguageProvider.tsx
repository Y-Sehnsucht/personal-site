'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { Locale } from './types';

export type { Locale } from './types';

const STORAGE_KEY = 'site-language';
const DEFAULT_LOCALE: Locale = 'en';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const fallbackLanguageContext: LanguageContextValue = {
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  toggleLocale: () => {},
};

function isLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'zh-CN';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setLocaleState(isLocale(stored) ? stored : DEFAULT_LOCALE);
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'zh-CN' : 'en');
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    return fallbackLanguageContext;
  }
  return value;
}
