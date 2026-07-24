import { motion } from 'motion/react';

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className={centered ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-12 max-w-3xl'}
    >
      <p
        className={
          light
            ? 'mb-3 text-xs font-black uppercase tracking-[.2em] text-blue-300'
            : 'section-label'
        }
      >
        {label}
      </p>
      <h2
        className={
          light
            ? 'text-balance text-3xl font-black tracking-[-.045em] text-white sm:text-4xl lg:text-5xl'
            : 'section-title'
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            light
              ? 'mt-4 max-w-2xl text-pretty leading-7 text-slate-300'
              : 'section-subtitle'
          }
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
