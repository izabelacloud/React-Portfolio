import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import StatDisplay from '../components/StatDisplay';
import ContourDivider from '../components/ContourDivider';
import { DivingIcon, MountainIcon, RunningIcon } from '../components/AdventureIcons';
import stats from '../data/stats';
import expeditions from '../data/expeditions';
import profilePhoto from '../assets/ip2.jpg';

const chipKeys = ['chipGlobal', 'chipDiver', 'chipMountaineer', 'chipRunner', 'chipCountries'];

const callouts = [
  { Icon: DivingIcon, labelKey: 'calloutDiverLabel', lineKey: 'calloutDiverLine' },
  { Icon: MountainIcon, labelKey: 'calloutMountaineerLabel', lineKey: 'calloutMountaineerLine' },
  { Icon: RunningIcon, labelKey: 'calloutRunnerLabel', lineKey: 'calloutRunnerLine' },
];

const featuredExpedition = expeditions.find((exp) => exp.slug === 'mount-kosciuszko');

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        eyebrow={t('home.heroEyebrow')}
        title={t('common.fullName')}
        subtitle={t('home.heroTitle')}
        media={
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-to-br from-accent/40 to-glow/30 blur-sm sm:-inset-4"
            />
            <img
              src={profilePhoto}
              alt={t('common.fullName')}
              className="h-56 w-56 rounded-[2rem] object-cover shadow-2xl ring-1 ring-white/60 sm:h-64 sm:w-64 dark:ring-white/10"
            />
            <span className="absolute -bottom-4 -right-4 rounded-2xl border border-stone/40 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink shadow-lg backdrop-blur dark:border-charcoal dark:bg-charcoal/90 dark:text-warm">
              {t('tagline')}
            </span>
          </div>
        }
      >
        <CTA to="/work">{t('common.seeWork')}</CTA>
        <CTA to="/adventures" variant="secondary">{t('common.seeAdventures')}</CTA>
      </Hero>

      <div className="flex flex-wrap items-center justify-center gap-2.5 pb-6">
        {chipKeys.map((key) => (
          <span
            key={key}
            className="rounded-full border border-stone/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink/70 dark:border-charcoal dark:text-stone"
          >
            {t(`home.${key}`)}
          </span>
        ))}
      </div>

      <ContourDivider className="text-accent" />

      <section className="py-14">
        <StatDisplay stats={stats} />
      </section>

      {featuredExpedition && (
        <section className="grid gap-8 py-6 sm:grid-cols-2 sm:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-dashed border-stone/40 bg-charcoal/5 dark:border-charcoal dark:bg-white/5"
          >
            <MountainIcon className="absolute inset-0 m-auto h-16 w-16 text-stone/40 dark:text-charcoal" />
            <span className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent dark:bg-charcoal/80">
              {featuredExpedition.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t('home.spotlightEyebrow')}
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {featuredExpedition.title}
            </h2>
            <p className="mt-2 text-sm font-semibold text-muted dark:text-stone">
              {featuredExpedition.elevation} &middot; {featuredExpedition.date}
            </p>
            <Link
              to={`/adventures/${featuredExpedition.category}/${featuredExpedition.slug}`}
              className="mt-5 inline-block text-sm font-semibold text-accent hover:underline"
            >
              {t('common.readStoryArrow')}
            </Link>
          </motion.div>
        </section>
      )}

      <section className="grid gap-6 py-14 sm:grid-cols-3">
        {callouts.map(({ Icon, labelKey, lineKey }) => (
          <motion.div
            key={labelKey}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-stone/40 bg-white/40 p-6 text-center dark:border-charcoal dark:bg-white/5"
          >
            <Icon className="mx-auto h-8 w-8 text-accent" />
            <p className="mt-3 font-display text-lg font-medium">{t(`home.${labelKey}`)}</p>
            <p className="mt-1 text-sm text-muted dark:text-stone">{t(`home.${lineKey}`)}</p>
          </motion.div>
        ))}
      </section>

      <ContourDivider className="text-accent" />

      <section className="py-10 text-center">
        <p className="mx-auto max-w-xl font-display text-xl font-medium">{t('about.closing')}</p>
        <Link to="/adventures" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          {t('common.seeAdventuresArrow')}
        </Link>
      </section>
    </div>
  );
}
