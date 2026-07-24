import { GraduationCap, Presentation, School, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { teachingTopics } from '../data/content';
import { t } from '../lib/i18n';
import { SectionHeading } from './SectionHeading';

export function Teaching() {
  const { copy, locale } = useApp();
  const stats = [
    {
      icon: School,
      value: '5+',
      label: t(locale, 'Years teaching', 'د تدریس کلونه', 'سال تدریس'),
    },
    {
      icon: Presentation,
      value: '14+',
      label: t(locale, 'Technical subjects', 'تخنیکي مضمونونه', 'موضوعات فنی'),
    },
    {
      icon: Users,
      value: 'University + Academy',
      label: t(locale, 'Teaching environments', 'د تدریس چاپېریالونه', 'محیط‌های تدریس'),
    },
    {
      icon: GraduationCap,
      value: 'Theory + Practice',
      label: t(locale, 'Learning approach', 'د زده‌کړې تګلاره', 'روش یادگیری'),
    },
  ];

  return (
    <section id="teaching" className="section-space bg-slate-50 dark:bg-slate-900/40">
      <div className="container-shell">
        <SectionHeading
          label={copy.teaching.label}
          title={copy.teaching.title}
          subtitle={copy.teaching.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <article key={label} className="glass-card p-6">
              <Icon className="text-blue-600 dark:text-blue-400" />
              <strong className="mt-5 block text-xl font-black text-slate-950 dark:text-white">
                {value}
              </strong>
              <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                {label}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h3 className="text-xl font-black text-slate-950 dark:text-white">
            {t(
              locale,
              'Courses and technologies taught',
              'تدریس شوي کورسونه او ټکنالوژۍ',
              'کورس‌ها و فناوری‌های تدریس‌شده',
            )}
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {teachingTopics.map((topic) => (
              <span className="tech-chip" key={topic.en}>
                {topic[locale]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
