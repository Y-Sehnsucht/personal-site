import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';
import { AUTHOR_NAME, SHARE_IMAGE_PATH, SITE_URL } from '@/lib/utils';
import { metadata as aboutMetadata } from '../about/page';
import { metadata as achievementsMetadata } from '../achievements/page';
import { metadata as contactMetadata } from '../contact/page';
import { metadata as notFoundMetadata } from '../not-found';
import { metadata as projectsMetadata } from '../projects/page';
import { metadata as resumeMetadata } from '../resume/page';

const pageCases = [
  ['about', aboutMetadata, `${SITE_URL}/about/`],
  ['achievements', achievementsMetadata, `${SITE_URL}/achievements/`],
  ['contact', contactMetadata, `${SITE_URL}/contact/`],
  ['projects', projectsMetadata, `${SITE_URL}/projects/`],
  ['resume', resumeMetadata, `${SITE_URL}/resume/`],
] as const;

describe('page metadata', () => {
  it('builds the contact description from the shared email', () => {
    expect(contactMetadata.description).toContain(profile.email);
  });

  it.each(pageCases)(
    'sets page-specific metadata for %s',
    (_, metadata, url) => {
      expect(metadata.openGraph?.url).toBe(url);
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.openGraph?.title).toBe(
        `${metadata.title} | ${AUTHOR_NAME}`,
      );

      expect(metadata.twitter?.description).toBe(metadata.description);
      expect(metadata.twitter?.title).toBe(
        `${metadata.title} | ${AUTHOR_NAME}`,
      );

      expect(metadata.alternates?.canonical).toBe(url);
    },
  );

  it.each([
    ...pageCases.map(([name, metadata]) => [name, metadata] as const),
    ['404', notFoundMetadata] as const,
  ])('declares the share card on %s', (_, metadata) => {
    expect(JSON.stringify(metadata.openGraph?.images)).toContain(
      SHARE_IMAGE_PATH,
    );
    expect(JSON.stringify(metadata.twitter?.images)).toContain(
      SHARE_IMAGE_PATH,
    );
  });

  it('does not give the 404 page a canonical URL', () => {
    expect(notFoundMetadata.alternates?.canonical).toBeUndefined();
    expect(notFoundMetadata.openGraph?.url).toBeUndefined();
  });
});
