import Link from 'next/link';

import profile from '@/data/profile.json';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            I&apos;m a sophomore undergraduate student in Software Engineering at{' '}
            <a
              href="https://www.ecnu.edu.cn/"
              className="hero-highlight"
              target="_blank"
              rel="noreferrer"
            >
              East China Normal University
            </a>
            . My interests lie at the intersection of artificial intelligence 
            and software engineering. I am particularly interested in AI-assisted software development, 
            LLM-based intelligent agents, and the design of reliable and efficient AI systems. 
            I enjoy turning course knowledge into
            structured and practical projects.
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              About Me
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View Resume
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
        </div>
      </div>

      <div className="hero-bg" aria-hidden="true" />
    </section>
  );
}
