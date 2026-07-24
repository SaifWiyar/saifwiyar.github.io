import { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { timeline } from '../data/content';
import type { TimelineItem } from '../types';
import { SectionHeading } from './SectionHeading';

export function Timeline() {
  const { copy, locale } = useApp();
  const [filter, setFilter] = useState<'all' | TimelineItem['type']>('all');
  const filters: Array<'all' | TimelineItem['type']> = ['all', 'education', 'experience', 'teaching', 'research'];
  const items = filter === 'all' ? timeline : timeline.filter((item) => item.type === filter);
  return <section id="timeline" className="section-space bg-white dark:bg-slate-950"><div className="container-shell"><SectionHeading label={copy.timeline.label} title={copy.timeline.title} />
    <div className="mb-8 flex flex-wrap gap-2">{filters.map((item) => <button type="button" key={item} onClick={() => setFilter(item)} className={`filter-button ${filter === item ? 'active' : ''}`}>{copy.timeline.filters[item]}</button>)}</div>
    <div className="relative ms-3 border-s border-slate-200 ps-7 dark:border-white/10">{items.map((item, index) => <motion.article key={`${item.year}-${item.title.en}`} initial={{ opacity: 0, x: locale === 'en' ? -18 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="relative mb-9 last:mb-0"><span className="absolute -start-[2.14rem] top-1 size-4 rounded-full border-4 border-white bg-blue-600 shadow dark:border-slate-950" /><p className="text-xs font-black uppercase tracking-[.16em] text-blue-600 dark:text-blue-400">{item.year} · {copy.timeline.filters[item.type]}</p><h3 className="mt-2 text-xl font-black text-slate-950 dark:text-white">{item.title[locale]}</h3><p className="mt-1 font-bold text-slate-600 dark:text-slate-300">{item.organization[locale]}</p><p className="mt-2 max-w-3xl leading-7 text-slate-500 dark:text-slate-400">{item.description[locale]}</p></motion.article>)}</div>
  </div></section>;
}
