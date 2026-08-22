import { motion } from 'framer-motion';
import coverImage from '../assets/cover/cover-image.jpg';
import userImage from '../assets/ip2.jpg';

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
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Hi, I&rsquo;m{' '}
            <span className="gradient-text">Izabela Petrovicova</span>
          </h1>
          <p className="mt-2 text-lg font-semibold text-primary">
            Executive Technology Leader. Enterprise Architect. Builder.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-10 max-w-3xl space-y-4 text-ink/70 dark:text-slate-300"
      >
        <p>
          For more than a decade, I have been helping global organisations
          solve complex business challenges through technology. My career has
          been built at the intersection of enterprise architecture,
          strategic consulting, and hands-on engineering, transforming
          ambitious business objectives into scalable, practical solutions
          that deliver measurable value.
        </p>
        <p>
          As a <strong>Technical Architecture Director and Senior Salesforce
          Enterprise Architect</strong>, I partner with executives, business
          leaders, and delivery teams to design enterprise-scale digital
          transformation programs. My expertise spans Salesforce
          architecture, Quote-to-Cash, Revenue Lifecycle Management, CRM
          strategy, system integration, cloud platforms, and enterprise
          solution design across industries including Financial Services,
          Telecommunications, Manufacturing, SaaS, Analytics, and
          Professional Services.
        </p>
        <p>
          I believe great architecture is never just about technology.
          It&rsquo;s about understanding people, aligning stakeholders,
          simplifying complexity, and creating systems that remain adaptable
          for years to come. Whether leading multi-million-dollar
          transformation initiatives, advising C-level executives, or
          mentoring architecture teams, I focus on balancing strategic vision
          with practical execution.
        </p>
        <p>
          While enterprise architecture has been the foundation of my career,
          I have never stopped building. Alongside leading large-scale
          transformation programs, I actively develop modern web applications
          using React, JavaScript, TypeScript, and contemporary frontend
          technologies. This combination of executive architecture experience
          and hands-on software development allows me to bridge strategy with
          implementation, connecting boardroom decisions with engineering
          reality.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl"
      >
        <h2 className="text-xl font-bold">What I Bring</h2>
        <div className="mt-4 flex flex-wrap items-start gap-2">
          {[
            'Enterprise & Solution Architecture',
            'Salesforce Technical Leadership',
            'Digital Transformation Strategy',
            'Quote-to-Cash & Revenue Architecture',
            'Cloud & Integration Architecture',
            'Executive Stakeholder Management',
            'Client Advisory & Trusted Partnerships',
            'Technical Leadership & People Development',
            'Cross-functional Team Leadership',
            'Modern Web Development',
            'Product & Platform Strategy',
            'Scalable Solution Design',
          ].map((tag) => (
            <span
              key={tag}
              className="flex-none rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary dark:bg-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl border-t border-black/5 pt-10 dark:border-white/10"
      >
        <h2 className="text-xl font-bold">Beyond Technology</h2>
        <div className="mt-4 space-y-4 text-ink/70 dark:text-slate-300">
          <p>
            The way I lead has been shaped just as much outside the office as
            inside it.
          </p>
          <p>
            As a <strong>PADI Divemaster</strong>, I&rsquo;ve learned that
            preparation, calm decision-making, and trust are essential when
            leading people in challenging environments.
          </p>
          <p>
            As a <strong>mountaineer</strong>, I&rsquo;ve experienced that
            meaningful achievements are built one deliberate step at a time.
            Success comes from resilience, planning, and adapting when
            conditions inevitably change.
          </p>
          <p>
            As a <strong>marathon runner</strong>, I&rsquo;ve learned that
            consistency outperforms intensity. Long-term results come from
            discipline, persistence, and continuous improvement rather than
            quick wins.
          </p>
          <p>
            Having <strong>lived and worked across three continents</strong>,
            I&rsquo;ve developed a global perspective that allows me to
            collaborate effectively with diverse teams, understand different
            business cultures, and build strong relationships across
            organisations. Working internationally has strengthened my
            adaptability, curiosity, and ability to communicate with people
            from different backgrounds while keeping everyone aligned around
            a common goal.
          </p>
          <p>
            These experiences shape how I approach leadership: staying calm
            under pressure, thinking strategically, embracing continuous
            learning, and helping teams perform at their best.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
        className="mx-auto mt-12 max-w-3xl space-y-4 text-ink/70 dark:text-slate-300"
      >
        <p>
          Technology evolves constantly. Strong leadership, thoughtful
          architecture, and meaningful relationships endure.
        </p>
        <p>
          I enjoy working with organisations tackling complex transformation
          challenges, building high-performing teams, and creating technology
          platforms that are not only technically robust, but genuinely
          improve how businesses operate.
        </p>
        <p className="font-semibold text-ink dark:text-slate-100">
          Because the best solutions don&rsquo;t simply solve today&rsquo;s
          problems. They create opportunities for tomorrow.
        </p>
      </motion.div>
    </section>
  );
}
