import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

export function TypingText({ words }: { words: string[] }) {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion || words.length === 0) return;
    const word = words[wordIndex] ?? '';
    const atEnd = length >= word.length;
    const atStart = length <= 0;
    const delay = atEnd && !deleting ? 1400 : deleting ? 42 : 72;
    const timer = window.setTimeout(() => {
      if (atEnd && !deleting) setDeleting(true);
      else if (atStart && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      } else setLength((current) => current + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [deleting, length, reduceMotion, wordIndex, words]);

  if (reduceMotion) return <span>{words[0]}</span>;
  return <span aria-live="polite">{(words[wordIndex] ?? '').slice(0, length)}<span className="typing-caret" aria-hidden="true">|</span></span>;
}
