import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import StatDisplay from '../components/StatDisplay';
import ContourDivider from '../components/ContourDivider';
import Quote from '../components/Quote';
import ProfilePhotoPlaceholder from '../components/ProfilePhotoPlaceholder';
import { DivingIcon, MountainIcon, RunningIcon } from '../components/AdventureIcons';
import stats from '../data/stats';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        eyebrow={t('home.heroEyebrow')}
        title={t('common.fullName')}
        subtitle={t('home.heroTitle')}
        description={t('home.heroSubtitle')}
        media={<ProfilePhotoPlaceholder />}
      >
        <CTA to="/work">{t('common.seeWork')}</CTA>
        <CTA to="/adventures" variant="secondary">{t('common.seeAdventures')}</CTA>
      </Hero>

      <ContourDivider className="text-accent" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl space-y-4 py-16 text-ink/70 dark:text-stone"
      >
        <p className="text-sm font-semibold text-accent">{t('about.locationLine')}</p>
        <p>{t('about.p1')}</p>
        <p>
          <Trans i18nKey="about.p2">
            0<strong>1</strong>2
          </Trans>
        </p>
        <p>{t('about.p3')}</p>
        <p>{t('about.journey')}</p>
      </motion.div>

      <ContourDivider className="text-accent" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-3xl py-16"
      >
        <h2 className="font-display text-xl font-medium">{t('tagline')}</h2>
        <div className="mt-4 space-y-4 text-ink/70 dark:text-stone">
          <p>{t('about.leadIntro')}</p>
          <p className="flex items-start gap-3">
            <DivingIcon className="mt-1 h-5 w-5 flex-none text-accent" />
            <Trans i18nKey="about.divemaster">
              0<strong>1</strong>2
            </Trans>
          </p>
          <p className="flex items-start gap-3">
            <MountainIcon className="mt-1 h-5 w-5 flex-none text-accent" />
            <Trans i18nKey="about.mountaineer">
              0<strong>1</strong>2
            </Trans>
          </p>
          <p className="flex items-start gap-3">
            <RunningIcon className="mt-1 h-5 w-5 flex-none text-accent" />
            <Trans i18nKey="about.marathon">
              0<strong>1</strong>2
            </Trans>
          </p>
          <p>
            <Trans i18nKey="about.continents">
              0<strong>1</strong>2
            </Trans>
          </p>
        </div>

        <div className="mt-8">
          <StatDisplay stats={stats} />
        </div>

        <p className="mt-8">
          <Link to="/adventures" className="text-sm font-semibold text-accent hover:underline">
            {t('common.seeAdventuresArrow')}
          </Link>
        </p>
      </motion.div>

      <ContourDivider className="text-accent" />

      <section className="py-16">
        <Quote>{t('home.quote')}</Quote>
        <p className="mx-auto mt-6 max-w-3xl text-center font-semibold text-ink dark:text-warm">
          {t('about.closing')}
        </p>
      </section>
    </div>
  );
}
