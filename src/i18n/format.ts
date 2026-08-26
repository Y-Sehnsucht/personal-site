import type { Locale } from './types';

export function localized<T>(locale: Locale, english: T, chinese?: T): T {
  return locale === 'zh-CN' && chinese !== undefined ? chinese : english;
}

export function formatDate(
  date: string,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat(locale, options ?? { year: 'numeric' }).format(
    new Date(date),
  );
}
