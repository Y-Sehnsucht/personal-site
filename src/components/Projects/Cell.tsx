'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';

import type { Project } from '@/data/projects';
import { formatDate } from '@/i18n/format';
import { useLanguage } from '@/i18n/LanguageProvider';
import { t } from '@/i18n/translations';
import { withBasePath } from '@/lib/assetPath';
import { PROJECT_IMAGE } from '@/lib/utils';

interface CellProps {
  data: Project;
}

export default function Cell({ data }: CellProps) {
  const { locale } = useLanguage();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [previewOpen, setPreviewOpen] = useState(false);
  const hasLink = Boolean(data.link);
  const title = locale === 'zh-CN' ? (data.titleZh ?? data.title) : data.title;
  const subtitle =
    locale === 'zh-CN' ? (data.subtitleZh ?? data.subtitle) : data.subtitle;
  const desc = locale === 'zh-CN' ? (data.descZh ?? data.desc) : data.desc;
  const imageSrc = withBasePath(data.image);

  useEffect(() => {
    if (!previewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [previewOpen]);

  const cardContent = (
    <>
      <div className="project-card-image">
        <Image
          src={imageSrc}
          alt=""
          width={PROJECT_IMAGE.width}
          height={PROJECT_IMAGE.height}
          sizes="(max-width: 600px) 100vw, 50vw"
        />
      </div>

      <div className="project-card-content">
        <header className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {hasLink && (
            <span className="project-card-affordance" aria-hidden="true">
              ↗
            </span>
          )}
          {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        </header>

        <p className="project-card-desc">{desc}</p>

        {data.tech && data.tech.length > 0 && (
          <div className="project-card-tech">
            {data.tech.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <time className="project-card-date" dateTime={data.date}>
          {formatDate(data.date, locale)}
        </time>
      </div>
    </>
  );

  return (
    <article
      className={`project-card ${data.featured ? 'project-card--featured' : ''} ${
        hasLink ? 'project-card--linked' : 'project-card--preview'
      }`}
    >
      {hasLink ? (
        <a href={data.link} className="project-card-link" aria-label={title}>
          {cardContent}
        </a>
      ) : (
        <button
          type="button"
          ref={triggerRef}
          className="project-card-link project-card-preview-button"
          aria-label={`${t('previewImage', locale)}: ${title}`}
          onClick={() => setPreviewOpen(true)}
        >
          {cardContent}
        </button>
      )}

      {previewOpen && (
        <div
          className="project-preview-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setPreviewOpen(false);
            }
          }}
        >
          <section
            className="project-preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header className="project-preview-header">
              <h2 id={titleId}>{title}</h2>
              <button
                type="button"
                ref={closeRef}
                className="project-preview-close"
                onClick={() => setPreviewOpen(false)}
                aria-label={t('closePreview', locale)}
              >
                ×
              </button>
            </header>
            <div className="project-preview-image-wrap">
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="100vw"
                className="project-preview-image"
              />
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
