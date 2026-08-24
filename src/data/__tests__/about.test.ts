import { describe, expect, it } from 'vitest';

import { aboutMarkdown } from '../about';

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
});
