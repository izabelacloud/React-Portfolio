import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import CaseStudyCard from '../components/CaseStudyCard';
import ExperienceTimeline from '../components/ExperienceTimeline';
import certifications from '../data/certifications';
import caseStudies from '../data/caseStudies';
import experience from '../data/experience';

export default function Work() {
  return (
    <div className="space-y-20 py-10">
      <SectionHeading
        eyebrow="Work"
        title="Enterprise architecture, delivered."
        subtitle="A selection of the problems I've been trusted to solve. Client and implementation details are anonymized or generalized to respect confidentiality."
      />

      <section>
        <h2 className="font-display text-2xl font-medium">Case studies</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs, index) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={index} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">Experience</h2>
        <div className="mt-6">
          <ExperienceTimeline items={experience} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-medium">Certifications</h2>
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
        <h2 className="font-display text-2xl font-medium">Personal projects</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">
          Outside of enterprise architecture work, I build and ship small web applications for practice.
        </p>
        <Link to="/projects" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">
          See the projects →
        </Link>
      </section>
    </div>
  );
}
