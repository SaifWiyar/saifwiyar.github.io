import type { Locale } from '../types';
export const t = (locale: Locale, en: string, ps: string, fa: string) => locale === 'en' ? en : locale === 'ps' ? ps : fa;
