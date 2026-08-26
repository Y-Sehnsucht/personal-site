import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

function read(relativePath: string) {
  return fs.readFileSync(path.join(process.cwd(), relativePath), 'utf8');
}

describe('layout width tokens', () => {
  it('uses viewport-aware shared page measures', () => {
    const spacing = read('app/styles/tokens/spacing.css');

    expect(spacing).toContain('--measure-read: 40rem');
    expect(spacing).toContain('--measure-page: 56rem');
    expect(spacing).toContain('--measure-wide: clamp(70rem, 62.5vw, 80rem)');
  });

  it('aligns page and footer shells to the same measure without fixed narrow max-widths', () => {
    const page = read('app/styles/layout/page.css');
    const footer = read('app/styles/layout/footer.css');
    const header = read('app/styles/layout/header.css');

    expect(page).toContain('box-sizing: border-box');
    expect(page).toContain('width: min(100%, var(--measure-page))');
    expect(page).toContain('width: min(100%, var(--measure-wide))');
    expect(page).toContain('width: min(100%, var(--measure-read))');
    expect(footer).toContain('width: min(100%, var(--measure-page))');
    expect(header).toContain('calc((100vw - var(--measure-page)) / 2 + 2rem)');
  });

  it('uses the reference type scale with readable body text', () => {
    const typography = read('app/styles/tokens/typography.css');
    const baseTypography = read('app/styles/base/typography.css');
    const reset = read('app/styles/base/reset.css');
    const page = read('app/styles/layout/page.css');
    const resume = read('app/styles/pages/resume.css');

    expect(typography).toContain('--text-2xs: 0.6875rem');
    expect(typography).toContain('--text-ui: 0.8125rem');
    expect(typography).toContain('--text-base: 1rem');
    expect(typography).toContain('--text-md: 1.125rem');
    expect(typography).toContain('--text-lg: 1.375rem');
    expect(typography).toContain('--text-xl: 1.75rem');
    expect(typography).toContain('--text-2xl: 2.25rem');
    expect(typography).toContain('--text-3xl: 3rem');
    expect(typography).toContain('--text-display: clamp(3rem, 9vw, 5.75rem)');
    expect(typography).toContain('--text-body-mobile: var(--text-base)');
    expect(typography).toContain('--text-body: var(--text-md)');
    expect(typography).toContain('--text-lead: var(--text-lg)');
    expect(typography).toContain('--text-page-title: var(--text-3xl)');
    expect(typography).toContain('--leading-normal: 1.72');
    expect(baseTypography).toContain('font-size: var(--text-page-title)');
    expect(baseTypography).toContain(
      'font-size: var(--text-page-title-mobile)',
    );
    expect(reset).toContain(
      "html[lang='zh-CN'] body {\n      font-size: var(--text-body-mobile);",
    );
    expect(page).not.toContain('font-size: var(--text-page-title)');
    expect(resume).not.toContain('font-size: var(--text-page-title)');
  });

  it('assigns semantic measures by page purpose', () => {
    const about = read('app/about/page.tsx');
    const contact = read('app/contact/page.tsx');
    const projects = read('app/projects/page.tsx');
    const resume = read('app/resume/page.tsx');
    const achievements = read('app/achievements/page.tsx');

    const content = read('app/styles/pages/content.css');

    expect(about).not.toContain('page-main--read');
    expect(contact).toContain('mainClassName="page-main--contact"');
    expect(projects).not.toContain('page-main--wide');
    expect(resume).not.toContain('page-main--read');
    expect(achievements).not.toContain('page-main--read');
    expect(content).toContain('max-width: var(--measure-read)');
    expect(content).toContain('margin-left: 0');
  });

  it('uses the compact reference header scale and controls', () => {
    const spacing = read('app/styles/tokens/spacing.css');
    const navigation = read('app/styles/layout/navigation.css');

    expect(spacing).toContain('--header-height: 4rem');
    expect(spacing).toContain('--header-height-mobile: 3.5rem');
    expect(navigation).toContain('font-size: var(--text-logo)');
    expect(navigation).toContain('font-size: var(--text-nav)');
    expect(navigation).toContain('font-weight: var(--font-weight-medium)');
    expect(navigation).toContain('height: 44px');
    expect(navigation).toContain('width: 44px');
  });

  it('keeps About sections vertical at every viewport', () => {
    const content = read('app/styles/pages/content.css');

    expect(content).toContain(
      '.about-section {\n  margin-top: var(--spacing-24);\n}',
    );
    expect(content).not.toContain('grid-template-columns: minmax(11rem, 24%)');
    expect(content).not.toContain('.about-section > :not(h2)');
    expect(content).not.toMatch(
      /\.about-section h2\s*{[^}]*position:\s*sticky/,
    );
  });

  it('keeps the longer Hero copy measure without changing the grid or portrait width', () => {
    const home = read('app/styles/pages/home.css');

    expect(home).toContain('grid-template-columns: minmax(0, 1fr) auto');
    expect(home).toContain('max-width: 62ch');
    expect(home).toContain('width: 280px');
  });

  it('keeps Chinese UI text readable and portraits in color', () => {
    const content = read('app/styles/pages/content.css');
    const home = read('app/styles/pages/home.css');
    const footer = read('app/styles/layout/footer.css');

    expect(content).toContain("html[lang='zh-CN']");
    expect(content).toContain('.project-card-date');
    expect(content).toContain('.daterange');
    expect(content).toContain('.footer-copyright');
    expect(content).toContain('font-weight: var(--font-weight-medium)');
    expect(content).not.toContain(
      "html[lang='zh-CN'] .about-content li {\n  font-size",
    );
    expect(home).toMatch(/\.hero-portrait img\s*{[^}]*filter:\s*none/);
    expect(footer).toMatch(/\.footer-avatar img\s*{[^}]*filter:\s*none/);
  });
});
