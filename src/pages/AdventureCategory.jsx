import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ExpeditionCard from '../components/ExpeditionCard';
import expeditions from '../data/expeditions';

const meta = {
  mountains: { labelKey: 'mountainsLabel', subtitleKey: 'mountainsSubtitle' },
  diving: { labelKey: 'divingLabel', subtitleKey: 'divingSubtitle' },
  skiing: { labelKey: 'skiingLabel', subtitleKey: 'skiingSubtitle' },
  travel: { labelKey: 'travelLabel', subtitleKey: 'travelSubtitle' },
};

export default function AdventureCategory() {
  const { t } = useTranslation();
  const { category } = useParams();
  const info = meta[category];
  const items = expeditions.filter((e) => e.category === category);

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
      <SectionHeading
        eyebrow={t('adventures.eyebrow')}
        title={t(`adventures.${info.labelKey}`)}
        subtitle={t(`adventureCategory.${info.subtitleKey}`)}
      />

      {items.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((exp, index) => (
            <ExpeditionCard key={exp.slug} expedition={exp} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-muted">{t('adventureCategory.empty')}</p>
      )}
    </div>
  );
}
