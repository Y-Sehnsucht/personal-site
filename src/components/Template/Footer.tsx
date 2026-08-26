'use client';

import Link from 'next/link';

import ContactIcons from '@/components/Contact/ContactIcons';
import profile from '@/data/profile.json';
import routes from '@/data/routes';
import { useLanguage } from '@/i18n/LanguageProvider';
import { routeLabel, t } from '@/i18n/translations';
import { AUTHOR_NAME } from '@/lib/utils';

import ThemePortrait from './ThemePortrait';

export default function Footer() {
  const { locale } = useLanguage();
  const currentRole =
    locale === 'zh-CN'
      ? '华东师范大学软件工程专业大二本科生'
      : `${profile.role} at ${profile.school}`;

  return (
    <footer className="site-footer-new">
      <div className="footer-content">
        <div className="footer-identity">
          <Link href="/" className="footer-avatar">
            <ThemePortrait width={80} height={80} />
          </Link>
          <div className="footer-info">
            <span className="footer-name">{AUTHOR_NAME}</span>
            <p className="footer-role">{currentRole}</p>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} ·{' '}
              <a
                href="https://github.com/Y-Sehnsucht/personal-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('source', locale)}
                <span className="sr-only">{t('opensNewTab', locale)}</span>
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <nav className="footer-links" aria-labelledby="footer-links-heading">
            <span id="footer-links-heading" className="footer-links-label">
              {t('explore', locale)}
            </span>
            <div className="footer-links-grid">
              {routes
                .filter((route) => !route.index)
                .map((route) => (
                  <Link key={route.path} href={route.path}>
                    {routeLabel(route.path, locale)}
                  </Link>
                ))}
            </div>
          </nav>

          <div
            className="footer-social"
            aria-labelledby="footer-social-heading"
          >
            <span id="footer-social-heading" className="footer-social-label">
              {t('connect', locale)}
            </span>
            <ContactIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
