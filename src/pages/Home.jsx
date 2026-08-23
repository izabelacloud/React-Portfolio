import Hero from '../components/Hero';
import CTA from '../components/CTA';
import SectionHeading from '../components/SectionHeading';
import StatDisplay from '../components/StatDisplay';
import ContourDivider from '../components/ContourDivider';
import Quote from '../components/Quote';
import stats, { tagline } from '../data/stats';

export default function Home() {
  return (
    <div>
      <Hero
        eyebrow="Izabela Petrovicova"
        title="Architect by profession. Adventurer by instinct."
        subtitle="I spend my professional life solving complex problems and my personal life looking for harder ones."
      >
        <CTA to="/work">See the work</CTA>
        <CTA to="/adventures" variant="secondary">See the adventures</CTA>
      </Hero>

      <ContourDivider className="text-accent" />

      <section className="py-16">
        <StatDisplay stats={stats} />
      </section>

      <ContourDivider className="text-accent" />

      <section className="grid gap-10 py-16 sm:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Professional"
            title="Enterprise architecture, built at scale"
            subtitle="Technical Architecture Director and Senior Salesforce Enterprise Architect, designing digital transformation programs for global organizations."
          />
          <div className="mt-6">
            <CTA to="/work" variant="secondary">Explore the work →</CTA>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="Personal"
            title={tagline}
            subtitle="PADI Divemaster, mountaineer, skier and traveler — 58 of 195 countries and counting."
          />
          <div className="mt-6">
            <CTA to="/adventures" variant="secondary">Explore the adventures →</CTA>
          </div>
        </div>
      </section>

      <ContourDivider className="text-accent" />

      <section className="py-16">
        <Quote>
          The environments change. The mindset does not.
        </Quote>
      </section>
    </div>
  );
}
