import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import projects from '@/data/projects';
import Cell from '../../Projects/Cell';

describe('Cell', () => {
  const mockProject = {
    title: 'Test Project',
    subtitle: 'A test subtitle',
    image: '/images/test.jpg',
    date: '2023-01-01',
    desc: 'This is a test project description',
    link: 'https://example.com',
  };

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('renders project as a clickable card with link', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site');

    render(<Cell data={mockProject} />);
    const link = screen.getByRole('link', { name: mockProject.title });
    expect(link).toHaveAttribute('href', mockProject.link);
    expect(link).toHaveClass('project-card-link');
    expect(
      document.querySelector('.project-card-affordance'),
    ).toHaveTextContent('↗');
  });

  it('renders project description', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText(mockProject.desc)).toBeInTheDocument();
  });

  it('renders project date in correct format', () => {
    render(<Cell data={mockProject} />);
    expect(screen.getByText('2023')).toBeInTheDocument();
  });

  it('treats the thumbnail as decorative beside its matching heading', () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site');

    render(<Cell data={mockProject} />);
    const image = document.querySelector('.project-card-image img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', '');
    expect(image).toHaveAttribute('src', '/personal-site/images/test.jpg');
  });

  it('does not imply that a static archive card is clickable', () => {
    render(<Cell data={{ ...mockProject, link: undefined }} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(
      document.querySelector('.project-card--preview'),
    ).toBeInTheDocument();
    expect(
      document.querySelector('.project-card-affordance'),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: `Preview image: ${mockProject.title}`,
      }),
    ).toBeInTheDocument();
  });

  it('opens image preview for projects without a URL and closes with Escape', async () => {
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/personal-site/');

    render(<Cell data={{ ...mockProject, link: undefined }} />);

    const trigger = screen.getByRole('button', {
      name: `Preview image: ${mockProject.title}`,
    });

    fireEvent.click(trigger);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: mockProject.title }),
    ).toHaveAttribute('src', '/personal-site/images/test.jpg');

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    expect(trigger).toHaveFocus();
  });

  it('closes the image preview from the close button', async () => {
    render(<Cell data={{ ...mockProject, link: undefined }} />);

    fireEvent.click(
      screen.getByRole('button', {
        name: `Preview image: ${mockProject.title}`,
      }),
    );
    fireEvent.click(
      screen.getByRole('button', { name: 'Close image preview' }),
    );

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('opens the Zhiyi image dialog without rendering or visiting its former link', () => {
    const zhiyi = projects.find((project) => project.title === 'Zhiyi');
    const initialUrl = window.location.href;

    expect(zhiyi).toBeDefined();
    if (!zhiyi) throw new Error('Zhiyi project fixture is missing');

    render(<Cell data={zhiyi} />);

    expect(
      screen.queryByRole('link', { name: 'Zhiyi' }),
    ).not.toBeInTheDocument();
    expect(
      document.querySelector('a[href*="feishu.cn"]'),
    ).not.toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: 'Preview image: Zhiyi' }),
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Zhiyi' })).toHaveAttribute(
      'src',
      expect.stringContaining('zhiyi.jpg'),
    );
    expect(window.location.href).toBe(initialUrl);
  });
});
