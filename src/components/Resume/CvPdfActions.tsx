'use client';

import {
  faCircleDown,
  faCircleXmark,
  faEye,
  faWindowMaximize,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';
import { withBasePath } from '@/lib/assetPath';

const PDF_PATH = '/files/zijun-yan-cv.pdf';

export default function CvPdfActions() {
  const { locale } = useLanguage();
  const [previewOpen, setPreviewOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const pdfUrl = withBasePath(PDF_PATH);

  useEffect(() => {
    if (!previewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [previewOpen]);

  const preview = previewOpen
    ? createPortal(
        <div
          className="resume-pdf-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setPreviewOpen(false);
          }}
        >
          <section
            className="resume-pdf-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header className="resume-pdf-dialog-header">
              <h2 id={titleId}>{t('cvPdfDialog', locale)}</h2>
              <div className="resume-pdf-dialog-actions">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-pdf-icon-action"
                  aria-label={t('openCvPdfNewTab', locale)}
                  title={t('openCvPdfNewTab', locale)}
                >
                  <FontAwesomeIcon icon={faWindowMaximize} />
                </a>
                <button
                  type="button"
                  ref={closeRef}
                  className="resume-pdf-icon-action"
                  onClick={() => setPreviewOpen(false)}
                  aria-label={t('closeCvPdf', locale)}
                  title={t('closeCvPdf', locale)}
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>
            </header>
            <iframe
              className="resume-pdf-frame"
              src={pdfUrl}
              title={t('cvPdfDialog', locale)}
            />
            <p className="resume-pdf-fallback">
              {t('cvPdfFallback', locale)}{' '}
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                {t('openCvPdfNewTab', locale)}
              </a>
            </p>
          </section>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div className="resume-pdf-actions">
        <button
          type="button"
          ref={triggerRef}
          className="resume-pdf-action"
          onClick={() => setPreviewOpen(true)}
        >
          <FontAwesomeIcon icon={faEye} />
          <span>{t('previewCvPdf', locale)}</span>
        </button>
        <a
          href={pdfUrl}
          download="Zijun-Yan-CV.pdf"
          className="resume-pdf-action resume-pdf-action--primary"
        >
          <FontAwesomeIcon icon={faCircleDown} />
          <span>{t('downloadCvPdf', locale)}</span>
        </a>
      </div>
      {preview}
    </>
  );
}
