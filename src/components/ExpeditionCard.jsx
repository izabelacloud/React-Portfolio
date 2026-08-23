import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ExpeditionCard({ expedition, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-stone/40 bg-white/40 transition-shadow hover:shadow-lg dark:border-charcoal dark:bg-white/5"
    >
      <div className="aspect-[4/3] overflow-hidden bg-charcoal/10">
        {expedition.gallery?.[0] && (
          <img
            src={expedition.gallery[0]}
            alt={expedition.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{expedition.location}</p>
        <h3 className="mt-1 font-display text-lg font-medium">{expedition.title}</h3>
        <p className="mt-1 text-sm text-muted">{expedition.date}</p>
        <Link
          to={`/adventures/${expedition.category}/${expedition.slug}`}
          className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Read the story →
        </Link>
      </div>
    </motion.article>
  );
}
