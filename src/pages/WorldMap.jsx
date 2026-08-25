import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import WorldMap from '../components/WorldMap';
import { CompassIcon } from '../components/AdventureIcons';
import locations from '../data/locations';
import stats from '../data/stats';

export default function WorldMapPage() {
  const { t, i18n } = useTranslation();
  const countriesStat = stats.find((s) => s.key === 'countriesVisited');
  const collator = new Intl.Collator(i18n.language);
  const sortedLocations = [...locations].sort((a, b) =>
    collator.compare(
      t(`locations.items.${a.slug}`, { defaultValue: a.country }),
      t(`locations.items.${b.slug}`, { defaultValue: b.country })
    )
  );

  return (
    <div className="space-y-10 py-10">
      <Link
        to="/adventures"
        className="group inline-flex items-center gap-3 text-accent transition-opacity hover:opacity-80"
      >
        <CompassIcon className="h-10 w-10" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] group-hover:underline">
          {t('worldMapPage.eyebrow')}
        </span>
      </Link>
      <SectionHeading
        title={t('worldMapPage.title')}
        subtitle={
          countriesStat
            ? t('worldMapPage.subtitleWithCount', { count: countriesStat.value })
            : t('worldMapPage.subtitleFallback')
        }
      />

      <WorldMap />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortedLocations.map((loc) => (
          <Link
            key={loc.slug}
            to={`/destinations/${loc.slug}`}
            className="rounded-xl border border-stone/40 px-4 py-3 text-sm font-semibold text-ink/80 transition-colors hover:border-accent hover:text-accent dark:border-charcoal dark:text-stone dark:hover:text-warm"
          >
            {t(`locations.items.${loc.slug}`, { defaultValue: loc.country })}
          </Link>
        ))}
      </div>
    </div>
  );
}
