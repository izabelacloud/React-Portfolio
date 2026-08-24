import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { geoOrthographic, geoPath, geoGraticule10, geoDistance, geoCircle } from 'd3-geo';
import { feature } from 'topojson-client';
import locations from '../data/locations';
import worldTopology from 'world-atlas/countries-110m.json';

const WIDTH = 600;
const HEIGHT = 520;
const BASE_SCALE = 235;
const AUTO_ROTATE_DEG_PER_SEC = 4;
const SOLAR_UPDATE_INTERVAL_MS = 60_000;
const STAR_COUNT = 140;

const countries = feature(worldTopology, worldTopology.objects.countries).features;

function wrapDegrees(deg) {
  let d = deg % 360;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

// NOAA-style low-precision solar position, accurate to within a fraction of a degree.
function getSubsolarPoint(date) {
  const rad = Math.PI / 180;
  const daysSinceJ2000 = (date.getTime() - Date.UTC(2000, 0, 1, 12, 0, 0)) / 86_400_000;
  const meanLongitude = (280.46 + 0.9856474 * daysSinceJ2000) % 360;
  const meanAnomaly = ((357.528 + 0.9856003 * daysSinceJ2000) % 360) * rad;
  const eclipticLongitude =
    meanLongitude + 1.915 * Math.sin(meanAnomaly) + 0.02 * Math.sin(2 * meanAnomaly);
  const obliquity = 23.439 - 0.0000004 * daysSinceJ2000;

  const rightAscension =
    Math.atan2(
      Math.cos(obliquity * rad) * Math.sin(eclipticLongitude * rad),
      Math.cos(eclipticLongitude * rad)
    ) / rad;
  const declination = Math.asin(Math.sin(obliquity * rad) * Math.sin(eclipticLongitude * rad)) / rad;

  const equationOfTimeDeg = wrapDegrees(meanLongitude - rightAscension);
  const utcHours = date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600;
  const subsolarLon = wrapDegrees(-15 * (utcHours - 12) - equationOfTimeDeg);

  return [subsolarLon, declination];
}

export default function WorldMap() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState([0, -20, 0]);
  const [now, setNow] = useState(() => new Date());
  const spinning = useRef(true);
  const dragRef = useRef(null);
  const rotationRef = useRef(rotation);
  rotationRef.current = rotation;

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), SOLAR_UPDATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let frame;
    let last = null;
    const step = (nowMs) => {
      if (last === null) last = nowMs;
      const dt = (nowMs - last) / 1000;
      last = nowMs;
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

  const nightGeometry = useMemo(() => {
    const [subsolarLon, subsolarLat] = getSubsolarPoint(now);
    const antisolarPoint = [wrapDegrees(subsolarLon + 180), -subsolarLat];
    return geoCircle().center(antisolarPoint).radius(90)();
  }, [now]);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * WIDTH,
        y: Math.random() * HEIGHT,
        r: Math.random() * 1.1 + 0.2,
        o: Math.random() * 0.6 + 0.15,
      })),
    []
  );

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
    <div className="relative overflow-hidden rounded-2xl border border-charcoal bg-ink">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-[420px] w-full cursor-grab touch-none select-none active:cursor-grabbing sm:h-[520px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <defs>
          <filter id="globeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="globeOcean" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#1b2a52" />
            <stop offset="100%" stopColor="#060a16" />
          </radialGradient>
        </defs>

        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#f5efe2" opacity={s.o} />
        ))}

        <path d={path({ type: 'Sphere' })} fill="url(#globeOcean)" />
        <path d={path(graticule)} className="fill-none stroke-accent/10" strokeWidth={0.5} />

        <g filter="url(#globeGlow)">
          {countries.map((c) => (
            <path
              key={c.id}
              d={path(c)}
              className="fill-charcoal/70 stroke-accent/70 outline-none"
              strokeWidth={0.6}
            />
          ))}
        </g>

        <path d={path(nightGeometry)} fill="#060a16" opacity={0.55} />

        <path d={path({ type: 'Sphere' })} className="fill-none stroke-accent/40" strokeWidth={1} />

        {visibleMarkers.map(({ loc, point }) => (
          <circle
            key={loc.slug}
            cx={point[0]}
            cy={point[1]}
            r={5}
            className="cursor-pointer fill-accent stroke-ink transition-transform hover:scale-125"
            strokeWidth={1.5}
            filter="url(#globeGlow)"
            onMouseEnter={() => setHovered(loc)}
            onMouseLeave={() => setHovered((h) => (h?.slug === loc.slug ? null : h))}
            onClick={() => navigate(`/destinations/${loc.slug}`)}
          />
        ))}
      </svg>
      {hovered && (
        <div className="pointer-events-none absolute bottom-4 left-4 rounded-xl bg-warm/95 px-4 py-3 text-ink shadow-lg">
          <p className="font-display text-sm font-medium">
            {t(`locations.items.${hovered.slug}`, { defaultValue: hovered.country })}
          </p>
          <p className="text-xs text-charcoal">
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
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm"
        >
          +
        </button>
        <button
          type="button"
          aria-label={t('map.zoomOut')}
          onClick={() => setZoom((z) => Math.max(z / 1.3, 0.6))}
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm"
        >
          −
        </button>
      </div>
    </div>
  );
}
