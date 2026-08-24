import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import certifications from '../data/certifications';
import caseStudies from '../data/caseStudies';
import experience from '../data/experience';

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
