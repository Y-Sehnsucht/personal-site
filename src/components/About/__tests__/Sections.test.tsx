import { render, screen, waitFor, within } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '@/data/about';
import { createHeadingId } from '@/lib/anchors';
import AboutContent from '../Sections';

function getActualSectionTitles(markdown: string) {
  return Array.from(markdown.matchAll(/^# (.+)$/gm))
    .map((match) => match[1])
    .filter((title) => title !== 'Intro');
}

describe('AboutContent', () => {
  it('renders intro copy without an Intro heading', () => {
    render(
      <AboutContent
        markdown={`# Intro

Hello from the intro.

# Academic Interests

- Built a thing.`}
      />,
    );

    expect(screen.getByText('Hello from the intro.')).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Intro' }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Academic Interests' }),
    ).toBeInTheDocument();
  });

  it('assigns section variants for compact and chronological sections', () => {
    const { container } = render(
      <AboutContent
        markdown={`# Intro

Lead paragraph.

# I Like

- Fitness

# Places & Journeys

- In 2026, I visited Chongqing.`}
      />,
    );

    const sections = container.querySelectorAll('.about-section');

    expect(sections).toHaveLength(2);
    expect(sections[0]).toHaveClass('about-section--compact');
    expect(sections[1]).toHaveClass('about-section--log');
  });

  it('adds stable heading ids for deep links', () => {
    render(
      <AboutContent
        markdown={`# Intro

Lead paragraph.

# Academic Interests

- Built a thing.

# Places & Journeys

- Went somewhere.`}
      />,
    );

    expect(
      screen.getByRole('heading', { name: 'Academic Interests' }),
    ).toHaveAttribute('id', 'academic-interests');
    expect(
      screen.getByRole('heading', { name: 'Places & Journeys' }),
    ).toHaveAttribute('id', 'places-and-journeys');
  });

  it('renders section navigation and self-links for the real about markdown', () => {
    const sectionTitles = getActualSectionTitles(aboutMarkdown);
    const { container } = render(<AboutContent markdown={aboutMarkdown} />);
    const nav = screen.getByRole('navigation', { name: 'About sections' });

    expect(within(nav).getAllByRole('link')).toHaveLength(sectionTitles.length);

    for (const title of sectionTitles) {
      const headingId = createHeadingId(title);
      const heading = screen.getByRole('heading', { name: title });

      expect(heading).toHaveAttribute('id', headingId);
      expect(within(nav).getByRole('link', { name: title })).toHaveAttribute(
        'href',
        `#${headingId}`,
      );
      expect(
        container.querySelector(`h2#${headingId} > a[href="#${headingId}"]`),
      ).toBeTruthy();
    }
  });

  it('renders matching hash links and heading ids into static markup', () => {
    const html = renderToStaticMarkup(
      <AboutContent markdown={aboutMarkdown} />,
    );

    expect(html).toContain('href="#academic-interests"');
    expect(html).toContain('id="academic-interests"');
    expect(html).toContain('href="#places-and-journeys"');
    expect(html).toContain('id="places-and-journeys"');
  });

  it('supports same-page hash navigation from section links', async () => {
    window.history.replaceState({}, '', '/about/');

    render(<AboutContent markdown={aboutMarkdown} />);

    const nav = screen.getByRole('navigation', { name: 'About sections' });
    const navLink = within(nav).getByRole('link', {
      name: 'Places & Journeys',
    });

    navLink.click();

    await waitFor(() => {
      expect(window.location.hash).toBe('#places-and-journeys');
    });
    expect(document.querySelector(window.location.hash)).toHaveTextContent(
      'Places & Journeys',
    );

    const heading = screen.getByRole('heading', { name: 'Current Focus' });
    const permalink = within(heading).getByRole('link', {
      name: 'Current Focus',
    });

    permalink.click();

    await waitFor(() => {
      expect(window.location.hash).toBe('#current-focus');
    });
    expect(document.querySelector(window.location.hash)).toHaveTextContent(
      'Current Focus',
    );
  });
});
