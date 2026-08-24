import { motion } from 'framer-motion';

export default function Hero({ eyebrow, title, subtitle, description, children }) {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-5xl font-medium leading-[1.1] tracking-tight sm:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-xl font-medium text-ink/80 dark:text-warm/90">{subtitle}</p>
        )}
        {description && (
          <p className="mt-4 max-w-xl text-lg text-muted dark:text-stone">{description}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </motion.div>
    </section>
  );
}
