import { useEffect, useState } from 'react';
import { Download, Languages, Menu, Monitor, Moon, Sun, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import type { Locale, ThemeMode } from '../types';

export function Header() {
  const { copy, locale, setLocale, theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    ['home', copy.nav.home], ['about', copy.nav.about], ['timeline', copy.nav.education], ['skills', copy.nav.skills],
    ['projects', copy.nav.projects], ['research', copy.nav.research], ['teaching', copy.nav.teaching], ['ventures', copy.nav.ventures],
    ['academic-hub', copy.nav.academicHub], ['contact', copy.nav.contact],
  ];
  const themes: { value: ThemeMode; icon: typeof Sun; label: string }[] = [
    { value: 'light', icon: Sun, label: copy.theme.light }, { value: 'dark', icon: Moon, label: copy.theme.dark }, { value: 'system', icon: Monitor, label: copy.theme.system },
  ];
  const localeLabels: Record<Locale, string> = { en: 'English', ps: 'پښتو', fa: 'دری' };
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/88' : 'bg-transparent'}`}>
    <div className="container-shell flex h-20 items-center justify-between gap-4">
      <a href="#home" className="group flex items-center gap-3" aria-label="Saif Wiyar home"><span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 font-black text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">SW</span><span className="hidden sm:block"><strong className="block text-sm tracking-tight text-slate-950 dark:text-white">Saif Wiyar</strong><small className="text-xs text-slate-500 dark:text-slate-400">Data Scientist · AI Engineer · Full Stack Developer</small></span></a>
      <nav className="hidden items-center gap-4 2xl:flex" aria-label="Primary navigation">{links.map(([id,label]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}</nav>
      <div className="flex items-center gap-2">
        <div className="hidden rounded-xl border border-slate-200 bg-white/80 p-1 md:flex dark:border-white/10 dark:bg-white/5" aria-label="Theme selection">{themes.map(({value,icon:Icon,label}) => <button key={value} type="button" onClick={() => setTheme(value)} className={`icon-toggle ${theme === value ? 'active' : ''}`} aria-label={label} title={label}><Icon size={16}/></button>)}</div>
        <div className="relative group"><button type="button" className="control-button" aria-label={copy.language}><Languages size={18}/><span className="hidden sm:inline">{localeLabels[locale]}</span></button><div className="invisible absolute end-0 top-full z-50 mt-2 min-w-32 rounded-xl border border-slate-200 bg-white p-1 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 dark:border-white/10 dark:bg-slate-900">{(['en','ps','fa'] as Locale[]).map(code => <button key={code} type="button" onClick={() => setLocale(code)} className={`block w-full rounded-lg px-3 py-2 text-start text-sm font-bold ${locale === code ? 'bg-blue-600 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'}`}>{localeLabels[code]}</button>)}</div></div>
        <a href="/Saif-Wiyar-CV.pdf" download className="hidden rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-600 lg:inline-flex dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"><Download size={16} className="me-2"/>{copy.actions.cv}</a>
        <button type="button" onClick={() => setOpen(v => !v)} className="control-button 2xl:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </div>
    </div>
    {open && <div id="mobile-navigation" className="border-t border-slate-200 bg-white/95 px-5 py-5 backdrop-blur-xl 2xl:hidden dark:border-white/10 dark:bg-slate-950/95"><nav className="mx-auto grid max-w-6xl gap-1" aria-label="Mobile navigation">{links.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5">{label}</a>)}</nav></div>}
  </header>;
}
