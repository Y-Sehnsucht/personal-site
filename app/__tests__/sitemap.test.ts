import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';
import sitemap from '../sitemap';

describe('sitemap', () => {
  it('contains every public page', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual([
      `${SITE_URL}/`,
      `${SITE_URL}/about/`,
      `${SITE_URL}/projects/`,
      `${SITE_URL}/achievements/`,
      `${SITE_URL}/resume/`,
      `${SITE_URL}/contact/`,
    ]);
  });

  it('does not expose removed routes', () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls.some((url) => url.includes('/writing/'))).toBe(false);
    expect(urls.some((url) => url.includes('/stats/'))).toBe(false);
    expect(urls.some((url) => url.includes('/feed.xml'))).toBe(false);
  });

  it('uses trailing slashes', () => {
    expect(sitemap().every((entry) => entry.url.endsWith('/'))).toBe(true);
  });
});
