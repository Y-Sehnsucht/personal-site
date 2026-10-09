import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import CvPdfActions from '@/components/Resume/CvPdfActions';

describe('CvPdfActions', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('provides a base-path-aware PDF download', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site');
    render(<CvPdfActions />);

    expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
      'href',
      '/personal-site/files/zijun-yan-cv.pdf',
    );
    expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
      'download',
      'Zijun-Yan-CV.pdf',
    );
  });

  it('previews the PDF in a modal and restores focus after Escape', async () => {
    render(<CvPdfActions />);
    const trigger = screen.getByRole('button', { name: 'Preview PDF' });

    fireEvent.click(trigger);

    expect(
      screen.getByRole('dialog', { name: 'Zijun Yan - PDF CV' }),
    ).toBeInTheDocument();
    expect(screen.getByTitle('Zijun Yan - PDF CV')).toHaveAttribute(
      'src',
      '/files/zijun-yan-cv.pdf',
    );
    expect(document.querySelector('.resume-pdf-overlay')?.parentElement).toBe(
      document.body,
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });
});
