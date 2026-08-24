import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Quote from '../components/Quote';
import certifications from '../data/certifications';
import caseStudies from '../data/caseStudies';
import experience from '../data/experience';
import clients from '../data/clients';

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
        <h2 className="font-display text-2xl font-medium">{t('work.caseStudiesHeading')}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.clientsHeading')}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {clients.map((client) => (
            <li
              key={client}
              className="rounded-full border border-stone/40 px-4 py-2 text-sm font-semibold dark:border-charcoal"
            >
              {client}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.experienceHeading')}</h2>
        <div className="mt-6">
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

      <section>
        <h2 className="font-display text-2xl font-medium">{t('work.personalProjectsHeading')}</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">{t('work.personalProjectsText')}</p>
        <Link to="/projects" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          {t('common.seeProjectsArrow')}
        </Link>
      </section>
    </div>
  );
}
