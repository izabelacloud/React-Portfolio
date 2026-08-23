import { useParams, Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ImageGallery from '../components/ImageGallery';
import caseStudies from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="py-10">
        <p>Case study not found.</p>
        <Link to="/work" className="text-accent hover:underline">Back to Work</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 py-10">
      <SectionHeading eyebrow={caseStudy.industry} title={caseStudy.title} subtitle={caseStudy.client} />

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-medium">Challenge</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.challenge}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">Complexity</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.complexity}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">Solution</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.solution}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">Role</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.role}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">Outcome</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.outcome}</p>
        </div>
        <div>
          <h2 className="font-display text-xl font-medium">Lessons</h2>
          <p className="mt-2 text-ink/70 dark:text-stone">{caseStudy.lessons}</p>
        </div>
      </div>

      <ImageGallery images={caseStudy.images} />

      <Link to="/work" className="inline-block text-sm font-semibold text-accent hover:underline">
        ← Back to Work
      </Link>
    </div>
  );
}
