'use client';

import data from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageProvider';
import { copy, t } from '@/i18n/translations';

import Cell from './Cell';

export default function ProjectsPageContent() {
  const { locale } = useLanguage();
  const featuredProjects = data.filter((project) => project.featured);
  const otherProjects = data.filter((project) => !project.featured);

  return (
    <section className="projects-page">
      <header className="projects-header">
        <h1 className="page-title">{t('projects', locale)}</h1>
        <p className="page-subtitle">{copy('projectsSubtitle', locale)}</p>
      </header>

      {featuredProjects.length > 0 && (
        <section className="projects-featured">
          <h2 className="projects-section-title">
            {t('selectedProjects', locale)}
          </h2>
          <div className="projects-grid projects-grid--featured">
            {featuredProjects.map((project) => (
              <Cell data={project} key={project.title} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="projects-other">
          <h2 className="projects-section-title">
            {t('additionalProjects', locale)}
          </h2>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <Cell data={project} key={project.title} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
