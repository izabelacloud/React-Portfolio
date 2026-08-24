import { motion } from 'framer-motion';

export default function Hero({ eyebrow, title, subtitle, description, media, children }) {
  return (
    <section className="relative flex min-h-[75vh] flex-col justify-center gap-10 overflow-hidden py-16 sm:flex-row sm:items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl dark:bg-accent/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-stone/40 blur-3xl dark:bg-charcoal/60"
      />

      {media && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex-none"
        >
          {media}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl"
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-6xl font-medium leading-[1.05] tracking-tight sm:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-2xl font-medium text-ink/80 dark:text-warm/90">{subtitle}</p>
        )}
        {description && (
          <p className="mt-4 max-w-xl text-lg text-muted dark:text-stone">{description}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </motion.div>
    </section>
  );
}
