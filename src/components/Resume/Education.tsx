'use client';

import type { Degree as DegreeType } from '@/data/resume/degrees';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

import Degree from './Education/Degree';

interface EducationProps {
  data: DegreeType[];
}

export default function Education({ data }: EducationProps) {
  const { locale } = useLanguage();

  return (
    <div className="education">
      <div className="title">
        <h2>{t('resumeEducation', locale)}</h2>
      </div>
      {data.map((degree) => (
        <Degree data={degree} key={degree.school} locale={locale} />
      ))}
    </div>
  );
}
