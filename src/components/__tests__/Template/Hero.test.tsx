import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Zijun Yan');
  });

  it('describes the current academic focus', () => {
    const { container } = render(<Hero />);

    const universityLink = screen.getByRole('link', {
      name: /east china normal university/i,
    });

    expect(universityLink).toHaveAttribute('href', 'https://www.ecnu.edu.cn/');
    expect(universityLink).toHaveClass('hero-highlight');

    const tagline = container.querySelector('.hero-tagline');

    expect(tagline).toHaveTextContent(
      /sophomore undergraduate student in Software Engineering/i,
    );
    expect(tagline).toHaveTextContent(/AI-assisted software development/i);
    expect(tagline).toHaveTextContent(/LLM-based intelligent agents/i);

    expect(tagline).not.toHaveTextContent(/Member of the Technical Staff/i);
    expect(tagline).not.toHaveTextContent(/co-founded/i);
  });

  it('keeps personal metrics and incomplete credential lists off the homepage', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('.hero-chips')).not.toBeInTheDocument();
    expect(screen.queryByText('Countries visited')).not.toBeInTheDocument();
    expect(screen.queryByText('Computing since')).not.toBeInTheDocument();
    expect(screen.queryByText('Based in')).not.toBeInTheDocument();
    expect(screen.queryByText('YC Alum')).not.toBeInTheDocument();
    expect(screen.queryByText('Graduate credential')).not.toBeInTheDocument();
  });

  it('renders one primary CTA and one quieter resume link', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('hero-resume-link');
    expect(resumeButton).not.toHaveClass('button');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
