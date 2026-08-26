'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

import LocalizedAboutContent from './LocalizedAboutContent';

export default function AboutPageContent() {
  const { locale } = useLanguage();

  return (
    <section className="about-page">
      <header className="about-header">
        <h1 className="page-title">{t('about', locale)}</h1>
      </header>
      <LocalizedAboutContent />
    </section>
  );
}
