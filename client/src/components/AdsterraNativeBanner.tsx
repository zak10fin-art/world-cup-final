interface AdsterraNativeBannerProps {
  title?: string;
  className?: string;
  minHeight?: number;
}

const ADSTERRA_SRC_DOC = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 280px;
        background: transparent;
        overflow: hidden;
      }

      #container-962410eee7e244c6ea3f4d9d3f9213e5 {
        width: 100%;
        min-height: 280px;
      }
    </style>
  </head>
  <body>
    <script async="async" data-cfasync="false" src="https://pl30222336.effectivecpmnetwork.com/962410eee7e244c6ea3f4d9d3f9213e5/invoke.js"></script>
    <div id="container-962410eee7e244c6ea3f4d9d3f9213e5"></div>
  </body>
</html>`;

export default function AdsterraNativeBanner({
  title = 'Sponsored travel recommendation',
  className = '',
  minHeight = 320,
}: AdsterraNativeBannerProps) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-glass ${className}`.trim()}>
      <iframe
        title={title}
        srcDoc={ADSTERRA_SRC_DOC}
        className="block w-full bg-transparent"
        style={{ minHeight, height: minHeight }}
        loading="lazy"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
