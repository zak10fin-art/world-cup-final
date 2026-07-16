export const ADSENSE_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT || '';
export const ADSENSE_SCRIPT_SRC = ADSENSE_CLIENT
  ? `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`
  : '';

export const ADSTERRA_SCRIPT_SRC = 'https://pl30222336.effectivecpmnetwork.com/962410eee7e244c6ea3f4d9d3f9213e5/invoke.js';
export const ADSTERRA_CONTAINER_ID = 'container-962410eee7e244c6ea3f4d9d3f9213e5';
export const ADSTERRA_ENABLED = import.meta.env.VITE_ENABLE_ADSTERRA === 'true';

export const adsenseSlots = {
  homePrimary: import.meta.env.VITE_ADSENSE_SLOT_HOME_PRIMARY || '',
  homeSecondary: import.meta.env.VITE_ADSENSE_SLOT_HOME_SECONDARY || '',
  blogListing: import.meta.env.VITE_ADSENSE_SLOT_BLOG_LISTING || '',
  blogArticle: import.meta.env.VITE_ADSENSE_SLOT_BLOG_ARTICLE || '',
} as const;

export function hasAdSenseClient() {
  return Boolean(ADSENSE_CLIENT && ADSENSE_CLIENT.trim().length > 0);
}

export function hasAdSenseSlot(slot?: string) {
  return hasAdSenseClient() && Boolean(slot && slot.trim().length > 0);
}

export function canRenderAdsterra() {
  return ADSTERRA_ENABLED && !hasAdSenseClient();
}
