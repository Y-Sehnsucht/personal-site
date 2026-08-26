'use client';

import profile from '@/data/profile.json';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';
import { SITE_URL } from '@/lib/utils';

export default function ResumeHeader() {
  const { locale } = useLanguage();

  return (
    <header className="resume-header">
      <h1 className="resume-title">{t('resume', locale)}</h1>
      <p className="resume-summary">{t('resumeSummary', locale)}</p>
      {/* Print-only, but real markup rather than CSS `content`, so it is
          selectable, linkable, and reads from the shared profile. The
          screen layout carries these in the footer, which print hides. */}
      <address className="resume-print-contact">
        <a href={`${SITE_URL}/`}>{SITE_URL.replace(/^https?:\/\//, '')}</a>
        <span aria-hidden="true"> · </span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <span aria-hidden="true"> · </span>
        <a href="https://github.com/Y-Sehnsucht">github.com/Y-Sehnsucht</a>
      </address>
    </header>
  );
}
