'use client';

import Link from 'next/link';

import projects from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

import Cell from './Cell';

export default function HomeProjects() {
  const { locale } = useLanguage();
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="home-projects" aria-labelledby="home-projects-title">
      <div className="home-projects-header">
        <div>
          <span className="home-section-kicker">
            {t('selectedWork', locale)}
          </span>
          <h2 id="home-projects-title">{t('featuredProjects', locale)}</h2>
        </div>

        <Link href="/projects/" className="home-projects-all">
          {t('viewAll', locale)}
        </Link>
      </div>

      <div className="projects-grid projects-grid--featured">
        {featuredProjects.map((project) => (
          <Cell data={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}
