// Drop a logo file into src/assets/logos/ named after the company (e.g.
// "apple.svg" or "ge-healthcare.png") to swap that company's initials
// avatar for its logo. Use each company's own press/brand-kit asset, not a
// scraped image, to stay within its usage terms. Companies without a file
// keep the initials avatar automatically.
const logoFiles = import.meta.glob('../assets/logos/*.{svg,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

function slugify(company) {
  return company
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const logosBySlug = Object.fromEntries(
  Object.entries(logoFiles).map(([path, src]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    src,
  ])
);

function initials(company) {
  return company
    .replace(/[.,]/g, '')
    .split(' ')
    .filter((w) => w && !['Inc', 'Ltd', 'LLC'].includes(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function CompanyLogoBadge({ company, className = '' }) {
  const logoSrc = logosBySlug[slugify(company)];

  if (logoSrc) {
    return (
      <img
        src={logoSrc}
        alt={company}
        aria-hidden
        className={`h-10 w-10 flex-none rounded-full object-contain ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden
      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent dark:bg-accent/20 ${className}`}
    >
      {initials(company)}
    </span>
  );
}
