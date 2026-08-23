import { motion } from 'framer-motion';

export default function PageHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h1>
      {subtitle && <p className="mt-2 text-ink/60 dark:text-stone">{subtitle}</p>}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-stone" />
    </motion.div>
  );
}
