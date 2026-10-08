import { describe, expect, it } from 'vitest';

import work from '../resume/work';

describe('work data', () => {
  it('exports an array of positions', () => {
    expect(Array.isArray(work)).toBe(true);
    expect(work.length).toBeGreaterThan(0);
  });

  it('each position has required properties', () => {
    for (const job of work) {
      expect(job).toHaveProperty('name');
      expect(job).toHaveProperty('position');
      expect(job).toHaveProperty('startDate');

      expect(typeof job.name).toBe('string');
      expect(typeof job.position).toBe('string');
      expect(typeof job.startDate).toBe('string');
    }
  });

  it('startDate is a valid date string', () => {
    for (const job of work) {
      const date = new Date(job.startDate);
      expect(date.toString()).not.toBe('Invalid Date');
    }
  });

  it('endDate is valid when present', () => {
    for (const job of work) {
      if (job.endDate) {
        const date = new Date(job.endDate);
        expect(date.toString()).not.toBe('Invalid Date');
      }
    }
  });

  it('endDate is after startDate when present', () => {
    for (const job of work) {
      if (job.endDate) {
        const start = new Date(job.startDate);
        const end = new Date(job.endDate);

        expect(end.getTime()).toBeGreaterThan(start.getTime());
      }
    }
  });

  it('urls are valid when present', () => {
    const urlRegex = /^https?:\/\/.+/;

    for (const job of work) {
      if (job.url) {
        expect(job.url).toMatch(urlRegex);
      }
    }
  });

  it('does not present completed course projects as current work', () => {
    expect(work.every((job) => Boolean(job.endDate))).toBe(true);
  });

  it('highlights are arrays when present', () => {
    for (const job of work) {
      if (job.highlights) {
        expect(Array.isArray(job.highlights)).toBe(true);
        expect(job.highlights.length).toBeGreaterThan(0);
      }
    }
  });

  it('preserves the verified project date ranges', () => {
    expect(work.map(({ startDate, endDate }) => [startDate, endDate])).toEqual([
      ['2026-05-25', '2026-06-03'],
      ['2026-06-01', '2026-06-30'],
      ['2026-07-01', '2026-07-31'],
      ['2026-01-29', '2026-03-07'],
    ]);
  });

  it('project names are non-empty', () => {
    for (const job of work) {
      expect(job.name.trim().length).toBeGreaterThan(0);
    }
  });

  it('selects the four projects most relevant to an academic CV', () => {
    expect(work.map((job) => job.name)).toEqual([
      'ScaffoldMind',
      'Mini-VDB: Dynamic Vector Index and Exact Top-K Retrieval',
      'Intelligent Elevator Collaborative Modeling and Simulation',
      'Maple',
    ]);
  });

  it('keeps bilingual summaries and highlights aligned', () => {
    for (const job of work) {
      expect(job.summaryZh).toBeTruthy();
      expect(job.highlightsZh?.length).toBe(job.highlights?.length);
    }
  });
});
