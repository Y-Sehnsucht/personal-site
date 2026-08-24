import type { Metadata } from 'next';

import PageWrapper from '@/components/Template/PageWrapper';
import achievements from '@/data/achievements';
import { createPageMetadata } from '@/lib/metadata';

const ACHIEVEMENTS_DESCRIPTION =
  'Selected competition awards at national, municipal, university, and organization levels.';

export const metadata: Metadata = createPageMetadata({
  title: 'Achievements',
  description: ACHIEVEMENTS_DESCRIPTION,
  path: '/achievements/',
});

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <section className="achievements-page">
        <header className="projects-header">
          <h1 className="page-title">Achievements</h1>
          <p className="page-subtitle">
            Selected awards from programming, innovation, engineering, and
            interdisciplinary competitions.
          </p>
        </header>

        <div className="achievements-list">
          {achievements.map((achievement) => (
            <article
              className="achievement-item"
              key={`${achievement.title}-${achievement.award}`}
            >
              <span className="achievement-level">{achievement.level}</span>

              <div className="achievement-main">
                <h2>{achievement.title}</h2>
                <p>{achievement.award}</p>
              </div>

              {achievement.certificate && (
                <a
                  className="achievement-certificate"
                  href={achievement.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
