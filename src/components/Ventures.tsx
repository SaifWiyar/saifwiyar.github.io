import { motion } from 'motion/react';
import { BrainCircuit, Code2, GraduationCap, LineChart, MessageSquareText, Rocket, Users, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { t } from '../lib/i18n';
import { SectionHeading } from './SectionHeading';

export function Ventures() {
  const { copy, locale } = useApp();
  const studio = [
    [Code2, t(locale,'Full Stack Web Development','فول‌سټېک وېب پراختیا','توسعه فول‌استک وب')],
    [BrainCircuit, t(locale,'AI Solutions','د AI حلونه','راه‌حل‌های هوش مصنوعی')],
    [LineChart, t(locale,'Data Science Services','د ډېټا ساینس خدمتونه','خدمات علم داده')],
    [Wrench, t(locale,'Software Solutions','سافټویر حلونه','راه‌حل‌های نرم‌افزاری')],
    [MessageSquareText, t(locale,'Technical Consulting','تخنیکي مشوره','مشاوره فنی')],
    [Rocket, t(locale,'Digital Product Development','ډیجیټل محصول جوړونه','توسعه محصول دیجیتال')],
  ] as const;
  const academy = [
    t(locale,'Founded in 2020','په ۲۰۲۰ کې تاسیس شوی','تأسیس در سال ۲۰۲۰'),
    t(locale,'Practical technology education','عملي ټکنالوژي زده‌کړه','آموزش عملی فناوری'),
    t(locale,'Programming, AI, and data learning','پروګرامینګ، AI او ډېټا زده‌کړه','یادگیری برنامه‌نویسی، هوش مصنوعی و داده'),
    t(locale,'Student mentoring and structured training','د زده‌کوونکو لارښوونه او منظم روزنه','راهنمایی دانشجویان و آموزش ساختاریافته'),
  ];
  return <section id="ventures" className="section-space bg-slate-50 dark:bg-slate-900/40"><div className="container-shell"><SectionHeading label={copy.ventures.label} title={copy.ventures.title} subtitle={copy.ventures.subtitle}/>
    <div className="grid gap-7 lg:grid-cols-2">
      <motion.article initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="glass-card p-7 lg:p-9"><div className="flex items-center gap-4"><span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white"><Code2/></span><div><p className="text-xs font-black uppercase tracking-[.16em] text-blue-600 dark:text-blue-400">{t(locale,'Founder','بنسټګر','بنیان‌گذار')}</p><h3 className="text-2xl font-black text-slate-950 dark:text-white">Saif Tech Studio</h3></div></div><p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{t(locale,'A technology studio delivering reliable web platforms, AI solutions, data products, business applications, and technical consulting.','یوه ټکنالوژي اداره چې باوري وېب پلاتفورمونه، AI حلونه، ډېټا محصولات، سوداګریز اپلېکېشنونه او تخنیکي مشوره وړاندې کوي.','یک استودیوی فناوری برای ارائه پلتفرم‌های وب قابل اعتماد، راه‌حل‌های هوش مصنوعی، محصولات داده‌ای، اپلیکیشن‌های تجاری و مشاوره فنی.')}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{studio.map(([Icon,label])=><div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 dark:border-white/10"><Icon size={18} className="text-blue-600 dark:text-blue-400"/><span className="text-sm font-bold">{label}</span></div>)}</div></motion.article>
      <motion.article initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1}} className="glass-card p-7 lg:p-9"><div className="flex items-center gap-4"><span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white"><GraduationCap/></span><div><p className="text-xs font-black uppercase tracking-[.16em] text-violet-600 dark:text-violet-400">{t(locale,'Founder and Instructor','بنسټګر او ښوونکی','بنیان‌گذار و مدرس')}</p><h3 className="text-2xl font-black text-slate-950 dark:text-white">Saif Online Academy</h3></div></div><p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">{t(locale,'An education initiative focused on practical digital skills, career-oriented learning, structured programs, and student mentoring.','یوه زده‌کړیزه اداره چې پر عملي ډیجیټل مهارتونو، مسلکي زده‌کړه، منظم پروګرامونو او د زده‌کوونکو لارښوونه تمرکز کوي.','یک ابتکار آموزشی متمرکز بر مهارت‌های عملی دیجیتال، یادگیری حرفه‌محور، برنامه‌های ساختاریافته و راهنمایی دانشجویان.')}</p><ul className="mt-6 space-y-3">{academy.map(item=><li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 dark:border-white/10"><Users size={18} className="text-violet-600 dark:text-violet-400"/><span className="text-sm font-bold">{item}</span></li>)}</ul><a href="#academic-hub" className="primary-button mt-6"><GraduationCap size={18}/>{copy.actions.academicHub}</a></motion.article>
    </div>
  </div></section>;
}
