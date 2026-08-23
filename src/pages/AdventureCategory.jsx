import { useParams, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ExpeditionCard from '../components/ExpeditionCard';
import expeditions from '../data/expeditions';

const meta = {
  mountains: { label: 'Mountains', subtitle: '6 of 7 continents climbed.' },
  diving: { label: 'Diving', subtitle: 'PADI Divemaster. 6 of 7 continents dived.' },
  skiing: { label: 'Skiing', subtitle: '4 of 7 continents skied.' },
  travel: { label: 'Travel', subtitle: '58 of 195 countries visited.' },
};

export default function AdventureCategory() {
  const { category } = useParams();
  const info = meta[category];
  const items = expeditions.filter((e) => e.category === category);

  if (!info) {
    return (
      <div className="py-10">
        <p>Category not found.</p>
        <Link to="/adventures" className="text-accent hover:underline">Back to Adventures</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10 py-10">
      <SectionHeading eyebrow="Adventures" title={info.label} subtitle={info.subtitle} />

      {items.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((exp, index) => (
            <ExpeditionCard key={exp.slug} expedition={exp} index={index} />
          ))}
        </div>
      ) : (
        <p className="text-muted">[VERIFY — add expeditions for this category]</p>
      )}
    </div>
  );
}
