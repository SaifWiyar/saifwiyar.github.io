import { useState, type ImgHTMLAttributes } from 'react';

export function SmartImage({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className="relative block overflow-hidden bg-slate-200 dark:bg-slate-800">
      {!loaded && <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800" aria-hidden="true" />}
      <img {...props} onLoad={(event) => { setLoaded(true); props.onLoad?.(event); }} className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
}
