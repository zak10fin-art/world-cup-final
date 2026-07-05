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

export function SEOHead({
  title,
  description,
  keywords,
  image = DEFAULT_OG_IMAGE,
  url = typeof window !== 'undefined' ? new URL(window.location.pathname + window.location.search, SITE_URL).toString() : SITE_URL,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | World Cup Final Stay`;

    // Update meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Standard meta tags
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateMeta('robots', 'index, follow');

    // Open Graph tags
    updateProperty('og:title', title);
    updateProperty('og:description', description);
    updateProperty('og:image', image);
    updateProperty('og:url', url);
    updateProperty('og:type', type);
    updateProperty('og:site_name', 'World Cup Final Stay');

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:url', url);

    // Article specific tags
    if (type === 'article') {
      if (publishedDate) updateProperty('article:published_time', publishedDate);
      if (modifiedDate) updateProperty('article:modified_time', modifiedDate);
      if (author) updateProperty('article:author', author);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, image, url, type, author, publishedDate, modifiedDate]);

  return null;
}

export default SEOHead;
