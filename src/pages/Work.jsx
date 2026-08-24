import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import ExperienceTimeline from '../components/ExperienceTimeline';
import CareerTimeline from '../components/CareerTimeline';
import CompanyLogoBadge from '../components/CompanyLogoBadge';
import Quote from '../components/Quote';
import certifications from '../data/certifications';
import experience from '../data/experience';
import clients from '../data/clients';
import executiveSummary, { summary } from '../data/executiveSummary';

export default function Work() {
  const { t } = useTranslation();

  return (
    <div className="space-y-20 py-10">
      <SectionHeading
        eyebrow={t('work.eyebrow')}
        title={t('work.title')}
        subtitle={t('work.subtitle')}
      />

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.clientsHeading')}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {clients.map((client) => (
            <li
              key={client}
              className="flex items-center gap-2 rounded-full border border-stone/40 px-4 py-2 text-sm font-semibold dark:border-charcoal"
            >
              <CompanyLogoBadge company={client} className="h-6 w-6 text-xs" />
              {client}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.executiveSummaryHeading')}</h2>
        <p className="mt-4 max-w-3xl text-ink/70 dark:text-stone">{summary}</p>
        <ul className="mt-6 space-y-3">
          {executiveSummary.map((item) => (
            <li key={item} className="flex gap-3 text-ink/70 dark:text-stone">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.experienceHeading')}</h2>
        <div className="mt-6">
          <CareerTimeline items={experience} />
        </div>
        <div className="mt-10">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.certificationsHeading')}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <li
              key={cert.name}
              className="rounded-full border border-stone/40 px-4 py-2 text-sm font-semibold dark:border-charcoal"
            >
              {cert.name}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-stone/40 pt-16 dark:border-charcoal">
        <SectionHeading
          eyebrow={t('leadership.eyebrow')}
          title={t('leadership.title')}
          subtitle={t('leadership.subtitle')}
        />
        <div className="mt-6 max-w-3xl space-y-4 text-ink/70 dark:text-stone">
          <p>{t('leadership.p1')}</p>
          <p>{t('leadership.p2')}</p>
        </div>
        <div className="mt-8">
          <Quote>{t('leadership.quote')}</Quote>
        </div>
        <div className="mt-10 max-w-3xl">
          <h3 className="font-display text-xl font-medium">{t('leadership.teamHeading')}</h3>
          <p className="mt-3 text-ink/70 dark:text-stone">{t('leadership.teamText')}</p>
        </div>
        <div className="mt-8 max-w-3xl">
          <h3 className="font-display text-xl font-medium">{t('leadership.programsHeading')}</h3>
          <p className="mt-3 text-ink/70 dark:text-stone">{t('leadership.programsText')}</p>
        </div>
      </section>

    </div>
  );
}
