'use client';

import type { Course as CourseType } from '@/data/resume/courses';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';
import type { Locale } from '@/i18n/types';

import Course from './Courses/Course';

interface CoursesProps {
  data: CourseType[];
}

function getRows(courses: CourseType[], locale: Locale) {
  // Copy first: `sort` mutates in place, and this receives the imported
  // module array, so rendering was reordering shared data as a side effect.
  return [...courses]
    .sort(
      (a, b) =>
        b.university.localeCompare(a.university) ||
        a.number.localeCompare(b.number),
    )
    .map((course) => (
      <Course data={course} key={course.title} locale={locale} />
    ));
}

export default function Courses({ data }: CoursesProps) {
  const { locale } = useLanguage();

  return (
    <div className="courses">
      <div className="title">
        <h2>{t('resumeCourses', locale)}</h2>
      </div>
      <ul className="course-list">{getRows(data, locale)}</ul>
    </div>
  );
}
