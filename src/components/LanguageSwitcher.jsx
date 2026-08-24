import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import languages from '../i18n/languages';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const current = languages.find((l) => l.code === i18n.language) ?? languages[0];

  function selectLanguage(code) {
    i18n.changeLanguage(code);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="rounded-full px-3 py-2 text-sm font-semibold text-ink/70 transition-colors hover:bg-accent/10 hover:text-ink dark:text-stone dark:hover:text-warm"
      >
        {current.code.toUpperCase()}
      </button>

      {open && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default"
          />
          <ul className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-stone/40 bg-surface shadow-lg dark:border-charcoal dark:bg-surface-dark">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  onClick={() => selectLanguage(lang.code)}
                  className={`flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors hover:bg-accent/10 ${
                    lang.code === current.code ? 'font-semibold text-accent' : 'text-ink/80 dark:text-stone'
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  <span className="text-xs text-muted">{lang.code.toUpperCase()}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
