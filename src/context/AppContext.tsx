import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Locale, ThemeMode } from '../types';
import { translations } from '../data/translations';

interface AppContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isDark: boolean;
  copy: (typeof translations)[Locale];
}
const AppContext = createContext<AppContextValue | undefined>(undefined);
const locales: Locale[] = ['en', 'ps', 'fa'];
const getStoredLocale = (): Locale => {
  const value = localStorage.getItem('portfolio-locale');
  return locales.includes(value as Locale) ? value as Locale : 'en';
};
const getStoredTheme = (): ThemeMode => {
  const value = localStorage.getItem('portfolio-theme');
  return value === 'light' || value === 'dark' || value === 'system' ? value : 'system';
};
export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getStoredLocale);
  const [theme, setThemeState] = useState<ThemeMode>(getStoredTheme);
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);
  const isDark = theme === 'dark' || (theme === 'system' && systemDark);
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark);
    root.lang = locale;
    root.dir = locale === 'en' ? 'ltr' : 'rtl';
    root.dataset.locale = locale;
  }, [isDark, locale]);
  const setLocale = (next: Locale) => { localStorage.setItem('portfolio-locale', next); setLocaleState(next); };
  const setTheme = (next: ThemeMode) => { localStorage.setItem('portfolio-theme', next); setThemeState(next); };
  const value = useMemo(() => ({ locale, setLocale, theme, setTheme, isDark, copy: translations[locale] }), [locale, theme, isDark]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// The hook intentionally remains beside the provider to preserve the existing public import path.
// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used inside AppProvider');
  return context;
}
