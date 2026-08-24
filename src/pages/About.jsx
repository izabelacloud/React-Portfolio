import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import coverImage from '../assets/cover/cover-image.jpg';
import userImage from '../assets/ip2.jpg';
import StatDisplay from '../components/StatDisplay';
import stats from '../data/stats';

export default function About() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="relative -mx-6 h-48 overflow-hidden sm:h-64 md:mx-0 md:rounded-3xl">
        <img src={coverImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent dark:from-surface-dark dark:via-surface-dark/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={userImage}
          alt="Izabela Petrovicova"
          className="mt-8 h-32 w-32 flex-none rounded-full border-4 border-white object-cover shadow-lg sm:h-40 sm:w-40 dark:border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5"
        >
          <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {t('about.greeting')} <span className="gradient-text">Izabela Petrovicova</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-accent">
            {t('about.accentLine')}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-10 max-w-3xl space-y-4 text-ink/70 dark:text-stone"
      >
        <p>{t('about.p1')}</p>
        <p>
          <Trans i18nKey="about.p2">
            0<strong>1</strong>2
          </Trans>
        </p>
        <p>{t('about.p3')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl border-t border-stone/40 pt-10 dark:border-charcoal"
      >
        <h2 className="font-display text-xl font-medium">{t('tagline')}</h2>
        <div className="mt-4 space-y-4 text-ink/70 dark:text-stone">
          <p>{t('about.leadIntro')}</p>
          <p>
            <Trans i18nKey="about.divemaster">
              0<strong>1</strong>2
            </Trans>
          </p>
          <p>
            <Trans i18nKey="about.mountaineer">
              0<strong>1</strong>2
            </Trans>
          </p>
          <p>
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl space-y-4 text-ink/70 dark:text-stone"
      >
        <p className="font-semibold text-ink dark:text-warm">{t('about.closing')}</p>
      </motion.div>
    </section>
  );
}
