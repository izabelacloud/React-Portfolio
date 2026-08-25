import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AdventureTimeline({ items }) {
  const { t } = useTranslation();
  return (
    <div className="relative space-y-8 pl-4">
      <div className="absolute left-0 top-0 h-full w-px bg-stone/40 dark:bg-charcoal" aria-hidden />
      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: index * 0.04 }}
          className="relative"
        >
          <span
            className={`absolute -left-4 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full ${
              item.summitted === false ? 'bg-stone/60 dark:bg-charcoal' : 'bg-accent'
            }`}
          />
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.date}</p>
          <h3 className="mt-1 font-display text-lg font-medium">
            {item.title}
            {item.subtitle && <span className="font-normal text-muted"> · {item.subtitle}</span>}
          </h3>
          <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-accent">{item.location}</span>
            {item.continent && (
              <span className="rounded-full border border-stone/40 px-2 py-0.5 text-xs font-semibold text-muted dark:border-charcoal">
                {item.continent}
              </span>
            )}
            {item.elevation && <span className="text-muted">{item.elevation}</span>}
            {typeof item.summitted === 'boolean' && (
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  item.summitted
                    ? 'bg-accent/10 text-accent'
                    : 'bg-stone/40 text-muted dark:bg-charcoal'
                }`}
              >
                {item.summitted
                  ? t(`adventureCategory.${item.statusLabel ?? 'summitted'}`)
                  : t('adventureCategory.attempted')}
              </span>
            )}
          </div>
          {item.achievement && (
            <p className="mt-1 text-sm text-ink/70 dark:text-stone">{item.achievement}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
