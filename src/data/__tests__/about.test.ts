import { describe, expect, it } from 'vitest';

import { aboutMarkdown, aboutMarkdownZh } from '../about';

describe('about data', () => {
  it('exports non-empty Markdown content', () => {
    expect(typeof aboutMarkdown).toBe('string');
    expect(aboutMarkdown.length).toBeGreaterThan(500);
  });

  it('contains the academic introduction', () => {
    expect(aboutMarkdown).toContain('# Intro');
    expect(aboutMarkdown).toContain('East China Normal University');
    expect(aboutMarkdown).toContain('Software Engineering');
  });

  it('contains the research interests without duplicating project records', () => {
    expect(aboutMarkdown).toContain('# Academic Interests');
    expect(aboutMarkdown).toContain('Software engineering and developer tools');
    expect(aboutMarkdown).toContain('AI-assisted software engineering');
    expect(aboutMarkdown).toContain('Algorithms and reliable systems');
    expect(aboutMarkdown).not.toContain('# Projects and Practice');
  });

  it('leaves full project and award inventories to their dedicated pages', () => {
    expect(aboutMarkdown).not.toContain('# Competitions and Awards');
    expect(aboutMarkdown).not.toContain('[Achievements](/achievements/)');
  });

  it('retains personal sections', () => {
    expect(aboutMarkdown).toContain('# I Like');
    expect(aboutMarkdown).toContain('# Places & Journeys');
    expect(aboutMarkdown).toContain('# I Dream Of');
  });

  it('contains current and future directions', () => {
    expect(aboutMarkdown).toContain('# Current Focus');
    expect(aboutMarkdown).toContain('# Future Directions');
  });

  it('does not contain stale employer copy', () => {
    expect(aboutMarkdown).not.toContain('Member of the Technical Staff');
    expect(aboutMarkdown).not.toContain('co-founded');
  });

  it('contains natural Chinese about sections without untranslated headings', () => {
    expect(aboutMarkdownZh).toContain('# 学术兴趣');
    expect(aboutMarkdownZh).toContain('# 教育与学习');
    expect(aboutMarkdownZh).toContain('# 兴趣与日常');
    expect(aboutMarkdownZh).toContain('# 城市与经历');
    expect(aboutMarkdownZh).toContain('# 我所期待的');
    expect(aboutMarkdownZh).toContain('# 近期重点');
    expect(aboutMarkdownZh).toContain('# 后续方向');
    expect(aboutMarkdownZh).not.toContain('# Academic Interests');
  });

  it('keeps the same number of substantive sections in both languages', () => {
    const sectionCount = (markdown: string) =>
      markdown.match(/^# (?!Intro$).+/gm)?.length ?? 0;

    expect(sectionCount(aboutMarkdownZh)).toBe(sectionCount(aboutMarkdown));
  });

  it('keeps the Chinese future direction focused and honest', () => {
    expect(aboutMarkdownZh).toContain(
      '软件工程与开发工具、AI 辅助软件工程、算法与可靠系统',
    );
    expect(aboutMarkdownZh).toContain('Simulink');
    expect(aboutMarkdownZh).toContain('PID');
    expect(aboutMarkdownZh).not.toContain('# 项目实践');
  });
});
