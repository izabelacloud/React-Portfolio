export default function ContourDivider({ className = '' }) {
  return (
    <svg
      className={`contour-divider ${className}`}
      viewBox="0 0 400 48"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 24 Q 25 4, 50 24 T 100 24 T 150 24 T 200 24 T 250 24 T 300 24 T 350 24 T 400 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M0 34 Q 25 14, 50 34 T 100 34 T 150 34 T 200 34 T 250 34 T 300 34 T 350 34 T 400 34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M0 14 Q 25 -6, 50 14 T 100 14 T 150 14 T 200 14 T 250 14 T 300 14 T 350 14 T 400 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
}
