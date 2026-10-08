import { render, screen, waitFor, within } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { aboutMarkdown, aboutMarkdownZh } from '@/data/about';
import { createHeadingId } from '@/lib/anchors';
import AboutContent from '../Sections';

function getActualSectionTitles(markdown: string) {
  return Array.from(markdown.matchAll(/^# (.+)$/gm))
    .map((match) => match[1])
    .filter((title) => title !== 'Intro');
}

function expectHeadingBeforeContent(title: string) {
  const heading = screen.getByRole('heading', { name: title });
  const section = heading.closest('section');
  const followingText = Array.from(section?.childNodes ?? [])
    .slice(1)
    .map((node) => node.textContent)
    .join('')
    .trim();

  expect(section).not.toBeNull();
  expect(section?.firstElementChild).toBe(heading);
  expect(followingText).not.toBe('');
}

function getListItemsForSection(title: string) {
  const heading = screen.getByRole('heading', { name: title });
  const section = heading.closest('section');

  expect(section).not.toBeNull();

  return Array.from(section?.querySelectorAll('li') ?? []).map((item) =>
    item.textContent?.trim(),
  );
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

  it('renders localized Chinese section titles without English leftovers', () => {
    render(<AboutContent markdown={aboutMarkdownZh} />);

    const nav = screen.getByRole('navigation', { name: '关于页面目录' });

    expect(within(nav).getByRole('link', { name: '学术兴趣' })).toHaveAttribute(
      'href',
      '#学术兴趣',
    );
    expect(
      screen.queryByRole('heading', { name: 'Academic Interests' }),
    ).not.toBeInTheDocument();

    for (const title of [
      '学术兴趣',
      '教育与学习',
      '兴趣与日常',
      '城市与经历',
      '我所期待的',
      '近期重点',
      '后续方向',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    }
  });

  it('renders the missing personal and current-focus sections in Chinese', () => {
    const { container } = render(<AboutContent markdown={aboutMarkdownZh} />);

    expect(
      screen.getByRole('heading', { name: '我所期待的' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: '近期重点' }),
    ).toBeInTheDocument();
    expect(getListItemsForSection('我所期待的')).toHaveLength(6);
    expect(getListItemsForSection('近期重点')).toHaveLength(4);

    const compactSections = container.querySelectorAll(
      '.about-section--compact',
    );
    expect(compactSections.length).toBeGreaterThanOrEqual(3);
  });

  it('keeps English and Chinese section headings above their content', () => {
    const { rerender } = render(<AboutContent markdown={aboutMarkdown} />);

    for (const title of getActualSectionTitles(aboutMarkdown)) {
      expectHeadingBeforeContent(title);
    }

    rerender(<AboutContent markdown={aboutMarkdownZh} />);

    for (const title of getActualSectionTitles(aboutMarkdownZh)) {
      expectHeadingBeforeContent(title);
    }
  });

  it('renders three ordered academic interests in one list for each language', () => {
    const englishLabels = [
      'Software engineering and developer tools.',
      'AI-assisted software engineering.',
      'Algorithms and reliable systems.',
    ];
    const chineseLabels = [
      '软件工程与开发工具。',
      'AI 辅助软件工程。',
      '算法与可靠系统。',
    ];

    const { rerender } = render(<AboutContent markdown={aboutMarkdown} />);
    const englishHeading = screen.getByRole('heading', {
      name: 'Academic Interests',
    });
    const englishSection = englishHeading.closest('section');
    const englishItems = getListItemsForSection('Academic Interests');

    expect(englishSection).not.toHaveClass('about-section--compact');
    expect(englishItems).toHaveLength(3);
    englishLabels.forEach((label, index) => {
      expect(englishItems[index]?.startsWith(label)).toBe(true);
    });

    rerender(<AboutContent markdown={aboutMarkdownZh} />);
    const chineseHeading = screen.getByRole('heading', { name: '学术兴趣' });
    const chineseSection = chineseHeading.closest('section');
    const chineseItems = getListItemsForSection('学术兴趣');

    expect(chineseSection).not.toHaveClass('about-section--compact');
    expect(chineseItems).toHaveLength(3);
    chineseLabels.forEach((label, index) => {
      expect(chineseItems[index]?.startsWith(label)).toBe(true);
    });
  });

  it('renders English and Chinese interests as matching individual list items', () => {
    const englishItems = [
      'Fitness.',
      'Films.',
      'Table tennis.',
      'Listening to music.',
      'Traveling.',
      'Winter and snow.',
      'Photography.',
      'Reading.',
      'Fluffy cats and dogs.',
      'Trying new things.',
      'Hanging out and feeling the vibe.',
      'Anime.',
      'Podcasts.',
      'Piano.',
    ];
    const chineseItems = [
      '健身。',
      '电影。',
      '乒乓球。',
      '听音乐。',
      '旅行。',
      '冬天和雪。',
      '摄影。',
      '阅读。',
      '毛茸茸的猫和狗。',
      '尝试新事物。',
      '闲逛，感受氛围。',
      '动漫。',
      '播客。',
      '钢琴。',
    ];

    const { rerender } = render(<AboutContent markdown={aboutMarkdown} />);
    expect(getListItemsForSection('I Like')).toEqual(englishItems);

    rerender(<AboutContent markdown={aboutMarkdownZh} />);
    const zhItems = getListItemsForSection('兴趣与日常');

    expect(zhItems).toEqual(chineseItems);
    expect(zhItems).toHaveLength(englishItems.length);
    expect(zhItems.indexOf('健身。')).not.toBe(zhItems.indexOf('乒乓球。'));
    expect(zhItems.indexOf('摄影。')).not.toBe(zhItems.indexOf('阅读。'));
    expect(zhItems.indexOf('电影。')).not.toBe(zhItems.indexOf('动漫。'));
    expect(zhItems.join('')).not.toContain('健身、乒乓球和旅行');
    expect(zhItems.join('')).not.toContain('和朋友一起闲逛');
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
