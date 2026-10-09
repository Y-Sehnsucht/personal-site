'use client';

import { academicMetrics } from '@/data/academic';
import profile from '@/data/profile.json';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';
import { SITE_URL } from '@/lib/utils';
import CvPdfActions from './CvPdfActions';

export default function ResumeHeader() {
  const { locale } = useLanguage();
  const language = locale === 'zh-CN' ? 'zh' : 'en';

  return (
    <header className="resume-header">
      <p className="resume-kicker">{t('resume', locale)}</p>
      <h1 className="resume-title">
        {locale === 'zh-CN' ? '颜子竣' : profile.name}
      </h1>
      <p className="resume-summary">{t('resumeSummary', locale)}</p>

      <CvPdfActions />

      <dl className="resume-metrics">
        {academicMetrics.map((metric) => (
          <div key={metric.label.en}>
            <dt>{metric.label[language]}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>

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
