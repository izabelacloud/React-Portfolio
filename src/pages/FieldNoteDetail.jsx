import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/SectionHeading';
import journalPosts from '../data/journal';

export default function FieldNoteDetail() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const post = journalPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-10">
        <p>{t('common.postNotFound')}</p>
        <Link to="/field-notes" className="text-accent hover:underline">{t('common.backToFieldNotes')}</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-10">
      <SectionHeading eyebrow={post.category} title={post.title} subtitle={post.date} />
      <div className="max-w-2xl space-y-4 text-ink/70 dark:text-stone">
        <p>{post.body}</p>
      </div>
      <Link to="/field-notes" className="inline-block text-sm font-semibold text-accent hover:underline">
        {t('common.backToFieldNotes')}
      </Link>
    </div>
  );
}
