import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import nowItems from '../data/now';

export default function Now() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10 py-10">
      <SectionHeading eyebrow={t('now.eyebrow')} title={t('now.title')} subtitle={t('now.subtitle')} />

      <ul className="space-y-6">
        {nowItems.map((item) => (
          <li key={item.type} className="border-b border-stone/40 pb-4 dark:border-charcoal">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">{item.type}</span>
            <p className="mt-1 text-ink/70 dark:text-stone">{item.text}</p>
            <p className="mt-1 text-xs text-muted">{item.updatedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
