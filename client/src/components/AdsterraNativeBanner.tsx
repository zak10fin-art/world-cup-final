import { useEffect, useRef } from 'react';

interface AdsterraNativeBannerProps {
  title?: string;
  className?: string;
  minHeight?: number;
}

const ADSTERRA_SCRIPT_SRC = 'https://pl30222336.effectivecpmnetwork.com/962410eee7e244c6ea3f4d9d3f9213e5/invoke.js';
const ADSTERRA_CONTAINER_ID = 'container-962410eee7e244c6ea3f4d9d3f9213e5';

export default function AdsterraNativeBanner({
  title = 'Sponsored travel recommendation',
  className = '',
  minHeight = 320,
}: AdsterraNativeBannerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

    mountNode.appendChild(script);
    mountNode.appendChild(container);

    return () => {
      mountNode.innerHTML = '';
      delete mountNode.dataset.adsterraInitialized;
    };
  }, [minHeight]);

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glass ${className}`.trim()}>
      <div
        ref={mountRef}
        aria-label={title}
        style={{ minHeight }}
      />
    </div>
  );
}
