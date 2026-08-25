import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { geoEqualEarth, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldTopology from 'world-atlas/countries-110m.json';

const WIDTH = 600;
const HEIGHT = 340;

const countries = feature(worldTopology, worldTopology.objects.countries).features;

export default function MountainsMap({ items }) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);

  const projection = useMemo(
    () => geoEqualEarth().fitSize([WIDTH, HEIGHT], { type: 'Sphere' }),
    []
  );
  const path = useMemo(() => geoPath(projection), [projection]);

  const markers = items
    .filter((item) => Array.isArray(item.coordinates))
    .map((item) => ({ item, point: projection(item.coordinates) }))
    .filter((m) => m.point);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone/40 bg-ink dark:border-charcoal">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-[260px] w-full sm:h-[340px]">
        <path d={path({ type: 'Sphere' })} className="fill-charcoal/40" />
        {countries.map((c) => (
          <path key={c.id} d={path(c)} className="fill-charcoal/80 stroke-accent/30" strokeWidth={0.5} />
        ))}
        {markers.map(({ item, point }) => (
          <g
            key={item.slug}
            transform={`translate(${point[0]}, ${point[1]})`}
            className="cursor-pointer"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered((h) => (h?.slug === item.slug ? null : h))}
          >
            <path
              d="M0 -9 L6 6 L-6 6 Z"
              className={item.summitted === false ? 'fill-stone/60' : 'fill-accent'}
              stroke="#14161A"
              strokeWidth={1}
            />
          </g>
        ))}
      </svg>
      {hovered && (
        <div className="pointer-events-none absolute bottom-3 left-3 rounded-xl bg-warm/95 px-4 py-3 text-ink shadow-lg">
          <p className="font-display text-sm font-medium">
            {t(`expeditions.items.${hovered.slug}.title`, { defaultValue: hovered.title })}
          </p>
          <p className="text-xs text-charcoal">
            {t(`expeditions.items.${hovered.slug}.location`, { defaultValue: hovered.location })}
          </p>
        </div>
      )}
    </div>
  );
}
