import { motion } from 'motion/react';
import { ArrowRight, BookOpenCheck, GraduationCap, ShieldCheck, UserCog, UsersRound } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SectionHeading } from './SectionHeading';

export function AcademicHub() {
  const { copy, locale } = useApp();
  const base = import.meta.env.VITE_ACADEMIC_HUB_URL || 'https://academic.saifwiyar.com';
  const actions = [
    { label: copy.academicHub.student, href: `${base}/login?role=student`, icon: GraduationCap },
    { label: copy.academicHub.teacher, href: `${base}/login?role=teacher`, icon: UsersRound },
    { label: copy.academicHub.admin, href: `${base}/login?role=admin`, icon: UserCog },
    { label: copy.academicHub.register, href: `${base}/register`, icon: ArrowRight },
  ];
  return <section id="academic-hub" className="section-space relative overflow-hidden bg-slate-950 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,.28),transparent_34%),radial-gradient(circle_at_90%_20%,rgba(124,58,237,.25),transparent_32%)]" aria-hidden="true" /><div className="container-shell relative"><SectionHeading label={copy.academicHub.label} title={copy.academicHub.title} subtitle={copy.academicHub.subtitle} light />
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-7 rounded-[2rem] border border-white/10 bg-white/[.06] p-6 shadow-2xl backdrop-blur-2xl lg:grid-cols-[1.05fr_.95fr] lg:p-10">
      <div><div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200"><BookOpenCheck size={17} />Academic Hub by Saif Wiyar</div><h3 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">{locale === 'en' ? 'One secure place for students, teachers, courses, batches, classes, and special online programs.' : locale === 'ps' ? 'د زده‌کوونکو، استادانو، کورسونو، بیچونو، ټولګیو او ځانګړو آنلاین پروګرامونو لپاره یو خوندي ځای.' : 'یک محیط امن برای دانشجویان، استادان، کورس‌ها، بچ‌ها، صنف‌ها و برنامه‌های ویژه آنلاین.'}</h3><p className="mt-5 leading-8 text-slate-300">{locale === 'en' ? 'Administrators control the complete academic structure, approvals, users, content, attendance, examinations, results, communication, reports, certificates, and system settings.' : locale === 'ps' ? 'اډمین د اکاډمیک جوړښت، تاییدونو، کاروونکو، موادو، حاضري، ازموینو، پایلو، اړیکو، راپورونو، سرتیفیکېټونو او سیسټم تنظیماتو بشپړ کنټرول لري.' : 'مدیر کنترل کامل ساختار اکادمیک، تأییدها، کاربران، محتوا، حاضری، امتحانات، نتایج، ارتباطات، گزارش‌ها، گواهینامه‌ها و تنظیمات سیستم را دارد.'}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{copy.academicHub.features.map((feature) => <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><ShieldCheck className="shrink-0 text-cyan-300" size={19} /><span className="text-sm font-semibold text-slate-200">{feature}</span></div>)}</div></div>
      <div className="grid content-center gap-4">{actions.map(({ label, href, icon: Icon }, index) => <motion.a key={label} href={href} initial={{ opacity: 0, x: locale === 'en' ? 18 : -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .1 + index * .06 }} className={`group flex items-center justify-between rounded-2xl border p-5 transition hover:-translate-y-1 ${index === 3 ? 'border-transparent bg-gradient-to-r from-blue-600 to-violet-600 shadow-xl shadow-blue-950/30' : 'border-white/10 bg-white/[.06] hover:border-blue-400/40 hover:bg-white/10'}`}><span className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-xl bg-white/10"><Icon /></span><strong>{label}</strong></span><ArrowRight className="transition group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" /></motion.a>)}</div>
    </motion.div>
  </div></section>;
}
