import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { faqItems } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function FAQ() {
  const { copy, locale } = useApp();
  const [open, setOpen] = useState(0);
  return <section className="section-space bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><SectionHeading label={copy.faq.label} title={copy.faq.title} />
    <div className="mx-auto max-w-4xl space-y-3">{faqItems.map((item, index) => <article key={item.q.en} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"><button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start font-black text-slate-950 dark:text-white" aria-expanded={open === index}><span>{item.q[locale]}</span><ChevronDown className={`shrink-0 transition-transform ${open === index ? 'rotate-180' : ''}`} /></button>{open === index && <div className="border-t border-slate-100 px-5 py-5 leading-7 text-slate-600 dark:border-white/10 dark:text-slate-300">{item.a[locale]}</div>}</article>)}</div>
  </div></section>;
}
