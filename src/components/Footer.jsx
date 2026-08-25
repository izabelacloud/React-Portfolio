import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import social from '../data/social';
import languages from '../i18n/languages';
import trailblazerAstro from '../assets/social/trailblazer-astro-mask.png';

const socials = [
  {
    name: 'Trailblazer',
    abbr: 'TB',
    href: social.trailblazer,
    mask: trailblazerAstro,
  },
  {
    name: 'GitHub',
    abbr: 'GH',
    href: social.github,
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    ),
  },
  {
    name: 'LinkedIn',
    abbr: 'LI',
    href: social.linkedin,
    icon: (
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    ),
  },
  {
    name: 'Instagram',
    abbr: 'IG',
    href: social.instagram,
    icon: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.5.01-4.72.07-.96.04-1.48.2-1.83.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.14.35-.3.87-.34 1.83-.06 1.22-.07 1.57-.07 4.72s.01 3.5.07 4.72c.04.96.2 1.48.34 1.83.18.46.39.79.74 1.13.34.35.67.56 1.13.74.35.14.87.3 1.83.34 1.22.06 1.57.07 4.72.07s3.5-.01 4.72-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.14-.35.3-.87.34-1.83.06-1.22.07-1.57.07-4.72s-.01-3.5-.07-4.72c-.04-.96-.2-1.48-.34-1.83a2.1 2.1 0 0 0-.74-1.13 2.1 2.1 0 0 0-1.13-.74c-.35-.14-.87-.3-1.83-.34-1.22-.06-1.57-.07-4.72-.07Zm0 4.05a4.17 4.17 0 1 1 0 8.34 4.17 4.17 0 0 1 0-8.34Zm0 1.62a2.55 2.55 0 1 0 0 5.1 2.55 2.55 0 0 0 0-5.1Zm5.31-2.9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    ),
  },
  {
    name: 'X',
    abbr: 'X',
    href: social.twitter,
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: 'Strava',
    abbr: 'STR',
    href: social.strava,
    icon: (
      <path d="M15.387 17.944l-2.089-4.116h-3.06L15.387 24l5.15-10.172h-3.066M13.828 0L6.212 13.828h3.792l1.618-3.168h4.616z" />
    ),
  },
  {
    name: 'Spotify',
    abbr: 'SPT',
    href: social.spotify,
    icon: (
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.32-1.32 9.719-.66 13.439 1.621.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    ),
  },
  {
    name: 'YouTube',
    abbr: 'YT',
    href: social.youtube,
    icon: (
      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.524A2.994 2.994 0 0 0 .502 6.186 31.14 31.14 0 0 0 0 12a31.14 31.14 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.107 2.117c1.886.524 9.391.524 9.391.524s7.505 0 9.391-.524a2.994 2.994 0 0 0 2.107-2.117A31.14 31.14 0 0 0 24 12a31.14 31.14 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="mt-24 border-t border-black/5 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <p className="font-display text-lg font-semibold tracking-tight">
          <span className="gradient-text">{t('common.fullName')}</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              title={s.name}
              className="group flex items-center gap-1.5 rounded-full px-2.5 py-2 text-ink/60 transition-colors hover:bg-accent/10 hover:text-accent dark:text-stone dark:hover:text-warm"
            >
              {s.mask ? (
                <span
                  aria-hidden
                  className="h-6 w-6 bg-current"
                  style={{
                    maskImage: `url(${s.mask})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(${s.mask})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                  }}
                />
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  {s.icon}
                </svg>
              )}
              <span className="text-[11px] font-semibold uppercase tracking-wide opacity-0 transition-opacity group-hover:opacity-100 sm:opacity-70">
                {s.abbr}
              </span>
            </a>
          ))}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40 dark:text-stone/60">
            {t('languages.heading')}
          </p>
          <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => i18n.changeLanguage(lang.code)}
                  aria-current={i18n.language === lang.code ? 'true' : undefined}
                  className={`text-sm transition-colors hover:text-accent ${
                    i18n.language === lang.code
                      ? 'font-semibold text-accent'
                      : 'text-ink/50 dark:text-stone'
                  }`}
                >
                  {lang.nativeName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-ink/50 dark:text-stone">
          <Link to="/now" className="hover:text-accent">{t('nav.now')}</Link>
          {' · '}
          &copy; {new Date().getFullYear()} {t('common.fullName')}
        </p>
      </div>
    </footer>
  );
}
