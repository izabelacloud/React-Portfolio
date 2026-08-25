import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import AdventureTimeline from '../components/AdventureTimeline';
import MountainsMap from '../components/MountainsMap';
import expeditions from '../data/expeditions';
import divingCerts from '../data/divingCerts';
import { parseFirstDate } from '../utils/helpers';
import { MountainIcon, DivingIcon, SkiingIcon, CompassIcon } from '../components/AdventureIcons';

const meta = {
  mountains: { labelKey: 'mountainsLabel', subtitleKey: 'mountainsSubtitle', Icon: MountainIcon },
  diving: { labelKey: 'divingLabel', subtitleKey: 'divingSubtitle', Icon: DivingIcon },
  skiing: { labelKey: 'skiingLabel', subtitleKey: 'skiingSubtitle', Icon: SkiingIcon },
  travel: { labelKey: 'travelLabel', subtitleKey: 'travelSubtitle', Icon: CompassIcon },
};

// Only the placeholder stub rows (one per unstarted category) have these fields
// left as literal "[VERIFY ...]" markers; real entries always have a real title/date.
function isPlaceholderStub(expedition) {
  return [expedition.slug, expedition.title, expedition.date, expedition.moment].some(
    (value) => typeof value === 'string' && value.includes('[VERIFY')
  );
}

export default function AdventureCategory() {
  const { t } = useTranslation();
  const { category } = useParams();
  const info = meta[category];
  const items = expeditions
    .filter((e) => e.category === category && !isPlaceholderStub(e))
    .map((e) => ({ ...e, achievement: e.moment }))
    .sort((a, b) => (parseFirstDate(b.date) ?? 0) - (parseFirstDate(a.date) ?? 0));

  if (!info) {
    return (
      <div className="py-10">
        <p>{t('common.categoryNotFound')}</p>
        <Link to="/adventures" className="text-accent hover:underline">{t('common.backToAdventures')}</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 py-10">
      <info.Icon className="h-10 w-10 text-accent" />
      <SectionHeading
        eyebrow={t('adventures.eyebrow')}
        eyebrowTo="/adventures"
        title={t(`adventures.${info.labelKey}`)}
        subtitle={t(`adventureCategory.${info.subtitleKey}`)}
      />

      {category === 'diving' && (
        <div>
          <h2 className="font-display text-xl font-medium">{t('adventureCategory.divingCertsHeading')}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {divingCerts.map((cert) => (
              <li
                key={cert}
                className="rounded-full border border-stone/40 px-4 py-2 text-sm font-semibold dark:border-charcoal"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      )}

      {items.length > 0 ? (
        <>
          {category === 'mountains' && <MountainsMap items={items} />}
          <AdventureTimeline items={items} />
        </>
      ) : (
        <p className="text-muted">{t('adventureCategory.empty')}</p>
      )}

      <Link to="/adventures" className="inline-block text-sm font-semibold text-accent hover:underline">
        {t('common.backToAdventures')}
      </Link>
    </div>
  );
}
