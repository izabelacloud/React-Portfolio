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
        <p>
          [VERIFY — expand with a specific, concrete leadership story: a decision made under
          pressure, a team led through ambiguity, or a mentoring moment. Avoid generic claims;
          use a real example.]
        </p>
      </section>

      <Quote cite="[VERIFY — attribute if this is a direct quote, or remove attribution]">
        {t('leadership.quote')}
      </Quote>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">{t('leadership.teamHeading')}</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">
          [VERIFY — team size (reported ~8), duration, and scope of leadership responsibility]
        </p>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">{t('leadership.programsHeading')}</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">
          [VERIFY — Apple Ascent program specifics, AI for Good specifics, or other named
          initiatives to include here]
        </p>
      </section>
    </div>
  );
}
