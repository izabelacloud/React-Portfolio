import { motion } from 'framer-motion';

export default function AdventureTimeline({ items }) {
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
          <span className="absolute -left-4 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.date}</p>
          <h3 className="mt-1 font-display text-lg font-medium">{item.title}</h3>
          <p className="text-sm font-semibold text-accent">{item.location}</p>
          {item.achievement && (
            <p className="mt-1 text-sm text-ink/70 dark:text-stone">{item.achievement}</p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
