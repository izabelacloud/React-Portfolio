import SectionHeading from '../components/SectionHeading';
import StatDisplay from '../components/StatDisplay';
import CTA from '../components/CTA';
import stats, { tagline } from '../data/stats';

const categories = [
  { to: '/adventures/mountains', label: 'Mountains', description: 'Climbing and mountaineering, one deliberate step at a time.' },
  { to: '/adventures/diving', label: 'Diving', description: 'PADI Divemaster. Calm under pressure, at depth.' },
  { to: '/adventures/skiing', label: 'Skiing', description: 'Reading terrain and conditions fast, and adapting faster.' },
  { to: '/adventures/travel', label: 'Travel', description: '58 of 195 countries. Still counting.' },
];

export default function Adventures() {
  return (
    <div className="space-y-16 py-10">
      <SectionHeading eyebrow="Adventures" title={tagline} />

      <StatDisplay stats={stats} />

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div key={cat.to} className="rounded-2xl border border-stone/40 p-6 dark:border-charcoal">
            <h2 className="font-display text-xl font-medium">{cat.label}</h2>
            <p className="mt-2 text-sm text-ink/70 dark:text-stone">{cat.description}</p>
            <div className="mt-4">
              <CTA to={cat.to} variant="secondary">Explore →</CTA>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
