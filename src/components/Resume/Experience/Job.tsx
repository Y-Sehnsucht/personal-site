import type { Position } from '@/data/resume/work';
import { formatDate } from '@/i18n/format';
import { resumeText } from '@/i18n/resume';
import { t } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';

import JobSummary from './JobSummary';

/** How much weight a role carries on the timeline spine. */
export type JobTier = 'lead' | 'primary' | 'early';

interface JobProps {
  data: Position;
  locale?: Locale;
  tier?: JobTier;
}

export default function Job({
  data,
  locale = 'en',
  tier = 'primary',
}: JobProps) {
  const {
    name,
    nameZh,
    position,
    positionZh,
    context,
    contextZh,
    supervisor,
    url,
    startDate,
    endDate,
    summary,
    summaryZh,
    highlights,
    highlightsZh,
  } = data;
  const isCurrent = !endDate;
  const localizedName = locale === 'zh-CN' ? (nameZh ?? name) : name;
  const localizedPosition =
    locale === 'zh-CN' ? (positionZh ?? position) : position;
  const localizedContext =
    locale === 'zh-CN' ? (contextZh ?? context) : context;
  const localizedSummary =
    locale === 'zh-CN' ? (summaryZh ?? summary) : summary;
  const localizedHighlights =
    locale === 'zh-CN' ? (highlightsZh ?? highlights) : highlights;

  return (
    <article
      className={`jobs-container jobs-container--${tier}${
        isCurrent ? ' jobs-container--current' : ''
      }`}
    >
      <span className="job-marker" aria-hidden="true" />

      <p className="daterange">
        <time dateTime={startDate}>
          {formatDate(startDate, locale, { month: 'long', year: 'numeric' })}
        </time>
        {/* The dash is decorative, so a screen reader would otherwise run the
            dates together as "March 2026 Present". */}
        <span className="daterange-sep" aria-hidden="true">
          -
        </span>
        <span className="sr-only">{t('to', locale)}</span>
        {endDate ? (
          <time dateTime={endDate}>
            {formatDate(endDate, locale, { month: 'long', year: 'numeric' })}
          </time>
        ) : (
          <span className="daterange-present">{t('present', locale)}</span>
        )}
      </p>

      <div className="job-body">
        <header>
          <h3>
            {url ? (
              <a href={url} className="job-company">
                {localizedName}
              </a>
            ) : (
              <span className="job-company">{localizedName}</span>
            )}
            <span className="job-position">{localizedPosition}</span>
          </h3>
          {localizedContext ? (
            <p className="job-context">
              {localizedContext}
              {supervisor ? (
                <>
                  <span aria-hidden="true"> · </span>
                  {locale === 'zh-CN' ? '指导教师：' : 'Supervisor: '}
                  {supervisor}
                </>
              ) : null}
            </p>
          ) : null}
        </header>
        {localizedSummary ? <JobSummary summary={localizedSummary} /> : null}
        {localizedHighlights ? (
          <ul className="points">
            {localizedHighlights.map((highlight) => (
              <li key={highlight}>{resumeText(highlight, locale)}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
