import { useEffect, useRef } from 'react';
import { ADSTERRA_CONTAINER_ID, ADSTERRA_SCRIPT_SRC, canRenderAdsterra } from '@/lib/siteAds';

interface AdsterraNativeBannerProps {
  title?: string;
  className?: string;
  minHeight?: number;
}

export default function AdsterraNativeBanner({
  title = 'Sponsored travel recommendation',
  className = '',
  minHeight = 320,
}: AdsterraNativeBannerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canRenderAdsterra()) {
      return;
    }
    const mountNode = mountRef.current;

    if (!mountNode || mountNode.dataset.adsterraInitialized === 'true') {
      return;
    }

    mountNode.dataset.adsterraInitialized = 'true';
    mountNode.innerHTML = '';

    const container = document.createElement('div');
    container.id = ADSTERRA_CONTAINER_ID;
    container.style.width = '100%';
    container.style.minHeight = `${minHeight}px`;

    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = ADSTERRA_SCRIPT_SRC;

    mountNode.appendChild(container);
    mountNode.appendChild(script);

    return () => {
      mountNode.innerHTML = '';
      delete mountNode.dataset.adsterraInitialized;
    };
  }, [minHeight]);

  if (!canRenderAdsterra()) {
    return null;
  }

  return (
    <div className={`overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-glass ${className}`.trim()}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300/75">
        Sponsored recommendation
      </p>
      <div
        ref={mountRef}
        aria-label={title}
        style={{ minHeight }}
      />
    </div>
  );
}
