import { Link } from 'react-router-dom';

export default function CTA({ to, children, variant = 'primary', className = '' }) {
  const base =
    'inline-flex w-full min-w-[200px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors sm:w-auto';
  const styles =
    variant === 'primary'
      ? `${base} bg-accent text-warm hover:bg-accent-dark`
      : `${base} border border-current text-ink hover:border-accent hover:text-accent dark:text-warm`;

  return (
    <Link to={to} className={`${styles} ${className}`}>
      {children}
    </Link>
  );
}
