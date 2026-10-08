'use client';

import { researchInterests, researchPreparation } from '@/data/academic';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

export default function ResearchProfile() {
  const { locale } = useLanguage();
  const language = locale === 'zh-CN' ? 'zh' : 'en';

  return (
    <div className="research-profile">
      <div className="title">
        <h2>{t('cvResearchProfile', locale)}</h2>
      </div>

      <p className="research-objective">
        {researchPreparation.objective[language]}
      </p>

      <div className="research-interest-list">
        {researchInterests.map((interest, index) => (
          <article className="research-interest" key={interest.title.en}>
            <span className="research-interest-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{interest.title[language]}</h3>
              <p>{interest.description[language]}</p>
            </div>
          </article>
        ))}
      </div>

      <dl className="research-notes">
        <div>
          <dt>{t('cvAvailability', locale)}</dt>
          <dd>{researchPreparation.availability[language]}</dd>
        </div>
      </dl>
    </div>
  );
}
