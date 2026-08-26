import type { Course as CourseType } from '@/data/resume/courses';
import { resumeText } from '@/i18n/resume';
import type { Locale } from '@/i18n/types';

interface CourseProps {
  data: CourseType;
  locale?: Locale;
}

export default function Course({ data, locale = 'en' }: CourseProps) {
  return (
    <li className="course-container">
      <a href={data.link}>
        <span className="course-number">{data.number}:</span>
        <span className="course-name">{resumeText(data.title, locale)}</span>
      </a>
    </li>
  );
}
