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
      <div className="flex w-max gap-4">
        {items.map((item) => {
          const Icon = item.Icon ?? CameraIcon;
          const content = (
            <>
              <Icon className="h-8 w-8 text-accent" />
              <span className="font-display text-sm font-medium text-ink dark:text-warm">{item.label}</span>
            </>
          );

          if (item.to) {
            return (
              <Link
                key={item.key}
                to={item.to}
                className="group flex h-32 w-32 flex-none flex-col items-center justify-center gap-3 rounded-2xl border border-stone/40 p-4 text-center transition-all hover:-translate-y-1 hover:border-accent dark:border-charcoal sm:h-36 sm:w-36"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={item.key}
              className="flex h-32 w-32 flex-none flex-col items-center justify-center gap-3 rounded-2xl border border-stone/40 p-4 text-center dark:border-charcoal sm:h-36 sm:w-36"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
