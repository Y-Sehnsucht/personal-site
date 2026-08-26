'use client';

import achievements from '@/data/achievements';
import { useLanguage } from '@/i18n/LanguageProvider';
import { copy, t } from '@/i18n/translations';
import { withBasePath } from '@/lib/assetPath';

const levelZh: Record<string, string> = {
  National: '国家级',
  Municipal: '市级',
  University: '校级',
  Organization: '组织',
};

export default function AchievementsPageContent() {
  const { locale } = useLanguage();

  return (
    <section className="achievements-page">
      <header className="projects-header">
        <h1 className="page-title">{t('achievements', locale)}</h1>
        <p className="page-subtitle">{copy('achievementsSubtitle', locale)}</p>
      </header>

      <div className="achievements-list">
        {achievements.map((achievement) => (
          <article
            className="achievement-item"
            key={`${achievement.title}-${achievement.award}`}
          >
            <span className="achievement-level">
              {locale === 'zh-CN'
                ? levelZh[achievement.level]
                : achievement.level}
            </span>

            <div className="achievement-main">
              <h2>
                {locale === 'zh-CN'
                  ? (achievement.titleZh ?? achievement.title)
                  : achievement.title}
              </h2>
              <p>
                {locale === 'zh-CN'
                  ? (achievement.awardZh ?? achievement.award)
                  : achievement.award}
              </p>
            </div>

            {achievement.certificate && (
              <a
                className="achievement-certificate"
                href={withBasePath(achievement.certificate)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'zh-CN' ? '证书 →' : 'Certificate →'}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
