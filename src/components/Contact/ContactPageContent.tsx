'use client';

import { useLanguage } from '@/i18n/LanguageProvider';
import { copy } from '@/i18n/translations';

import ContactIcons from './ContactIcons';
import EmailLink from './EmailLink';

export default function ContactPageContent() {
  const { locale } = useLanguage();

  return (
    <section className="contact-page contact-page--centered">
      <header className="contact-header">
        <h1 className="page-title">{copy('contactTitle', locale)}</h1>
      </header>

      <div className="contact-content">
        <div className="contact-email-block">
          <EmailLink />
          <p className="contact-hint">
            {locale === 'zh-CN'
              ? '通常会在 24 小时内回复'
              : 'Usually respond within 24 hours'}
          </p>
        </div>

        <div className="contact-divider">
          <span>
            {locale === 'zh-CN' ? '也可以在这里找到我' : 'or find me on'}
          </span>
        </div>

        <ContactIcons includeEmail={false} />
      </div>
    </section>
  );
}
