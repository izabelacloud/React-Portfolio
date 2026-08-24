import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CompanyLogoBadge from './CompanyLogoBadge';

export default function ExperienceTimeline({ items }) {
  const { t } = useTranslation();

  return (
    <div className="relative space-y-10">
      <div className="absolute -left-4 top-0 h-full w-px bg-stone/40 dark:bg-charcoal" aria-hidden />
      {items.map((item, index) => {
        const responsibilities = t(`experience.items.${item.slug}.responsibilities`, { returnObjects: true, defaultValue: [] });
        const achievements = t(`experience.items.${item.slug}.achievements`, { returnObjects: true, defaultValue: [] });

        return (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-4 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.period}</p>
            <h3 className="mt-1 font-display text-xl font-medium">{t(`experience.items.${item.slug}.role`)}</h3>
            <div className="mt-1 flex items-center gap-2.5">
              <CompanyLogoBadge company={item.company} />
              <p className="text-sm font-semibold text-accent">{item.company}</p>
            </div>
            <p className="mt-3 text-sm text-ink/70 dark:text-stone">{t(`experience.items.${item.slug}.scope`)}</p>
            {responsibilities.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink/70 dark:text-stone">
                {responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
            {achievements.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm font-medium text-ink dark:text-warm">
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            )}
            {item.technologies?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-stone/30 px-3 py-1 text-xs font-semibold text-ink/80 dark:bg-white/10 dark:text-stone"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
