import { Quote } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { testimonials } from '../data/testimonials';
import { SectionHeading } from './SectionHeading';

export function Testimonials() {
  const { locale } = useApp();
  if (!testimonials.length) return null;
  return (
    <section className="section-space bg-white dark:bg-slate-950">
      <div className="container-shell">
        <SectionHeading label={locale === 'en' ? 'Testimonials' : 'نظرونه'} title={locale === 'en' ? 'Verified professional feedback' : 'تایید شوي مسلکي نظرونه'} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <article key={`${item.name}-${item.quote.en}`} className="glass-card p-6">
              <Quote className="text-blue-600 dark:text-blue-400" />
              <blockquote className="mt-5 leading-7 text-slate-600 dark:text-slate-300">“{item.quote[locale]}”</blockquote>
              <p className="mt-5 font-black text-slate-950 dark:text-white">{item.name}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.role[locale]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
