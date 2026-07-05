import { useEffect } from 'react';
import { SITE_EMAIL, SITE_URL } from '@/lib/siteConfig';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'World Cup Final Stay',
  url: SITE_URL,
  logo: `${SITE_URL}/images/world-cup-match.webp`,
  description: 'Premium travel guide and hotel booking assistance for FIFA World Cup 2026 Final at MetLife Stadium',
  sameAs: [
    'https://www.facebook.com/worldcupfinalstay',
    'https://www.twitter.com/worldcupfinalstay',
    'https://www.instagram.com/worldcupfinalstay',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Support',
    email: SITE_EMAIL,
  },
};

export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'FIFA World Cup 2026 Final',
  description: 'The final match of the FIFA World Cup 2026 at MetLife Stadium',
  startDate: '2026-07-19T20:00:00-04:00',
  endDate: '2026-07-19T23:00:00-04:00',
  eventAttendanceMode: 'OfflineEventAttendanceMode',
  eventStatus: 'EventScheduled',
  location: {
    '@type': 'Place',
    name: 'MetLife Stadium',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'One MetLife Stadium Drive',
      addressLocality: 'East Rutherford',
      addressRegion: 'NJ',
      postalCode: '07073',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'FIFA',
    url: 'https://www.fifa.com',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author || 'World Cup Final Stay',
  },
  publisher: {
    '@type': 'Organization',
    name: 'World Cup Final Stay',
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/world-cup-match.webp`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url,
  },
});

export default StructuredData;
