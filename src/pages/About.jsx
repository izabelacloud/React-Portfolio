import { motion } from 'framer-motion';
import coverImage from '../assets/cover/cover-image.jpg';
import userImage from '../assets/ip2.jpg';

export default function About() {
  return (
    <section>
      <div className="relative -mx-6 mb-12 h-56 overflow-hidden sm:h-72 md:mx-0 md:rounded-3xl">
        <img src={coverImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent dark:from-surface-dark dark:via-surface-dark/30" />
      </div>

      <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-start">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={userImage}
          alt="Izabela Petrovicova"
          className="mx-auto h-48 w-48 rounded-full border-4 border-white object-cover shadow-lg sm:mx-0 sm:h-56 sm:w-56 dark:border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hi, I&rsquo;m{' '}
            <span className="gradient-text">Izabela Petrovicova</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-primary">
            Sr. Principal Business Architect @ Salesforce
          </p>
          <p className="mt-4 max-w-2xl text-ink/70 dark:text-slate-300">
            Highly motivated Salesforce specialist and Quote-to-Cash
            professional with a strong desire to learn, solve challenges and
            improve processes &mdash; with expertise across SaaS, Cloud and
            Analytics, Manufacturing, Telecommunications and Finance. Also an
            aspiring web developer building modern, accessible interfaces.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Salesforce', 'Quote-to-Cash', 'React', 'JavaScript', 'Cloud Architecture'].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary dark:bg-primary/20"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
