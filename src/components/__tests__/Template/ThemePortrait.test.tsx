import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ThemePortrait from '../../Template/ThemePortrait';

describe('ThemePortrait', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('prefixes the portrait source with the configured base path', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site');

    render(<ThemePortrait width={240} height={240} />);

    expect(screen.getByRole('img', { name: 'Zijun Yan' })).toHaveAttribute(
      'src',
      '/personal-site/images/me.jpg',
    );
  });
});
