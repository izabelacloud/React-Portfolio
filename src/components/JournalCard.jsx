import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function JournalCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-stone/40 pb-6 dark:border-charcoal"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">{post.category}</p>
      <h3 className="mt-1 font-display text-lg font-medium">{post.title}</h3>
      <p className="mt-1 text-sm text-muted">{post.date}</p>
      <p className="mt-2 text-sm text-ink/70 dark:text-stone">{post.summary}</p>
      <Link
        to={`/field-notes/${post.slug}`}
        className="mt-3 inline-block text-sm font-semibold text-accent hover:underline"
      >
        Read more →
      </Link>
    </motion.article>
  );
}
