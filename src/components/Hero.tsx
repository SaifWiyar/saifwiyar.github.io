import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { BookOpenCheck, Download, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { achievements, roles } from '../data/content';
import { TypingText } from './TypingText';
import { SmartImage } from './SmartImage';

export function Hero() {
  const { copy, locale } = useApp();
  return <section id="home" className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(124,58,237,.16),transparent_26%)] pt-28 dark:bg-slate-950">
    <div className="particle-field" aria-hidden="true">{Array.from({length:20}).map((_,i)=><span key={i} style={{'--i':i} as CSSProperties}/>)}</div>
    <div className="container-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_.85fr]">
      <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-300"><Sparkles size={16}/>{copy.hero.eyebrow}</div>
        <p className="mb-2 text-lg font-semibold text-slate-600 dark:text-slate-300">{copy.hero.greeting}</p>
        <h1 className="text-balance text-5xl font-black tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-8xl dark:text-white">Saif Wiyar</h1>
        <div className="mt-4 min-h-14 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl lg:text-4xl"><TypingText words={roles[locale]}/></div>
        <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">{copy.hero.summary}</p>
        <p className="mt-4 max-w-3xl text-sm font-bold leading-6 text-blue-700 dark:text-blue-300">{copy.hero.identity}</p>
        <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="primary-button">{copy.actions.projects}</a><a href="#contact" className="secondary-button"><Mail size={18}/>{copy.actions.contact}</a><a href="/Saif-Wiyar-CV.pdf" download className="secondary-button"><Download size={18}/>{copy.actions.cv}</a><a href="#academic-hub" className="secondary-button"><BookOpenCheck size={18}/>{copy.actions.academicHub}</a></div>
        <div className="mt-7 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400"><span className="inline-flex items-center gap-2"><MapPin size={16}/>Afghanistan 🇦🇫</span><a className="hover:text-blue-600" href="https://github.com/SaifWiyar" target="_blank" rel="noreferrer"><Github size={17}/><span className="sr-only">GitHub</span></a><a className="hover:text-blue-600" href="https://af.linkedin.com/in/saifwiyar" target="_blank" rel="noreferrer"><Linkedin size={17}/><span className="sr-only">LinkedIn</span></a></div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{delay:.15,duration:.75}} className="relative mx-auto w-full max-w-md"><div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl"/><div className="glass-card relative overflow-hidden p-4"><SmartImage src="/assets/profile.webp" alt="Saif Wiyar" className="aspect-[4/5] w-full rounded-[2rem] object-cover"/><div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/30 bg-slate-950/70 p-4 text-white backdrop-blur-xl"><strong className="block">Founder of Saif Tech Studio & Saif Online Academy</strong><span className="mt-1 block text-xs text-slate-300">{copy.hero.availability}</span></div></div></motion.div>
    </div>
    <div className="container-shell relative z-10 -mt-4 grid gap-3 pb-12 sm:grid-cols-2 lg:grid-cols-4">{achievements.map(item => <div key={item.label.en} className="glass-card p-5"><strong className="text-2xl font-black text-slate-950 dark:text-white">{item.value}</strong><span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">{item.label[locale]}</span></div>)}</div>
  </section>;
}
