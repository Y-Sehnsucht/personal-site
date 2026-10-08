import type { Degree as DegreeType } from '@/data/resume/degrees';
import { resumeText } from '@/i18n/resume';
import type { Locale } from '@/i18n/types';

interface DegreeProps {
  data: DegreeType;
  locale?: Locale;
}

export default function Degree({ data, locale = 'en' }: DegreeProps) {
  const details = locale === 'zh-CN' ? data.detailsZh : data.details;

  return (
    <article className="degree-container">
      <header>
        <h3 className="degree">{resumeText(data.degree, locale)}</h3>
        <p className="school">
          <a href={data.link}>{resumeText(data.school, locale)}</a>,{' '}
          {data.startYear ? (
            <>
              <time dateTime={String(data.startYear)}>{data.startYear}</time>
              <span aria-hidden="true"> - </span>
            </>
          ) : null}
          <time dateTime={String(data.year)}>{data.year}</time>
        </p>
      </header>
      {details ? (
        <ul className="degree-details">
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
