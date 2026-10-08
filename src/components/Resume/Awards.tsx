'use client';

import achievements from '@/data/achievements';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

export default function Awards() {
  const { locale } = useLanguage();
  const selectedAwards = achievements.filter((achievement) => achievement.cv);

  return (
    <div className="cv-awards">
      <div className="title">
        <h2>{t('cvAwards', locale)}</h2>
      </div>
      <ul className="cv-awards-list">
        {selectedAwards.map((achievement) => (
          <li key={`${achievement.title}-${achievement.award}`}>
            <div>
              <h3>
                {locale === 'zh-CN'
                  ? (achievement.titleZh ?? achievement.title)
                  : achievement.title}
              </h3>
              <p>
                {locale === 'zh-CN'
                  ? (achievement.awardZh ?? achievement.award)
                  : achievement.award}
              </p>
            </div>
            <span>{achievement.period}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
