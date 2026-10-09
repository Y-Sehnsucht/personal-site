import { describe, expect, it } from 'vitest';

import projects from '../projects';

describe('projects data', () => {
  it('exports an array of projects', () => {
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('each project has required properties', () => {
    for (const project of projects) {
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('id');
      expect(project).toHaveProperty('image');
      expect(project).toHaveProperty('date');
      expect(project).toHaveProperty('desc');

      expect(typeof project.title).toBe('string');
      expect(typeof project.image).toBe('string');
      expect(typeof project.date).toBe('string');
      expect(typeof project.desc).toBe('string');
    }
  });

  it('project titles are non-empty', () => {
    for (const project of projects) {
      expect(project.title.trim().length).toBeGreaterThan(0);
    }
  });

  it('project descriptions are non-empty', () => {
    for (const project of projects) {
      expect(project.desc.trim().length).toBeGreaterThan(0);
    }
  });

  it('image paths start with /', () => {
    for (const project of projects) {
      expect(project.image.startsWith('/')).toBe(true);
    }
  });

  it('dates are valid date strings', () => {
    for (const project of projects) {
      const date = new Date(project.date);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  });

  it('links are valid URLs when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const project of projects) {
      if (project.link) {
        expect(project.link).toMatch(urlRegex);
      }
    }
  });

  it('tech is an array when present', () => {
    for (const project of projects) {
      if (project.tech) {
        expect(Array.isArray(project.tech)).toBe(true);
        expect(project.tech.length).toBeGreaterThan(0);
      }
    }
  });

  it('has unique project titles', () => {
    const titles = projects.map((p) => p.title);
    const uniqueTitles = new Set(titles);

    expect(uniqueTitles.size).toBe(titles.length);
  });

  it('featured is boolean when present', () => {
    for (const project of projects) {
      if (project.featured !== undefined) {
        expect(typeof project.featured).toBe('boolean');
      }
    }
  });

  it('has at least one featured project', () => {
    const featured = projects.filter((p) => p.featured);
    expect(featured.length).toBeGreaterThanOrEqual(1);
  });

  it('keeps Zhiyi as an image-preview project without an external link', () => {
    const zhiyi = projects.find((project) => project.title === 'Zhiyi');

    expect(zhiyi).toBeDefined();
    expect(zhiyi).not.toHaveProperty('link');
    expect(zhiyi?.image).toBe('/images/projects/zhiyi.jpg');
    expect(zhiyi?.titleZh).toBe('知翼');
    expect(zhiyi?.desc).toContain('proposal design');
  });

  it('states proposal-only projects without implying implementation', () => {
    const waterQuality = projects.find(
      (project) => project.id === 'water-quality',
    );

    expect(waterQuality?.subtitle).toContain('Technical Proposal Design');
    expect(waterQuality?.desc).toContain('technical proposal');
    expect(waterQuality?.desc).toContain('device concept design');
    expect(waterQuality?.date).toBe('2025-11-28');
  });

  it('keeps CV details next to their canonical project records', () => {
    const miniVdb = projects.find((project) => project.id === 'vector-index');
    const elevator = projects.find(
      (project) => project.id === 'elevator-control',
    );
    const maple = projects.find((project) => project.id === 'maple');

    expect(miniVdb?.cv?.supervisor).toBe('王丽苹');
    expect(miniVdb?.cv?.startDate).toBe('2026-06-01');
    expect(elevator?.cv?.contextZh).toContain('高端软件开发方法');
    expect(maple?.cv?.role).toBe('Database and Core API Subtask Owner');
  });

  it('provides three representative ScaffoldMind screenshots', () => {
    const scaffoldMind = projects.find(
      (project) => project.id === 'scaffoldmind',
    );

    expect(scaffoldMind?.images).toHaveLength(3);
    expect(scaffoldMind?.link).toBe(
      'https://y-sehnsucht.github.io/scaffoldmind/',
    );
  });

  it('provides five independently produced elevator modeling results', () => {
    const elevator = projects.find(
      (project) => project.id === 'elevator-control',
    );

    expect(elevator?.images).toHaveLength(5);
    expect(elevator?.images?.map((image) => image.title)).toEqual([
      'ElevatorDynamics module',
      'FeedbackController module',
      'LoadCompensation module',
      'Half-load controller comparison',
      'Adaptation across load conditions',
    ]);
    expect(elevator?.images?.every((image) => image.captionZh)).toBe(true);
  });
});
