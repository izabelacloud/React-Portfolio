import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ImageGallery from '../components/ImageGallery';
import expeditions from '../data/expeditions';

export default function ExpeditionDetail() {
  const { t } = useTranslation();
  const { category, slug } = useParams();
  const expedition = expeditions.find((e) => e.category === category && e.slug === slug);

  if (!expedition) {
    return (
      <div className="py-10">
        <p>{t('common.expeditionNotFound')}</p>
        <Link to="/adventures" className="text-accent hover:underline">{t('common.backToAdventures')}</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-10">
      <SectionHeading
        eyebrow={expedition.location}
        title={expedition.title}
        subtitle={expedition.subtitle ? `${expedition.subtitle} · ${expedition.date}` : expedition.date}
      />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-medium">{t('expeditionDetail.why')}</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{expedition.why}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">{t('expeditionDetail.challenge')}</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{expedition.challenge}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">{t('expeditionDetail.moment')}</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{expedition.moment}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">{t('expeditionDetail.lesson')}</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{expedition.lesson}</p>
        </div>
      </div>

      <ImageGallery images={expedition.gallery} />

      <Link to={`/adventures/${category}`} className="inline-block text-sm font-semibold text-accent hover:underline">
        {t('common.back')}
      </Link>
    </div>
  );
}
