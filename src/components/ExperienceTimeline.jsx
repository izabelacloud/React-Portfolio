import { motion } from 'framer-motion';

export default function ExperienceTimeline({ items }) {
  return (
    <div className="space-y-10 border-l border-stone/40 pl-8 dark:border-charcoal">
      {items.map((item, index) => (
        <motion.div
          key={`${item.company}-${item.period}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative"
        >
          <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.period}</p>
          <h3 className="mt-1 font-display text-xl font-medium">{item.role}</h3>
          <p className="text-sm font-semibold text-accent">{item.company}</p>
          <p className="mt-3 text-sm text-ink/70 dark:text-stone">{item.scope}</p>
          {item.responsibilities?.length > 0 && (
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink/70 dark:text-stone">
              {item.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
