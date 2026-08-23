import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import coverImage from '../assets/cover/cover-image.jpg';
import userImage from '../assets/ip2.jpg';
import StatDisplay from '../components/StatDisplay';
import stats, { tagline } from '../data/stats';

export default function About() {
  return (
    <section>
      <div className="relative -mx-6 h-48 overflow-hidden sm:h-64 md:mx-0 md:rounded-3xl">
        <img src={coverImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent dark:from-surface-dark dark:via-surface-dark/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={userImage}
          alt="Izabela Petrovicova"
          className="mt-8 h-32 w-32 flex-none rounded-full border-4 border-white object-cover shadow-lg sm:h-40 sm:w-40 dark:border-white/10"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5"
        >
          <h1 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Hi, I&rsquo;m <span className="gradient-text">Izabela Petrovicova</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-accent">
            Architect by profession. Adventurer by instinct.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-10 max-w-3xl space-y-4 text-ink/70 dark:text-stone"
      >
        <p>
          For more than a decade, I have been helping global organisations solve complex
          business challenges through technology. My career has been built at the
          intersection of enterprise architecture, strategic consulting, and hands-on
          engineering, transforming ambitious business objectives into scalable, practical
          solutions that deliver measurable value.
        </p>
        <p>
          As a <strong>Technical Architecture Director and Senior Salesforce Enterprise
          Architect</strong>, I partner with executives, business leaders, and delivery
          teams to design enterprise-scale digital transformation programs. My expertise
          spans Salesforce architecture, Quote-to-Cash, Revenue Lifecycle Management, CRM
          strategy, system integration, cloud platforms, and enterprise solution design
          across industries including Financial Services, Telecommunications,
          Manufacturing, SaaS, Analytics, and Professional Services.
        </p>
        <p>
          I believe great architecture is never just about technology. It&rsquo;s about
          understanding people, aligning stakeholders, simplifying complexity, and creating
          systems that remain adaptable for years to come.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl border-t border-stone/40 pt-10 dark:border-charcoal"
      >
        <h2 className="font-display text-xl font-medium">{tagline}</h2>
        <div className="mt-4 space-y-4 text-ink/70 dark:text-stone">
          <p>The way I lead has been shaped just as much outside the office as inside it.</p>
          <p>
            As a <strong>PADI Divemaster</strong>, I&rsquo;ve learned that preparation, calm
            decision-making, and trust are essential when leading people in challenging
            environments.
          </p>
          <p>
            As a <strong>mountaineer</strong>, I&rsquo;ve experienced that meaningful
            achievements are built one deliberate step at a time. Success comes from
            resilience, planning, and adapting when conditions inevitably change.
          </p>
          <p>
            As a <strong>marathon runner</strong>, I&rsquo;ve learned that consistency
            outperforms intensity. Long-term results come from discipline, persistence, and
            continuous improvement rather than quick wins.
          </p>
          <p>
            Having <strong>lived and worked across three continents</strong>, I&rsquo;ve
            developed a global perspective that allows me to collaborate effectively with
            diverse teams, understand different business cultures, and build strong
            relationships across organisations.
          </p>
        </div>

        <div className="mt-8">
          <StatDisplay stats={stats} />
        </div>

        <p className="mt-8">
          <Link to="/adventures" className="text-sm font-semibold text-accent hover:underline">
            See the adventures →
          </Link>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl space-y-4 text-ink/70 dark:text-stone"
      >
        <p className="font-semibold text-ink dark:text-warm">
          Because the best solutions don&rsquo;t simply solve today&rsquo;s problems. They
          create opportunities for tomorrow.
        </p>
      </motion.div>
    </section>
  );
}
