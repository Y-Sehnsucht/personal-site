import type { Metadata } from 'next';

import Awards from '@/components/Resume/Awards';
import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import ResearchProfile from '@/components/Resume/ResearchProfile';
import ResumeHeader from '@/components/Resume/ResumeHeader';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { AUTHOR_NAME } from '@/lib/utils';

export const metadata: Metadata = createPageMetadata({
  title: 'Academic CV',
  description: `${AUTHOR_NAME}'s academic CV, including research interests, education, selected projects, awards, coursework, and technical skills.`,
  path: '/resume/',
});

export default function ResumePage() {
  return (
    <PageWrapper>
      <section className="resume-page">
        <ResumeHeader />

        <ResumeNav />

        <div className="resume-content">
          <section id="research" className="resume-section">
            <ResearchProfile />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="experience" className="resume-section">
            <Experience data={work} />
          </section>

          <section id="awards" className="resume-section">
            <Awards />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="courses" className="resume-section">
            <Courses data={courses} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
