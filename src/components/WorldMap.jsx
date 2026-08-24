import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import locations from '../data/locations';
import worldTopology from 'world-atlas/countries-110m.json';

export default function WorldMap() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState([0, 20]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone/40 bg-white/40 dark:border-charcoal dark:bg-white/5">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        className="h-[420px] w-full sm:h-[520px]"
      >
        <ZoomableGroup
          zoom={zoom}
          center={center}
          onMoveEnd={({ coordinates, zoom: z }) => {
            setCenter(coordinates);
            setZoom(z);
          }}
          minZoom={1}
          maxZoom={8}
        >
          <Geographies geography={worldTopology}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-stone/60 stroke-warm outline-none dark:fill-charcoal dark:stroke-ink"
                />
              ))
            }
          </Geographies>

          {locations.map((loc) => (
            <Marker
              key={loc.slug}
              coordinates={loc.coordinates}
              onMouseEnter={() => setHovered(loc)}
              onMouseLeave={() => setHovered((h) => (h?.slug === loc.slug ? null : h))}
              onClick={() => navigate(`/destinations/${loc.slug}`)}
              className="cursor-pointer"
            >
              <circle
                r={5 / zoom}
                className="fill-accent stroke-warm transition-transform hover:scale-125 dark:stroke-ink"
                strokeWidth={1.5 / zoom}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>

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
          onClick={() => setZoom((z) => Math.min(z * 1.5, 8))}
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm dark:bg-ink/90 dark:text-warm"
        >
          +
        </button>
        <button
          type="button"
          aria-label={t('map.zoomOut')}
          onClick={() => setZoom((z) => Math.max(z / 1.5, 1))}
          className="rounded-full bg-warm/90 px-3 py-1 text-sm font-semibold text-ink shadow hover:bg-warm dark:bg-ink/90 dark:text-warm"
        >
          −
        </button>
      </div>
    </div>
  );
}
