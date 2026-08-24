import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function StatDisplay({ stats }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="text-center"
        >
          <div className="font-display text-2xl font-medium text-accent sm:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs uppercase tracking-wide text-muted dark:text-stone">
            {stat.key ? t(`stats.${stat.key}`) : stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
