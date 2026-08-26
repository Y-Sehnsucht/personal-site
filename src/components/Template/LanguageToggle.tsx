'use client';

import { useLanguage } from '@/i18n/LanguageProvider';

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();
  const isChinese = locale === 'zh-CN';
  const label = isChinese ? 'Switch to English' : '切换到中文';

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLocale}
      aria-label={label}
      title={label}
    >
      {isChinese ? 'EN' : '中文'}
    </button>
  );
}
