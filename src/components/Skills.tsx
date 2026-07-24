import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { skillGroups } from '../data/content';
import { t } from '../lib/i18n';
import { SectionHeading } from './SectionHeading';
export function Skills() {
  const { copy, locale } = useApp();
  return <section id="skills" className="section-space bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><SectionHeading label={copy.skills.label} title={copy.skills.title} subtitle={copy.skills.subtitle}/><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{skillGroups.map((group,index)=><motion.article key={group.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}} className="glass-card p-6"><h3 className="text-xl font-black text-slate-950 dark:text-white">{group.label[locale]}</h3><div className="mt-5 space-y-4">{group.skills.map(skill=><div key={skill.name}><div className="mb-1.5 flex items-center justify-between text-sm font-bold"><span>{skill.name}</span><span className="text-slate-400">{skill.level}%</span></div><div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10"><motion.div initial={{width:0}} whileInView={{width:`${skill.level}%`}} viewport={{once:true}} transition={{duration:.8}} className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600"/></div></div>)}</div></motion.article>)}</div><p className="mt-6 text-xs text-slate-500 dark:text-slate-400">{t(locale,'Proficiency indicators are concise self-assessments based on education, teaching, and project experience.','د مهارت کچې د زده‌کړې، تدریس او پروژو پر تجربه ولاړه لنډه شخصي ارزونه ده.','شاخص‌های مهارت، ارزیابی فشرده بر اساس تحصیلات، تدریس و تجربه پروژه هستند.')}</p></div></section>;
}
