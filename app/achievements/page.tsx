import type { Metadata } from 'next';

import AchievementsPageContent from '@/components/Achievements/AchievementsPageContent';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

const ACHIEVEMENTS_DESCRIPTION =
  'Selected competition awards at national, municipal, university, and organization levels.';

export const metadata: Metadata = createPageMetadata({
  title: 'Achievements',
  description: ACHIEVEMENTS_DESCRIPTION,
  path: '/achievements/',
});

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <AchievementsPageContent />
    </PageWrapper>
  );
}
