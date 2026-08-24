function CameraIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17l-1.24-1.35A2 2 0 0 0 14.12 3H9.88a2 2 0 0 0-1.47.65L7.17 5H4Zm8 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" />
    </svg>
  );
}

export default function Filmstrip({ items }) {
  if (!items?.length) return null;

  return (
    <div className="overflow-x-auto rounded-2xl bg-ink py-3 dark:bg-black/60">
      <div className="flex w-max gap-1 px-3">
        {items.map((item) => {
          const Icon = item.Icon ?? CameraIcon;
          return (
            <div
              key={item.key}
              className="flex h-28 w-28 flex-none flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 text-warm/50 sm:h-36 sm:w-36"
            >
              <Icon className="h-8 w-8" />
              <span className="text-xs font-semibold uppercase tracking-wide">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
