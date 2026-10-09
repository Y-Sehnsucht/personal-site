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
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const hasLink = Boolean(data.link);
  const title = locale === 'zh-CN' ? (data.titleZh ?? data.title) : data.title;
  const subtitle =
    locale === 'zh-CN' ? (data.subtitleZh ?? data.subtitle) : data.subtitle;
  const desc = locale === 'zh-CN' ? (data.descZh ?? data.desc) : data.desc;
  const cardImages = data.images?.length
    ? data.images
    : [
        {
          src: data.image,
          alt: title,
        },
      ];
  const activeImage = cardImages[activeImageIndex] ?? cardImages[0];
  const activeImageAlt =
    locale === 'zh-CN'
      ? (activeImage.altZh ?? activeImage.alt)
      : activeImage.alt;
  const activeImageTitle =
    locale === 'zh-CN'
      ? (activeImage.titleZh ?? activeImage.title)
      : activeImage.title;
  const activeImageCaption =
    locale === 'zh-CN'
      ? (activeImage.captionZh ?? activeImage.caption)
      : activeImage.caption;
  const hasGallery = cardImages.length > 1;

  useEffect(() => {
    if (!previewOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPreviewOpen(false);
      } else if (event.key === 'ArrowLeft' && hasGallery) {
        event.preventDefault();
        setActiveImageIndex((current) =>
          current === 0 ? cardImages.length - 1 : current - 1,
        );
      } else if (event.key === 'ArrowRight' && hasGallery) {
        event.preventDefault();
        setActiveImageIndex((current) =>
          current === cardImages.length - 1 ? 0 : current + 1,
        );
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      triggerRef.current?.focus();
    };
  }, [cardImages.length, hasGallery, previewOpen]);

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? cardImages.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === cardImages.length - 1 ? 0 : current + 1,
    );
  };

  const cardContent = (
    <>
      <div
        className={`project-card-image project-card-image--${Math.min(cardImages.length, 3)}`}
      >
        {cardImages.slice(0, 3).map((image, index) => (
          <Image
            key={image.src}
            src={withBasePath(image.src)}
            alt=""
            width={PROJECT_IMAGE.width}
            height={PROJECT_IMAGE.height}
            sizes={
              index === 0
                ? '(max-width: 600px) 100vw, 50vw'
                : '(max-width: 600px) 50vw, 25vw'
            }
          />
        ))}
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
        <a
          href={data.link}
          className="project-card-link"
          aria-label={`${title}${t('opensNewTab', locale)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        <button
          type="button"
          ref={triggerRef}
          className="project-card-link project-card-preview-button"
          aria-label={`${t('previewImage', locale)}: ${title}`}
          onClick={() => {
            setActiveImageIndex(0);
            setPreviewOpen(true);
          }}
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
              <div>
                <h2 id={titleId}>{title}</h2>
                {hasGallery && (
                  <p aria-live="polite">
                    {activeImageIndex + 1} / {cardImages.length}
                  </p>
                )}
              </div>
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
                src={withBasePath(activeImage.src)}
                alt={activeImageAlt}
                fill
                sizes="100vw"
                className="project-preview-image"
              />
              {hasGallery && (
                <>
                  <button
                    type="button"
                    className="project-preview-nav project-preview-nav--previous"
                    onClick={showPreviousImage}
                    aria-label={t('previousImage', locale)}
                    title={t('previousImage', locale)}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="project-preview-nav project-preview-nav--next"
                    onClick={showNextImage}
                    aria-label={t('nextImage', locale)}
                    title={t('nextImage', locale)}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            {(activeImageTitle || activeImageCaption || hasGallery) && (
              <footer className="project-preview-details">
                {(activeImageTitle || activeImageCaption) && (
                  <div className="project-preview-copy">
                    {activeImageTitle && <h3>{activeImageTitle}</h3>}
                    {activeImageCaption && <p>{activeImageCaption}</p>}
                  </div>
                )}
                {hasGallery && (
                  <div
                    className="project-preview-thumbnails"
                    aria-label={t('projectImageDialog', locale)}
                  >
                    {cardImages.map((image, index) => {
                      const imageTitle =
                        locale === 'zh-CN'
                          ? (image.titleZh ??
                            image.title ??
                            image.altZh ??
                            image.alt)
                          : (image.title ?? image.alt);

                      return (
                        <button
                          key={image.src}
                          type="button"
                          className="project-preview-thumbnail"
                          aria-current={
                            index === activeImageIndex ? 'true' : undefined
                          }
                          aria-label={`${t('selectImage', locale)} ${index + 1}: ${imageTitle}`}
                          onClick={() => setActiveImageIndex(index)}
                        >
                          <Image
                            src={withBasePath(image.src)}
                            alt=""
                            width={120}
                            height={76}
                            sizes="120px"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}
              </footer>
            )}
          </section>
        </div>
      )}
    </article>
  );
}
