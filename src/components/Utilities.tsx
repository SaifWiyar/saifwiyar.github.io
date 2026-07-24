import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollUtilities() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 700);
    };
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <><div className="fixed inset-x-0 top-0 z-[70] h-0.5 bg-transparent"><div className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600" style={{ width: `${progress}%` }} /></div>{showTop && <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 end-5 z-40 grid size-12 place-items-center rounded-full bg-slate-950 text-white shadow-xl hover:bg-blue-600 dark:bg-white dark:text-slate-950" aria-label="Back to top"><ArrowUp /></button>}</>;
}

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 900); return () => window.clearTimeout(timer); }, []);
  if (!visible) return null;
  return <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950 text-white" role="status" aria-live="polite"><div className="text-center"><div className="mx-auto grid size-16 animate-pulse place-items-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-black">SW</div><p className="mt-4 text-sm font-bold tracking-[.18em] text-slate-400">SAIF WIYAR</p></div></div>;
}
