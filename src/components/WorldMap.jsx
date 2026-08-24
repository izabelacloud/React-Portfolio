import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { geoOrthographic, geoPath, geoGraticule10, geoDistance } from 'd3-geo';
import { feature } from 'topojson-client';
import locations from '../data/locations';
import worldTopology from 'world-atlas/countries-110m.json';

const WIDTH = 600;
const HEIGHT = 520;
const BASE_SCALE = 235;
const AUTO_ROTATE_DEG_PER_SEC = 4;

const countries = feature(worldTopology, worldTopology.objects.countries).features;

export default function WorldMap() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState([0, -20, 0]);
  const spinning = useRef(true);
  const dragRef = useRef(null);
  const rotationRef = useRef(rotation);
  rotationRef.current = rotation;

  useEffect(() => {
    let frame;
    let last = null;
    const step = (now) => {
      if (last === null) last = now;
      const dt = (now - last) / 1000;
      last = now;
      if (spinning.current) {
        const [lambda, phi, gamma] = rotationRef.current;
        setRotation([lambda + AUTO_ROTATE_DEG_PER_SEC * dt, phi, gamma]);
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  const projection = useMemo(
    () =>
      geoOrthographic()
        .scale(BASE_SCALE * zoom)
        .translate([WIDTH / 2, HEIGHT / 2])
        .rotate(rotation)
        .clipAngle(90),
    [zoom, rotation]
  );

  const path = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule10(), []);
  const center = [-rotation[0], -rotation[1]];

  const visibleMarkers = locations
    .map((loc) => ({
      loc,
      visible: geoDistance(center, loc.coordinates) < Math.PI / 2,
      point: projection(loc.coordinates),
    }))
    .filter((m) => m.visible && m.point);

  function handlePointerDown(e) {
    spinning.current = false;
    dragRef.current = { x: e.clientX, y: e.clientY, rotation };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!dragRef.current) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    const [lambda0, phi0, gamma0] = dragRef.current.rotation;
    const nextPhi = Math.max(-90, Math.min(90, phi0 - dy * 0.4));
    setRotation([lambda0 + dx * 0.4, nextPhi, gamma0]);
  }

  function handlePointerUp() {
    dragRef.current = null;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone/40 bg-white/40 dark:border-charcoal dark:bg-white/5">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-[420px] w-full cursor-grab touch-none select-none active:cursor-grabbing sm:h-[520px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <path d={path({ type: 'Sphere' })} className="fill-white/60 dark:fill-white/5" />
        <path d={path(graticule)} className="fill-none stroke-stone/30 dark:stroke-charcoal" strokeWidth={0.5} />
        {countries.map((c) => (
          <path
            key={c.id}
            d={path(c)}
            className="fill-stone/60 stroke-warm outline-none dark:fill-charcoal dark:stroke-ink"
            strokeWidth={0.5}
          />
        ))}
        <path d={path({ type: 'Sphere' })} className="fill-none stroke-stone/50 dark:stroke-charcoal" strokeWidth={1} />
        {visibleMarkers.map(({ loc, point }) => (
          <circle
            key={loc.slug}
            cx={point[0]}
            cy={point[1]}
            r={5}
            className="cursor-pointer fill-accent stroke-warm transition-transform hover:scale-125 dark:stroke-ink"
            strokeWidth={1.5}
            onMouseEnter={() => setHovered(loc)}
            onMouseLeave={() => setHovered((h) => (h?.slug === loc.slug ? null : h))}
            onClick={() => navigate(`/destinations/${loc.slug}`)}
          />
        ))}
      </svg>
      {hovered && (
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-ink/90 px-4 py-3 text-warm shadow-lg dark:bg-warm/95 dark:text-ink">
          <p className="font-display text-sm font-medium">{hovered.country}</p>
          <p className="text-xs text-stone dark:text-charcoal">
            {hovered.cities.slice(0, 3).join(', ')}
            {hovered.cities.length > 3 ? ` +${hovered.cities.length - 3} more` : ''}
          </p>
        </div>
      )}
      <div className="absolute right-4 top-4 flex gap-2">
        <button
          type="button"
          aria-label={t('map.zoomIn')}
          onClick={() => setZoom((z) => Math.min(z * 1.3, 3))}
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm dark:bg-ink/90 dark:text-warm"
        >
          +
        </button>
        <button
          type="button"
          aria-label={t('map.zoomOut')}
          onClick={() => setZoom((z) => Math.max(z / 1.3, 0.6))}
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm dark:bg-ink/90 dark:text-warm"
        >
          −
        </button>
      </div>
    </div>
  );
}
