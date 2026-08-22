import { motion } from 'framer-motion';

export default function PageHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-10"
    >
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h1>
      {subtitle && (
        <p className="mt-2 text-ink/60 dark:text-slate-400">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-quinary" />
    </motion.div>
  );
}
