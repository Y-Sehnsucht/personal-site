import type { Metadata } from 'next';
import Link from 'next/link';

import Cell from '@/components/Projects/Cell';
import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <PageWrapper mainClassName="page-main--hero">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />

      <Hero />

      <section className="home-writing" aria-labelledby="home-projects-title">
        <div className="home-writing-header">
          <div>
            <span className="home-section-kicker">Selected Work</span>
            <h2 id="home-projects-title">Featured Projects</h2>
          </div>

          <Link href="/projects/" className="home-writing-all">
            View All
          </Link>
        </div>

        <div className="projects-grid projects-grid--featured">
          {featuredProjects.map((project) => (
            <Cell data={project} key={project.title} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}