import { useEffect } from 'react';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

function toAbsoluteUrl(value: string | undefined, fallback: string) {
  try {
    return new URL(value || fallback, SITE_URL).toString();
  } catch {
    return fallback;
  }
}

export function SEOHead({
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
  url = typeof window !== 'undefined'
    ? new URL(window.location.pathname + window.location.search, SITE_URL).toString()
    : SITE_URL,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
}: SEOHeadProps) {
  const canonicalUrl = toAbsoluteUrl(url, SITE_URL);
  const imageUrl = toAbsoluteUrl(image, DEFAULT_OG_IMAGE);

  useEffect(() => {
    document.title = `${title} | World Cup Final Stay`;

    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta('description', description);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateMeta('robots', 'index, follow, max-image-preview:large');
    if (keywords) updateMeta('keywords', keywords);
    if (author) updateMeta('author', author);

    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:image', imageUrl);
    updateProperty('og:image:alt', title);
    updateProperty('og:url', canonicalUrl);
    updateProperty('og:type', type);
    updateProperty('og:site_name', 'World Cup Final Stay');

    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);
    updateMeta('twitter:url', canonicalUrl);

    if (type === 'article') {
      if (publishedDate) updateProperty('article:published_time', publishedDate);
      if (modifiedDate) updateProperty('article:modified_time', modifiedDate);
      if (author) updateProperty('article:author', author);
    }

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, imageUrl, canonicalUrl, type, author, publishedDate, modifiedDate]);

  return null;
}

export default SEOHead;
