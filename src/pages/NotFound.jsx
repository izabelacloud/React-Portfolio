import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center py-20 text-center">
      <p className="font-display text-6xl font-medium text-accent/30">404</p>
      <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-ink/60 dark:text-stone">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-warm hover:bg-accent-dark"
      >
        Back to home
      </Link>
    </section>
  );
}
