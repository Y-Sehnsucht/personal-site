import type { Metadata } from 'next';

import ContactPageContent from '@/components/Contact/ContactPageContent';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description: `Contact ${profile.name} via email at ${profile.email}.`,
  path: '/contact/',
});

export default function ContactPage() {
  return (
    <PageWrapper hideFooter mainClassName="page-main--contact">
      <ContactPageContent />
    </PageWrapper>
  );
}
