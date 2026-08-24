export default function ProfilePhotoPlaceholder({ className = '' }) {
  return (
    <div
      className={`flex h-32 w-32 flex-none items-center justify-center rounded-full border-4 border-white bg-stone/40 text-ink/40 shadow-lg sm:h-40 sm:w-40 dark:border-white/10 dark:bg-charcoal dark:text-stone/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14 sm:h-16 sm:w-16">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
      </svg>
    </div>
  );
}
