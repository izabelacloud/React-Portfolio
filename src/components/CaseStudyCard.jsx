import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  const { t } = useTranslation();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-2xl border border-stone/40 bg-white/40 p-6 transition-shadow hover:shadow-lg dark:border-charcoal dark:bg-white/5"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">{caseStudy.industry}</p>
      <h3 className="mt-2 font-display text-xl font-medium">{caseStudy.title}</h3>
      <p className="mt-3 text-sm text-ink/70 dark:text-stone">{caseStudy.challenge}</p>
      <Link
        to={`/work/${caseStudy.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
      >
        {t('common.readCaseStudyArrow')}
      </Link>
    </motion.article>
  );
}
