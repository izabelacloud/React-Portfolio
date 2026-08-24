import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import WorldMap from '../components/WorldMap';
import locations from '../data/locations';
import stats from '../data/stats';

export default function WorldMapPage() {
  const { t } = useTranslation();
  const countriesStat = stats.find((s) => s.key === 'countriesVisited');

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        eyebrow={t('worldMapPage.eyebrow')}
        title={t('worldMapPage.title')}
        subtitle={
          countriesStat
            ? t('worldMapPage.subtitleWithCount', { count: countriesStat.value })
            : t('worldMapPage.subtitleFallback')
        }
      />

      <WorldMap />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            to={`/destinations/${loc.slug}`}
            className="rounded-xl border border-stone/40 px-4 py-3 text-sm font-semibold text-ink/80 transition-colors hover:border-accent hover:text-accent dark:border-charcoal dark:text-stone dark:hover:text-warm"
          >
            {loc.country}
          </Link>
        ))}
      </div>
    </div>
  );
}
