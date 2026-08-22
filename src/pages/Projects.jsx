import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section>
      <PageHeading
        title="Projects"
        subtitle="A selection of applications I've built and shipped."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
