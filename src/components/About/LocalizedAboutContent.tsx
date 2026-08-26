'use client';

import { aboutMarkdown, aboutMarkdownZh } from '@/data/about';
import { useLanguage } from '@/i18n/LanguageProvider';

import AboutContent from './Sections';

export default function LocalizedAboutContent() {
  const { locale } = useLanguage();

  return (
    <AboutContent
      markdown={locale === 'zh-CN' ? aboutMarkdownZh : aboutMarkdown}
    />
  );
}
