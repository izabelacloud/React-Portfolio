import { Link } from 'react-router-dom';

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
    <div className="-mx-6 overflow-x-auto px-6 pb-2">
      <div className="flex w-max gap-4 rounded-2xl bg-ink p-4 dark:bg-black/60">
        {items.map((item) => {
          const Icon = item.Icon ?? CameraIcon;
          const content = (
            <>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent group-hover:text-ink">
                <Icon className="h-7 w-7" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-warm/80 group-hover:text-warm">
                {item.label}
              </span>
            </>
          );

          if (item.to) {
            return (
              <Link
                key={item.key}
                to={item.to}
                className="group flex h-32 w-32 flex-none flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-white/10 sm:h-40 sm:w-40"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={item.key}
              className="group flex h-32 w-32 flex-none flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 text-warm/50 sm:h-40 sm:w-40"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
