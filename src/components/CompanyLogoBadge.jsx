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
  return (
    <span
      aria-hidden
      className={`flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent dark:bg-accent/20 ${className}`}
    >
      {initials(company)}
    </span>
  );
}
