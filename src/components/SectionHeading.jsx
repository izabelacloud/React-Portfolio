import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SectionHeading({ eyebrow, eyebrowTo, title, subtitle, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const eyebrowClasses = 'text-xs font-semibold uppercase tracking-[0.2em] text-accent';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && eyebrowTo ? (
        <Link to={eyebrowTo} className={`${eyebrowClasses} hover:underline`}>
          {eyebrow}
        </Link>
      ) : (
        eyebrow && <span className={eyebrowClasses}>{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted dark:text-stone">{subtitle}</p>
      )}
    </motion.div>
  );
}
