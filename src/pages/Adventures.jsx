import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import StatDisplay from '../components/StatDisplay';
import CTA from '../components/CTA';
import Filmstrip from '../components/Filmstrip';
import stats from '../data/stats';

const categories = [
  { to: '/adventures/mountains', labelKey: 'mountainsLabel', descKey: 'mountainsDesc' },
  { to: '/adventures/diving', labelKey: 'divingLabel', descKey: 'divingDesc' },
  { to: '/adventures/skiing', labelKey: 'skiingLabel', descKey: 'skiingDesc' },
  { to: '/adventures/travel', labelKey: 'travelLabel', descKey: 'travelDesc' },
  { to: '/destinations', labelKey: 'worldMapLabel', descKey: 'worldMapDesc' },
];

const filmstripItems = [
  { key: 'mountains', label: 'Mountains' },
  { key: 'diving', label: 'Diving' },
  { key: 'skiing', label: 'Skiing' },
  { key: 'running', label: 'Running' },
  { key: 'travel', label: 'Travel' },
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
          <div key={cat.to} className="rounded-2xl border border-stone/40 p-6 dark:border-charcoal">
            <h2 className="font-display text-xl font-medium">{t(`adventures.${cat.labelKey}`)}</h2>
            <p className="mt-2 text-sm text-ink/70 dark:text-stone">{t(`adventures.${cat.descKey}`)}</p>
            <div className="mt-4">
              <CTA to={cat.to} variant="secondary">{t('common.exploreArrow')}</CTA>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
