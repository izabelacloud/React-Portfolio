import { motion } from 'framer-motion';
import PageHeading from '../components/PageHeading';
import skillGroups from '../data/resume';

export default function Resume() {
  return (
    <section>
      <PageHeading title="Resume" subtitle="Full stack web development, focused on front-end." />

      <a
        href="https://drive.google.com/file/d/1LwHVNKQVaa3L9yNnKfuTprYYG6AvWDyY/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-primary-dark"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16" />
        </svg>
        Download my Resume
      </a>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl border border-black/5 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="font-bold text-primary">{group.title}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-ink/70 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-quinary" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
