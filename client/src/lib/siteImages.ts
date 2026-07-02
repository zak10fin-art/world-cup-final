export const homeImages = {
  hero: '/images/world-cup-match.webp',
  worldOfBlue: '/images/world-of-blue.webp',
  hamptonInn: '/images/hampton-inn.webp',
  stadium: '/images/metlife-stadium.webp',
  hotelLobby: '/images/hotel-lobby.webp',
  jerseyCitySkyline: '/images/jersey-city-skyline.webp',
  nycSkyline: '/images/nyc-skyline.webp',
  americanDream: '/images/american-dream.webp',
  restaurantInterior: '/images/restaurant-interior.webp',
} as const;

export function getBlogImageForSlug(slug: string) {
  if (slug === 'carlstadt-hotels-gateway-world-cup-final') return homeImages.hamptonInn;
  if (slug === 'best-restaurants-near-metlife-stadium') return homeImages.restaurantInterior;
  if (slug === 'american-dream-mall-shopping-metlife-stadium') return homeImages.americanDream;
  if (slug === 'new-york-city-attractions-world-cup-visitors') return homeImages.nycSkyline;

  if (
    slug.includes('metlife-stadium') ||
    slug.includes('parking-guide') ||
    slug.includes('transportation')
  ) {
    return homeImages.stadium;
  }

  if (
    slug.includes('hotel') ||
    slug.includes('accommodation') ||
    slug.includes('where-to-stay')
  ) {
    if (slug.includes('jersey-city')) return homeImages.jerseyCitySkyline;
    return homeImages.hotelLobby;
  }

  if (
    slug.includes('new-jersey') ||
    slug.includes('weather-climate') ||
    slug.includes('post-match')
  ) {
    return homeImages.jerseyCitySkyline;
  }

  if (
    slug.includes('world-cup') ||
    slug.includes('fifa-world-cup') ||
    slug.includes('travel-insurance')
  ) {
    return homeImages.hero;
  }

  return homeImages.hero;
}

export function getBlogAltText(slug: string, title: string) {
  const mapping: Record<string, string> = {
    'carlstadt-hotels-gateway-world-cup-final': 'Hampton Inn Carlstadt hotel exterior near MetLife Stadium for World Cup Final stays',
    'jersey-city-hotels-premium-stays': 'Jersey City waterfront skyline near premium hotel areas for World Cup Final visitors',
    'best-restaurants-near-metlife-stadium': 'Elegant restaurant interior representing dining options near MetLife Stadium',
    'american-dream-mall-shopping-metlife-stadium': 'American Dream Mall exterior near MetLife Stadium in New Jersey',
    'new-york-city-attractions-world-cup-visitors': 'New York City skyline for World Cup visitors exploring Manhattan attractions',
    'metlife-stadium-venue-guide-world-cup-2026': 'MetLife Stadium exterior prepared for major football events in New Jersey',
    'how-to-get-to-metlife-stadium-transportation': 'MetLife Stadium and surrounding access routes for match-day transportation',
    'parking-guide-metlife-stadium-world-cup': 'MetLife Stadium venue area for World Cup Final parking and arrival planning',
  };

  return mapping[slug] ?? `${title} visual for FIFA World Cup 2026 Final travel planning`;
}
