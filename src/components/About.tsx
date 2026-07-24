import { motion } from 'motion/react';
import { BrainCircuit, GraduationCap, Landmark, Rocket } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { t } from '../lib/i18n';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { copy, locale } = useApp();
  const paragraphs = [
    t(locale,
      'I am Saif Wiyar, an Afghanistan-based Data Scientist, AI Engineer, Full Stack Developer, Machine Learning Engineer, Deep Learning and NLP Researcher, University Lecturer, and technology founder. My work connects intelligent systems, reliable software, research, and education.',
      'زه سیف ویار یم؛ په افغانستان کې مېشت ډېټا ساینس پوه، د AI انجنیر، فول‌سټېک پراختیاکوونکی، د ماشین زده‌کړې انجنیر، د ژورې زده‌کړې او NLP څېړونکی، د پوهنتون استاد او د ټکنالوژۍ بنسټګر. زما کار هوښیار سیستمونه، باوري سافټویر، څېړنه او زده‌کړه سره نښلوي.',
      'من سیف ویار، دانشمند داده، مهندس هوش مصنوعی، توسعه‌دهنده فول‌استک، مهندس یادگیری ماشین، پژوهشگر یادگیری عمیق و NLP، استاد دانشگاه و بنیان‌گذار فناوری در افغانستان هستم. کار من سیستم‌های هوشمند، نرم‌افزار قابل اعتماد، پژوهش و آموزش را پیوند می‌دهد.'),
    t(locale,
      'I hold a BS in Computer Science and an MS in Data Science. My professional focus includes AI engineering, machine learning, deep learning, natural language processing, data analytics, full-stack development, databases, and cloud-ready application architecture.',
      'زه د کمپیوټر ساینس لیسانس او د ډېټا ساینس ماسټري لرم. زما مسلکي تمرکز د AI انجینري، ماشین زده‌کړه، ژوره زده‌کړه، طبیعي ژبې پروسس، ډېټا تحلیل، فول‌سټېک پراختیا، ډیټابېسونه او کلاوډ ته چمتو اپلېکېشن جوړښت دی.',
      'من دارای لیسانس علوم کامپیوتر و ماستری علم داده هستم. تمرکز حرفه‌ای من شامل مهندسی هوش مصنوعی، یادگیری ماشین، یادگیری عمیق، پردازش زبان طبیعی، تحلیل داده، توسعه فول‌استک، پایگاه داده و معماری اپلیکیشن آماده ابر است.'),
    t(locale,
      'With more than five years of teaching experience, I teach and mentor university and academy students in programming, web development, databases, data analytics, AI, ML, and NLP. I also founded Saif Tech Studio and Saif Online Academy to turn knowledge into useful products and practical learning opportunities.',
      'له پنځو کلونو څخه د ډېرې تدریسي تجربې سره، زه د پوهنتون او اکاډمۍ زده‌کوونکو ته پروګرامینګ، وېب پراختیا، ډیټابېسونه، ډېټا تحلیل، AI، ML او NLP تدریس او لارښوونه کوم. ما Saif Tech Studio او Saif Online Academy هم تاسیس کړي څو پوهه په ګټورو محصولاتو او عملي زده‌کړیزو فرصتونو بدله کړم.',
      'با بیش از پنج سال تجربه تدریس، به دانشجویان دانشگاه و اکادمی در برنامه‌نویسی، توسعه وب، پایگاه داده، تحلیل داده، هوش مصنوعی، یادگیری ماشین و NLP آموزش و راهنمایی می‌دهم. همچنین Saif Tech Studio و Saif Online Academy را برای تبدیل دانش به محصولات مفید و فرصت‌های یادگیری عملی بنیان گذاشته‌ام.'),
  ];
  const cards = [
    { icon: GraduationCap, title: copy.about.education, value: t(locale,'MS Data Science · BS Computer Science','د ډېټا ساینس ماسټري · د کمپیوټر ساینس لیسانس','ماستری علم داده · لیسانس علوم کامپیوتر') },
    { icon: BrainCircuit, title: copy.about.experience, value: t(locale,'5+ years across AI, data, development, and teaching','په AI، ډېټا، پراختیا او تدریس کې ۵+ کاله','بیش از ۵ سال در هوش مصنوعی، داده، توسعه و تدریس') },
    { icon: Landmark, title: t(locale,'Academic role','اکاډمیک رول','نقش اکادمیک'), value: t(locale,'University Lecturer in Computer Science','د کمپیوټر ساینس د پوهنتون استاد','استاد دانشگاه در علوم کامپیوتر') },
    { icon: Rocket, title: t(locale,'Leadership','مشري','رهبری'), value: t(locale,'Founder of Saif Tech Studio & Saif Online Academy','د Saif Tech Studio او Saif Online Academy بنسټګر','بنیان‌گذار Saif Tech Studio و Saif Online Academy') },
  ];
  return <section id="about" className="section-space"><div className="container-shell"><SectionHeading label={copy.about.label} title={copy.about.title}/><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><motion.div initial={{opacity:0,x:locale==='en'?-30:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{paragraphs.map(p=><p key={p}>{p}</p>)}<div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-base font-semibold text-blue-900 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">{t(locale,'Professional identity: Saif Wiyar · Saifullah Wiyar · SaifWiyar · سیف ویار','مسلکي پېژندنه: Saif Wiyar · Saifullah Wiyar · SaifWiyar · سیف ویار','هویت حرفه‌ای: Saif Wiyar · Saifullah Wiyar · SaifWiyar · سیف ویار')}</div></motion.div><div className="grid gap-4 sm:grid-cols-2">{cards.map(({icon:Icon,title,value},index)=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.08}} className="glass-card p-6"><span className="mb-5 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white"><Icon size={24}/></span><h3 className="font-black text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{value}</p></motion.article>)}</div></div></div></section>;
}
