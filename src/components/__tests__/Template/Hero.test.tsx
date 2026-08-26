import { render, screen } from '@testing-library/react';
import { type ReactNode, useEffect } from 'react';
import { describe, expect, it } from 'vitest';

import { LanguageProvider, useLanguage } from '@/i18n/LanguageProvider';

import Hero from '../../Template/Hero';

function ChineseLanguage({ children }: { children: ReactNode }) {
  const { setLocale } = useLanguage();

  useEffect(() => {
    setLocale('zh-CN');
  }, [setLocale]);

  return <>{children}</>;
}

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
      "I'm a sophomore undergraduate student in Software Engineering at East China Normal University.",
    );
    expect(tagline).toHaveTextContent(/AI-assisted development/i);
    expect(tagline).toHaveTextContent(/LLM-based agents/i);

    expect(tagline).not.toHaveTextContent(/Member of the Technical Staff/i);
    expect(tagline).not.toHaveTextContent(/co-founded/i);
  });

  it('renders the Chinese school link and undergraduate sentence', async () => {
    const { container } = render(
      <LanguageProvider>
        <ChineseLanguage>
          <Hero />
        </ChineseLanguage>
      </LanguageProvider>,
    );

    const universityLink = await screen.findByRole('link', {
      name: '华东师范大学',
    });

    expect(universityLink).toHaveAttribute('href', 'https://www.ecnu.edu.cn/');
    expect(container.querySelector('.hero-tagline')).toHaveTextContent(
      '华东师范大学软件工程专业大二本科生。当前学习重点包括数据结构与算法、计算机系统、软件设计与工程实践；在此基础上，也关注 AI 辅助开发、基于大模型的智能体，以及可靠、高效的智能系统。',
    );
    expect(container.querySelector('.hero-tagline')).not.toHaveTextContent(
      /我目前就读于/,
    );
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
