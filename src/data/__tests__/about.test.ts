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

  it('contains academic interests and projects', () => {
    expect(aboutMarkdown).toContain('# Academic Interests');
    expect(aboutMarkdown).toContain('# Projects and Practice');
    expect(aboutMarkdown).toContain('[Projects](/projects/)');
  });

  it('links to the achievements page', () => {
    expect(aboutMarkdown).toContain('# Competitions and Awards');
    expect(aboutMarkdown).toContain('[Achievements](/achievements/)');
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
    expect(aboutMarkdownZh).toContain('# 项目实践');
    expect(aboutMarkdownZh).toContain('# 竞赛与获奖');
    expect(aboutMarkdownZh).toContain('# 兴趣与日常');
    expect(aboutMarkdownZh).toContain('# 城市与经历');
    expect(aboutMarkdownZh).toContain('# 后续方向');
    expect(aboutMarkdownZh).not.toContain('# Academic Interests');
  });

  it('keeps the requested Chinese future direction and real technology names', () => {
    expect(aboutMarkdownZh).toContain(
      '后续将继续加强软件设计、系统、算法与工程实践训练，并进一步探索 AI 在软件开发中的实际应用',
    );
    expect(aboutMarkdownZh).toContain('ScaffoldMind');
    expect(aboutMarkdownZh).toContain('Maple');
    expect(aboutMarkdownZh).toContain('CSAPP');
    expect(aboutMarkdownZh).toContain('Spring Boot');
    expect(aboutMarkdownZh).toContain('Simulink');
    expect(aboutMarkdownZh).toContain('PID');
  });
});
