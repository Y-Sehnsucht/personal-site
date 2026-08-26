import type { Metadata } from 'next';

import ProjectsPageContent from '@/components/Projects/ProjectsPageContent';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import {
  breadcrumbNode,
  collectionPageNode,
  HOME_URL,
  SITE_URL,
} from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PROJECTS_URL = `${SITE_URL}/projects/`;

const PROJECTS_DESCRIPTION = `Early projects and experiments from ${AUTHOR_NAME} (2015 and earlier).`;

export const metadata: Metadata = createPageMetadata({
  title: 'Archive',
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          collectionPageNode({
            url: PROJECTS_URL,
            name: 'Archive',
            description: PROJECTS_DESCRIPTION,
            hasBreadcrumb: true,
          }),
          breadcrumbNode(PROJECTS_URL, [
            { name: 'Home', url: HOME_URL },
            { name: 'Archive', url: PROJECTS_URL },
          ]),
        ]}
      />
      <ProjectsPageContent />
    </PageWrapper>
  );
}
