import { Link } from 'react-router-dom';

export default function CTA({ to, children, variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors';
  const styles =
    variant === 'primary'
      ? `${base} bg-accent text-warm hover:bg-accent-dark`
      : `${base} border border-current text-ink hover:border-accent hover:text-accent dark:text-warm`;

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
}
