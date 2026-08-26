import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import LanguageToggle from '@/components/Template/LanguageToggle';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageProvider';

function LocaleReadout() {
  const { locale } = useLanguage();
  return <span>{locale}</span>;
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = 'en';
  });

  it('toggles language, persists the selection, and updates html lang', async () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
        <LocaleReadout />
      </LanguageProvider>,
    );

    expect(screen.getByText('en')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: '切换到中文' }));

    expect(screen.getByText('zh-CN')).toBeInTheDocument();
    expect(window.localStorage.getItem('site-language')).toBe('zh-CN');
    expect(document.documentElement.lang).toBe('zh-CN');
    expect(
      screen.getByRole('button', { name: 'Switch to English' }),
    ).toBeInTheDocument();
  });

  it('loads a stored language preference', async () => {
    window.localStorage.setItem('site-language', 'zh-CN');

    render(
      <LanguageProvider>
        <LocaleReadout />
      </LanguageProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('zh-CN')).toBeInTheDocument();
    });
    expect(document.documentElement.lang).toBe('zh-CN');
  });

  it('falls back to English for an invalid stored language', async () => {
    window.localStorage.setItem('site-language', 'fr');

    render(
      <LanguageProvider>
        <LocaleReadout />
      </LanguageProvider>,
    );

    await waitFor(() => {
      expect(screen.getByText('en')).toBeInTheDocument();
    });
    expect(document.documentElement.lang).toBe('en');
  });
});
