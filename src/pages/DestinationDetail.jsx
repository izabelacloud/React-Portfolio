import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ExpeditionCard from '../components/ExpeditionCard';
import ImageGallery from '../components/ImageGallery';
import DestinationClock from '../components/DestinationClock';
import locations from '../data/locations';
import expeditions from '../data/expeditions';

export default function DestinationDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const destination = locations.find((loc) => loc.slug === slug);
  const relatedExpeditions = expeditions.filter((exp) =>
    exp.location?.toLowerCase().includes(destination?.country.toLowerCase() ?? '\0'),
  );

  if (!destination) {
    return (
      <div className="py-10">
        <p>{t('common.destinationNotFound')}</p>
        <Link to="/destinations" className="text-accent hover:underline">{t('common.backToMap')}</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        eyebrow={t('destinationDetail.eyebrow')}
        title={destination.country}
        subtitle={t('destinationDetail.citiesVisited', { cities: destination.cities.join(', ') })}
      />

      <DestinationClock timezone={destination.timezone} />

      {relatedExpeditions.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedExpeditions.map((exp, index) => (
            <ExpeditionCard key={exp.slug} expedition={exp} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-muted">{t('destinationDetail.empty', { country: destination.country })}</p>
      )}

      <ImageGallery images={destination.gallery} />

      <Link to="/destinations" className="inline-block text-sm font-semibold text-accent hover:underline">
        {t('common.backToMap')}
      </Link>
    </div>
  );
}
