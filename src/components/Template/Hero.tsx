'use client';

import Link from 'next/link';

import profile from '@/data/profile.json';
import { useLanguage } from '@/i18n/LanguageProvider';
import { heroCopy, t } from '@/i18n/translations';

import ThemePortrait from './ThemePortrait';

export default function Hero() {
  const { locale } = useLanguage();
  const copy = locale === 'zh-CN' ? heroCopy.zh : heroCopy.en;

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>

          <p className="hero-tagline">
            {copy.firstBeforeSchool}
            <a
              href="https://www.ecnu.edu.cn/"
              className="hero-highlight"
              target="_blank"
              rel="noreferrer"
            >
              {copy.school}
            </a>
            {copy.rest}
          </p>

          <div className="hero-cta">
            <Link href="/about" className="button">
              {t('aboutMe', locale)}
            </Link>
            <Link href="/resume" className="hero-resume-link">
              {t('viewResume', locale)}
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
