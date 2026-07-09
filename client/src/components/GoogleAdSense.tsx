import { CSSProperties, useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
    __adsenseScriptPromise?: Promise<void>;
  }
}

interface GoogleAdSenseProps {
  adSlot?: string;
  className?: string;
  style?: CSSProperties;
  format?: 'auto' | 'fluid' | string;
  layout?: string;
  layoutKey?: string;
  fullWidthResponsive?: boolean;
  bootstrapOnly?: boolean;
}

const ADSENSE_CLIENT = 'ca-pub-3639626531614258';
const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;

function loadAdSenseScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.__adsenseScriptPromise) {
    return window.__adsenseScriptPromise;
  }

  window.__adsenseScriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${ADSENSE_SCRIPT_SRC}"]`) as HTMLScriptElement | null;

    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }

      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load Google AdSense script.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = ADSENSE_SCRIPT_SRC;
    script.crossOrigin = 'anonymous';
    script.dataset.adsenseClient = ADSENSE_CLIENT;
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });
    script.addEventListener('error', () => reject(new Error('Failed to load Google AdSense script.')), { once: true });
    document.head.appendChild(script);
  });

  return window.__adsenseScriptPromise;
}

export default function GoogleAdSense({
  adSlot,
  className = '',
  style,
  format = 'auto',
  layout,
  layoutKey,
  fullWidthResponsive = true,
  bootstrapOnly = false,
}: GoogleAdSenseProps) {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    loadAdSenseScript()
      .then(() => {
        if (cancelled || bootstrapOnly || !adSlot || !adRef.current) {
          return;
        }

        const adNode = adRef.current;

        if (adNode.dataset.adStatus === 'initialized' || adNode.getAttribute('data-adsbygoogle-status') === 'done') {
          return;
        }

        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adNode.dataset.adStatus = 'initialized';
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error);
          const duplicateInit = message.includes('All ins elements in the DOM with class=adsbygoogle already have ads in them')
            || message.includes('adsbygoogle.push() error');

          if (!duplicateInit) {
            console.error('Google AdSense initialization error:', error);
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      cancelled = true;
    };
  }, [adSlot, bootstrapOnly, format, layout, layoutKey, fullWidthResponsive]);

  if (bootstrapOnly || !adSlot) {
    return null;
  }

  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', ...style }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
        {...(layout ? { 'data-ad-layout': layout } : {})}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      />
    </div>
  );
}
