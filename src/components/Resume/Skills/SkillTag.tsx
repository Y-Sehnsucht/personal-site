import type { CSSProperties } from 'react';

import type { Category, Skill } from '@/data/resume/skills';
import { resumeText } from '@/i18n/resume';
import type { Locale } from '@/i18n/types';
import { MAX_COMPETENCY } from '@/lib/utils';

interface SkillTagProps {
  data: Skill;
  categories: Category[];
  locale?: Locale;
}

export default function SkillTag({
  data,
  categories,
  locale = 'en',
}: SkillTagProps) {
  const { category, competency, title } = data;
  const displayTitle = resumeText(title, locale);

  // Get the primary category color
  const categoryColor = categories.find((cat) =>
    category.includes(cat.name),
  )?.color;

  // Size based on competency (5 = large, 4 = medium, 3 = small)
  const sizeClass =
    competency >= 5
      ? 'skill-tag--lg'
      : competency >= 4
        ? 'skill-tag--md'
        : 'skill-tag--sm';

  return (
    <span
      className={`skill-tag ${sizeClass}`}
      style={
        {
          '--tag-color': categoryColor,
        } as CSSProperties
      }
      title={
        locale === 'zh-CN'
          ? `${displayTitle}: 熟练度 ${competency}/${MAX_COMPETENCY}`
          : `${displayTitle}: ${competency} out of ${MAX_COMPETENCY}`
      }
      aria-label={
        locale === 'zh-CN'
          ? `${displayTitle}: 熟练度 ${competency}/${MAX_COMPETENCY}`
          : `${displayTitle}: proficiency ${competency} out of ${MAX_COMPETENCY}`
      }
    >
      <span className="skill-tag-name">{displayTitle}</span>
    </span>
  );
}
