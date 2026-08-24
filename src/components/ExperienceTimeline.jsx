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
          {item.achievements?.length > 0 && (
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm font-medium text-ink dark:text-warm">
              {item.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          )}
          {item.technologies?.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-stone/30 px-3 py-1 text-xs font-semibold text-ink/80 dark:bg-white/10 dark:text-stone"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
