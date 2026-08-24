import { useTranslation } from 'react-i18next';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section>
      <PageHeading
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
