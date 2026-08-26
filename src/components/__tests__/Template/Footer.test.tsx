import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import profile from '@/data/profile.json';
import { AUTHOR_NAME } from '@/lib/utils';

import Footer from '../../Template/Footer';

describe('Footer', () => {
  it('renders the footer with correct structure', () => {
    render(<Footer />);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('displays the name and academic role', () => {
    render(<Footer />);

    expect(screen.getByText(AUTHOR_NAME)).toBeInTheDocument();
    expect(
      screen.getByText(`${profile.role} at ${profile.school}`),
    ).toBeInTheDocument();
  });

  it('does not introduce unrelated headings into the page outline', () => {
    render(<Footer />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('displays the current year in copyright', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(
      screen.getByText(new RegExp(`© ${currentYear}`)),
    ).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute(
      'href',
      '/projects',
    );
    expect(screen.getByRole('link', { name: /achievements/i })).toHaveAttribute(
      'href',
      '/achievements',
    );
    expect(screen.getByRole('link', { name: /resume/i })).toHaveAttribute(
      'href',
      '/resume',
    );
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      '/contact',
    );

    expect(
      screen.queryByRole('link', { name: /archive/i }),
    ).not.toBeInTheDocument();
  });

  it('renders contact icons section', () => {
    render(<Footer />);

    // Contact icons are rendered via ContactIcons component
    const socialSection = document.querySelector('.footer-social');
    expect(socialSection).toBeInTheDocument();
    expect(screen.getByText('Connect')).toBeInTheDocument();
  });

  it('has link to home from avatar', () => {
    render(<Footer />);

    const avatarLink = document.querySelector('.footer-avatar');
    expect(avatarLink).toHaveAttribute('href', '/');
  });
});
