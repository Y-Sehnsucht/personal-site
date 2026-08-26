import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import AchievementsPageContent from '../../Achievements/AchievementsPageContent';

describe('AchievementsPageContent', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('prefixes local certificate links with the configured base path', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site/');

    render(<AchievementsPageContent />);

    const certificateLinks = screen.getAllByRole('link', {
      name: /Certificate/,
    });

    expect(certificateLinks).toHaveLength(3);
    expect(certificateLinks[0]).toHaveAttribute(
      'href',
      '/personal-site/images/achievements/rst-national-third.jpg',
    );
    for (const link of certificateLinks) {
      expect(link.getAttribute('href')).toMatch(
        /^\/personal-site\/images\/achievements\//,
      );
    }
  });
});
