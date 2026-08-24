import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import Quote from '../components/Quote';

export default function Leadership() {
  const { t } = useTranslation();

  return (
    <div className="space-y-16 py-10">
      <SectionHeading
        eyebrow={t('leadership.eyebrow')}
        title={t('leadership.title')}
        subtitle={t('leadership.subtitle')}
      />

      <section className="max-w-3xl space-y-4 text-ink/70 dark:text-stone">
        <p>{t('leadership.p1')}</p>
        <p>{t('leadership.p2')}</p>
      </section>

      <Quote>{t('leadership.quote')}</Quote>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">{t('leadership.teamHeading')}</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">{t('leadership.teamText')}</p>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">{t('leadership.programsHeading')}</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">{t('leadership.programsText')}</p>
      </section>
    </div>
  );
}
