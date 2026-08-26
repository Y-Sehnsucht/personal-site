'use client';

import Link from 'next/link';

import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';

export default function References() {
  const { locale } = useLanguage();

  return (
    <div className="references">
      {/* The sticky index links to #references, so the section needs a
          heading to land on like every other one. */}
      <div className="title">
        <h2>{t('resumeReferences', locale)}</h2>
      </div>
      <p className="text-sm text-[var(--color-fg-light)] text-center">
        {t('resumeReferencesText', locale)}{' '}
        <Link
          href="/contact"
          className="font-medium text-[var(--color-accent)] hover:text-[var(--color-fg-bold)] transition-colors duration-150"
        >
          {t('getInTouch', locale)} →
        </Link>
      </p>
    </div>
  );
}
