import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import StatDisplay from '../components/StatDisplay';
import CTA from '../components/CTA';
import Filmstrip from '../components/Filmstrip';
import { MountainIcon, DivingIcon, SkiingIcon, RunningIcon, CompassIcon } from '../components/AdventureIcons';
import stats from '../data/stats';

const categories = [
  { to: '/adventures/mountains', labelKey: 'mountainsLabel', descKey: 'mountainsDesc', Icon: MountainIcon },
  { to: '/adventures/diving', labelKey: 'divingLabel', descKey: 'divingDesc', Icon: DivingIcon },
  { to: '/adventures/skiing', labelKey: 'skiingLabel', descKey: 'skiingDesc', Icon: SkiingIcon },
  { to: '/adventures/travel', labelKey: 'travelLabel', descKey: 'travelDesc', Icon: CompassIcon },
  { to: '/destinations', labelKey: 'worldMapLabel', descKey: 'worldMapDesc', Icon: CompassIcon },
];

const filmstripItems = [
  { key: 'mountains', label: 'Mountains', Icon: MountainIcon },
  { key: 'diving', label: 'Diving', Icon: DivingIcon },
  { key: 'skiing', label: 'Skiing', Icon: SkiingIcon },
  { key: 'running', label: 'Running', Icon: RunningIcon },
  { key: 'travel', label: 'Travel', Icon: CompassIcon },
];

export default function Adventures() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16 py-10">
      <SectionHeading eyebrow={t('adventures.eyebrow')} title={t('tagline')} />

      <Filmstrip items={filmstripItems} />

      <StatDisplay stats={stats} />

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.to} className="flex flex-col rounded-2xl border border-stone/40 p-6 dark:border-charcoal">
            <cat.Icon className="h-8 w-8 text-accent" />
            <h2 className="mt-3 font-display text-xl font-medium">{t(`adventures.${cat.labelKey}`)}</h2>
            <p className="mt-2 flex-1 text-sm text-ink/70 dark:text-stone">{t(`adventures.${cat.descKey}`)}</p>
            <div className="mt-4">
              <CTA to={cat.to} variant="secondary">{t('common.exploreArrow')}</CTA>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
