import type { Degree as DegreeType } from '@/data/resume/degrees';
import { resumeText } from '@/i18n/resume';
import type { Locale } from '@/i18n/types';

interface DegreeProps {
  data: DegreeType;
  locale?: Locale;
}

export default function Degree({ data, locale = 'en' }: DegreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{resumeText(data.degree, locale)}</h3>
        <p className="school">
          <a href={data.link}>{resumeText(data.school, locale)}</a>,{' '}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
    </article>
  );
}
