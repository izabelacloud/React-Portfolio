import { useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';

function loadCalendlyScript() {
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
  if (existing) {
    return window.Calendly
      ? Promise.resolve()
      : new Promise((resolve) => existing.addEventListener('load', resolve, { once: true }));
  }

  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    script.addEventListener('load', resolve, { once: true });
    document.body.appendChild(script);
  });
}

export default function CalendlyEmbed({ url, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadCalendlyScript().then(() => {
      if (cancelled || !containerRef.current) return;
      window.Calendly?.initInlineWidget({ url, parentElement: containerRef.current });
    });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minWidth: '280px', height: '700px' }}
    />
  );
}
