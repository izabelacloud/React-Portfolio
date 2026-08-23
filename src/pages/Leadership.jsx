import SectionHeading from '../components/SectionHeading';
import Quote from '../components/Quote';

export default function Leadership() {
  return (
    <div className="space-y-16 py-10">
      <SectionHeading
        eyebrow="Leadership"
        title="Calm decisions, made under real pressure"
        subtitle="How the same instincts that hold up on a rock face or a dive show up in how I lead teams."
      />

      <section className="max-w-3xl space-y-4 text-ink/70 dark:text-stone">
        <p>
          Great architecture is never just about technology. It's about understanding people,
          aligning stakeholders, simplifying complexity, and creating systems that remain
          adaptable for years to come.
        </p>
        <p>
          [VERIFY — expand with a specific, concrete leadership story: a decision made under
          pressure, a team led through ambiguity, or a mentoring moment. Avoid generic claims;
          use a real example.]
        </p>
      </section>

      <Quote cite="[VERIFY — attribute if this is a direct quote, or remove attribution]">
        Preparation, calm decision-making, and trust are essential when leading people in
        challenging environments.
      </Quote>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">Team leadership</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">
          [VERIFY — team size (reported ~8), duration, and scope of leadership responsibility]
        </p>
      </section>

      <section className="max-w-3xl">
        <h2 className="font-display text-2xl font-medium">Programs and initiatives</h2>
        <p className="mt-3 text-ink/70 dark:text-stone">
          [VERIFY — Apple Ascent program specifics, AI for Good specifics, or other named
          initiatives to include here]
        </p>
      </section>
    </div>
  );
}
