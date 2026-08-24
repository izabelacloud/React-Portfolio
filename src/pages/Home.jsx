import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import SectionHeading from '../components/SectionHeading';
import StatDisplay from '../components/StatDisplay';
import ContourDivider from '../components/ContourDivider';
import Quote from '../components/Quote';
import ProfilePhotoPlaceholder from '../components/ProfilePhotoPlaceholder';
import stats from '../data/stats';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        eyebrow={t('home.heroEyebrow')}
        title="Izabela Petrovicova"
        subtitle={t('home.heroTitle')}
        description={t('home.heroSubtitle')}
        media={<ProfilePhotoPlaceholder />}
      >
        <CTA to="/work">{t('common.seeWork')}</CTA>
        <CTA to="/adventures" variant="secondary">{t('common.seeAdventures')}</CTA>
      </Hero>

      <ContourDivider className="text-accent" />

      <section className="py-16">
        <StatDisplay stats={stats} />
      </section>

      <ContourDivider className="text-accent" />

      <section className="grid gap-10 py-16 sm:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={t('home.professionalEyebrow')}
            title={t('home.professionalTitle')}
            subtitle={t('home.professionalSubtitle')}
          />
          <div className="mt-6">
            <CTA to="/work" variant="secondary">{t('common.exploreWorkArrow')}</CTA>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow={t('home.personalEyebrow')}
            title={t('tagline')}
            subtitle={t('home.personalSubtitle')}
          />
          <div className="mt-6">
            <CTA to="/adventures" variant="secondary">{t('common.exploreAdventuresArrow')}</CTA>
          </div>
        </div>
      </section>

      <ContourDivider className="text-accent" />

      <section className="py-16">
        <Quote>{t('home.quote')}</Quote>
      </section>
    </div>
  );
}
