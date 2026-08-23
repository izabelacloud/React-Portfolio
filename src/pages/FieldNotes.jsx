import SectionHeading from '../components/SectionHeading';
import JournalCard from '../components/JournalCard';
import journalPosts from '../data/journal';

export default function FieldNotes() {
  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        eyebrow="Field Notes"
        title="Notes from the field and the office"
        subtitle="Short writing on architecture, leadership and adventure — where they overlap more than you'd think."
      />

      <div className="space-y-8">
        {journalPosts.map((post, index) => (
          <JournalCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
