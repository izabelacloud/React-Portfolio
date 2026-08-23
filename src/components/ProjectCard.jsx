import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/5"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold">{project.name}</h3>
        <p className="mt-1 text-sm text-ink/60 dark:text-slate-400">{project.description}</p>
        <div className="mt-4 flex gap-3 text-sm font-semibold">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary/10 px-3 py-1.5 text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Code
          </a>
          {project.deployedApp && (
            <a
              href={project.deployedApp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-tertiary/30 px-3 py-1.5 text-ink/80 transition-colors hover:bg-tertiary hover:text-ink dark:text-slate-200"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
