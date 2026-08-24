import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import JournalCard from '../components/JournalCard';
import journalPosts from '../data/journal';

export default function FieldNotes() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10 py-10">
      <SectionHeading
        eyebrow={t('fieldNotes.eyebrow')}
        title={t('fieldNotes.title')}
        subtitle={t('fieldNotes.subtitle')}
      />

      <div className="space-y-8">
        {journalPosts.map((post, index) => (
          <JournalCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
