'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import routes from '@/data/routes';
import { useLanguage } from '@/i18n/LanguageProvider';
import { routeLabel, t } from '@/i18n/translations';
import { isActiveRoute } from '@/lib/routes';
import { AUTHOR_NAME } from '@/lib/utils';

import Hamburger from './Hamburger';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const pathname = usePathname();
  const { locale } = useLanguage();

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label={`${AUTHOR_NAME} home`}>
        <span className="logo-text">ZJ</span>
      </Link>

      <nav className="nav-links" aria-label={t('primaryNav', locale)}>
        {routes
          .filter((l) => !l.index && l.primary !== false)
          .map((l) => {
            const active = isActiveRoute(pathname, l.path);

            return (
              <Link
                key={l.label}
                href={l.path}
                className={`nav-link ${active ? 'active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {routeLabel(l.path, locale)}
              </Link>
            );
          })}
      </nav>

      <div className="nav-actions">
        <LanguageToggle />
        <ThemeToggle />
        <Hamburger />
      </div>
    </header>
  );
}
