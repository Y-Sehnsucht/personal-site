import { afterEach, describe, expect, it, vi } from 'vitest';

import { withBasePath } from '../assetPath';

describe('withBasePath', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('keeps local asset paths rooted when no base path is configured', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '');

    expect(withBasePath('/images/me.jpg')).toBe('/images/me.jpg');
    expect(withBasePath('images/me.jpg')).toBe('/images/me.jpg');
  });

  it.each(['/personal-site', '/personal-site/'])(
    'prefixes assets for a Pages base path of %s',
    (basePath) => {
      vi.stubEnv('NEXT_PUBLIC_BASE_PATH', basePath);

      expect(withBasePath('/images/me.jpg')).toBe(
        '/personal-site/images/me.jpg',
      );
      expect(withBasePath('images/me.jpg')).toBe(
        '/personal-site/images/me.jpg',
      );
    },
  );

  it.each([
    'https://example.com/image.jpg',
    'http://example.com/image.jpg',
    'data:image/png;base64,abc',
    'blob:https://example.com/id',
    '//cdn.example.com/image.jpg',
  ])('preserves externally addressed assets: %s', (path) => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site/');

    expect(withBasePath(path)).toBe(path);
  });

  it('normalizes extra slashes without creating doubled path separators', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '//personal-site//');

    const result = withBasePath('/images/me.jpg');

    expect(result).toBe('/personal-site/images/me.jpg');
    expect(result).not.toContain('//personal-site');
    expect(result).not.toContain('site//images');
  });
});
