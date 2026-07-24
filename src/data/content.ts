import type { LocalizedText, Project, SkillGroup, TimelineItem } from '../types';

const text = (en: string, ps: string, fa: string): LocalizedText => ({ en, ps, fa });

export const approvedIdentity = text(
  'Data Scientist | AI Engineer | Full Stack Developer | Machine Learning Engineer | Deep Learning & NLP Researcher | University Lecturer | Founder of Saif Tech Studio & Saif Online Academy',
  'ډېټا ساینس پوه | د AI انجنیر | فول‌سټېک پراختیاکوونکی | د ماشین زده‌کړې انجنیر | د ژورې زده‌کړې او NLP څېړونکی | د پوهنتون استاد | د Saif Tech Studio او Saif Online Academy بنسټګر',
  'دانشمند داده | مهندس هوش مصنوعی | توسعه‌دهنده فول‌استک | مهندس یادگیری ماشین | پژوهشگر یادگیری عمیق و NLP | استاد دانشگاه | بنیان‌گذار Saif Tech Studio و Saif Online Academy',
);

export const roles = {
  en: ['Data Scientist', 'AI Engineer', 'Full Stack Developer', 'Machine Learning Engineer', 'Deep Learning & NLP Researcher', 'University Lecturer', 'Founder of Saif Tech Studio & Saif Online Academy'],
  ps: ['ډېټا ساینس پوه', 'د مصنوعي ځیرکتیا انجنیر', 'فول‌سټېک پراختیاکوونکی', 'د ماشین زده‌کړې انجنیر', 'د ژورې زده‌کړې او NLP څېړونکی', 'د پوهنتون استاد', 'د Saif Tech Studio او Saif Online Academy بنسټګر'],
  fa: ['دانشمند داده', 'مهندس هوش مصنوعی', 'توسعه‌دهنده فول‌استک', 'مهندس یادگیری ماشین', 'پژوهشگر یادگیری عمیق و NLP', 'استاد دانشگاه', 'بنیان‌گذار Saif Tech Studio و Saif Online Academy'],
};

export const skillGroups: SkillGroup[] = [
  { id: 'programming', label: text('Programming', 'پروګرامینګ', 'برنامه‌نویسی'), skills: [
    { name: 'Python', level: 95 }, { name: 'JavaScript', level: 91 }, { name: 'TypeScript', level: 88 },
  ]},
  { id: 'web', label: text('Full Stack Web Development', 'فول‌سټېک وېب پراختیا', 'توسعه فول‌استک وب'), skills: [
    { name: 'React', level: 90 }, { name: 'Next.js', level: 84 }, { name: 'Django', level: 94 }, { name: 'Node.js', level: 84 }, { name: 'HTML & CSS', level: 96 }, { name: 'Tailwind CSS', level: 92 },
  ]},
  { id: 'data', label: text('Data Science', 'ډېټا ساینس', 'علم داده'), skills: [
    { name: 'Pandas', level: 94 }, { name: 'NumPy', level: 92 }, { name: 'Scikit-learn', level: 92 }, { name: 'Data Analytics', level: 94 }, { name: 'Data Visualization', level: 90 },
  ]},
  { id: 'ai', label: text('Artificial Intelligence', 'مصنوعي ځیرکتیا', 'هوش مصنوعی'), skills: [
    { name: 'Machine Learning', level: 93 }, { name: 'Deep Learning', level: 88 }, { name: 'Natural Language Processing', level: 92 }, { name: 'AI Engineering', level: 91 }, { name: 'Model Evaluation', level: 91 },
  ]},
  { id: 'database', label: text('Databases', 'ډیټابېسونه', 'پایگاه‌های داده'), skills: [
    { name: 'PostgreSQL', level: 90 }, { name: 'MySQL', level: 89 }, { name: 'SQL Server', level: 88 }, { name: 'SQLite', level: 92 },
  ]},
  { id: 'tools', label: text('Tools, Cloud & Delivery', 'وسایل، کلاوډ او ډیپلویمنټ', 'ابزار، ابر و استقرار'), skills: [
    { name: 'Git & GitHub', level: 92 }, { name: 'Docker', level: 86 }, { name: 'Linux', level: 84 }, { name: 'Nginx', level: 82 }, { name: 'CI/CD', level: 83 }, { name: 'Cloud Technologies', level: 83 },
  ]},
  { id: 'research', label: text('Research & Teaching', 'څېړنه او تدریس', 'پژوهش و تدریس'), skills: [
    { name: 'Dataset Construction', level: 94 }, { name: 'Data Annotation', level: 92 }, { name: 'Low-resource NLP', level: 92 }, { name: 'University Teaching', level: 94 }, { name: 'Curriculum Design', level: 89 }, { name: 'Student Mentoring', level: 92 },
  ]},
];

export const projects: Project[] = [
  {
    id: 'afghanlink', title: text('AfghanLink Digital Ecosystem', 'افغان‌لېنک ډیجیټل ایکوسیستم', 'اکوسیستم دیجیتال افغان‌لینک'),
    description: text('A multilingual marketplace and services ecosystem designed for goods, skills, jobs, housing, transport, bookings, and local digital services in Afghanistan.', 'یو څوژبنی بازار او خدمتونو ایکوسیستم چې په افغانستان کې د توکو، مهارتونو، دندو، کورونو، ترانسپورټ، بکینګ او ډیجیټل خدمتونو لپاره طرحه شوی.', 'یک اکوسیستم چندزبانه بازار و خدمات برای کالاها، مهارت‌ها، مشاغل، مسکن، حمل‌ونقل، رزرو و خدمات دیجیتال در افغانستان.'),
    category: 'web', categoryLabel: text('Full Stack Platform', 'فول‌سټېک پلاتفورم', 'پلتفرم فول‌استک'), image: '/assets/projects/afghanlink.svg', technologies: ['Next.js', 'Django', 'PostgreSQL', 'PostGIS', 'Docker', 'Redis'], github: 'https://github.com/SaifWiyar/afghanlink-ecosystem', featured: true,
  },
  {
    id: 'raise-solar', title: text('Raise Solar Management System', 'د Raise Solar مدیریت سیستم', 'سیستم مدیریت Raise Solar'),
    description: text('A business-management application for customers, installers, invoices, expenses, refunds, search, reporting, and day-to-day solar operations.', 'د پېرودونکو، انسټالرانو، بیلونو، لګښتونو، بېرته ورکړې، لټون، راپورونو او ورځنیو سولر عملیاتو لپاره سوداګریز مدیریت اپلېکېشن.', 'یک اپلیکیشن مدیریت کسب‌وکار برای مشتریان، نصاب‌ها، فاکتورها، مصارف، بازپرداخت، جستجو، گزارش و عملیات روزانه سولر.'),
    category: 'web', categoryLabel: text('Business Application', 'سوداګریز اپلېکېشن', 'اپلیکیشن تجاری'), image: '/assets/projects/raise-solar.svg', technologies: ['Python', 'Django', 'SQLite', 'Bootstrap', 'JavaScript'], github: 'https://github.com/SaifWiyar/raise-solar-management-system', featured: true,
  },
  {
    id: 'low-resource-nlp', title: text('Low-Resource NLP & ML Research', 'د کم‌سرچینې ژبو NLP او ML څېړنه', 'پژوهش NLP و ML زبان‌های کم‌منبع'),
    description: text('A research portfolio for multilingual datasets, annotation, text classification, benchmark evaluation, and reproducible model training.', 'د څوژبنیو ډیټاسېټونو، انوټېشن، متن ډلبندۍ، بنچمارک ارزونې او تکرارېدونکې ماډل روزنې لپاره څېړنیز پورټفولیو.', 'پورتفولیوی پژوهشی برای دیتاست‌های چندزبانه، حاشیه‌نویسی، طبقه‌بندی متن، ارزیابی بنچمارک و آموزش قابل تکرار مدل.'),
    category: 'research', categoryLabel: text('Research', 'څېړنه', 'پژوهش'), image: '/assets/projects/nlp.svg', technologies: ['Python', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Transformers'], github: 'https://github.com/SaifWiyar/low-resource-nlp-ml-research', featured: true,
  },
  {
    id: 'pashto-news', title: text('Multi-Source Pashto News Dataset', 'د څو سرچینو پښتو خبرونو ډیټاسېټ', 'دیتاست چندمنبع خبرهای پشتو'),
    description: text('Ongoing work titled “A Multi-Source Pashto News Dataset for Text Classification: Corpus Construction, Annotation, and Benchmark Evaluation.”', 'روانه څېړنه: «د متن ډلبندۍ لپاره د څو سرچینو پښتو خبرونو ډیټاسېټ: د کارپس جوړول، انوټېشن او بنچمارک ارزونه».', 'پژوهش جاری با عنوان «دیتاست چندمنبع خبرهای پشتو برای طبقه‌بندی متن: ساخت پیکره، حاشیه‌نویسی و ارزیابی بنچمارک».'),
    category: 'nlp', categoryLabel: text('NLP', 'NLP', 'NLP'), image: '/assets/projects/pashto-news.svg', technologies: ['Pashto NLP', 'Corpus Construction', 'Annotation', 'TF-IDF', 'SVM', 'Evaluation'], github: 'https://github.com/SaifWiyar/low-resource-nlp-ml-research', featured: true,
  },
  {
    id: 'muqadas', title: text('Muqadas Online Shopping UI', 'مقدس آنلاین شاپینګ UI', 'رابط فروشگاه آنلاین مقدس'),
    description: text('A responsive e-commerce interface that began as a classroom GitHub exercise and was modernized as a teaching portfolio project.', 'یو ځواب‌ویونکی سوداګریز انترفېس چې د ګېټ‌هب د درسي تمرین په توګه پیل او وروسته د تدریسي پورټفولیو لپاره عصري شو.', 'یک رابط واکنش‌گرا فروشگاهی که به‌عنوان تمرین صنفی گیت‌هاب آغاز شد و سپس برای پورتفولیوی آموزشی نوسازی گردید.'),
    category: 'web', categoryLabel: text('Web Development', 'وېب پراختیا', 'توسعه وب'), image: '/assets/projects/muqadas.svg', technologies: ['HTML5', 'CSS3', 'Responsive Design', 'GitHub Pages'], github: 'https://github.com/SaifWiyar/SaifOnlineWeb', live: 'https://saifwiyar.github.io/SaifOnlineWeb/',
  },
];

export const timeline: TimelineItem[] = [
  { year: 'Current', type: 'research', title: text('Pashto News Dataset and Low-Resource NLP Research', 'د پښتو خبرونو ډیټاسېټ او کم‌سرچینې NLP څېړنه', 'پژوهش دیتاست خبرهای پشتو و NLP کم‌منبع'), organization: text('Independent and academic research', 'خپلواکه او اکاډمیکه څېړنه', 'پژوهش مستقل و اکادمیک'), description: text('Corpus construction, annotation, text classification experiments, and benchmark evaluation for Pashto language technology.', 'د پښتو ژبې ټکنالوژۍ لپاره د کارپس جوړول، انوټېشن، متن ډلبندي او بنچمارک ارزونه.', 'ساخت پیکره، حاشیه‌نویسی، آزمایش‌های طبقه‌بندی متن و ارزیابی بنچمارک برای فناوری زبان پشتو.') },
  { year: 'Present', type: 'teaching', title: text('University Lecturer', 'د پوهنتون استاد', 'استاد دانشگاه'), organization: text('Computer Science education in Afghanistan', 'په افغانستان کې د کمپیوټر ساینس زده‌کړه', 'آموزش علوم کامپیوتر در افغانستان'), description: text('Teaching web development, JavaScript, React, Python, databases, analytics, Machine Learning, Artificial Intelligence, and NLP.', 'د وېب پراختیا، جاواسکرېپټ، React، پایتون، ډیټابېس، تحلیل، ماشین زده‌کړې، مصنوعي ځیرکتیا او NLP تدریس.', 'تدریس توسعه وب، جاوااسکریپت، React، پایتون، دیتابیس، تحلیل داده، یادگیری ماشین، هوش مصنوعی و NLP.') },
  { year: '2020 - Present', type: 'experience', title: text('Founder', 'بنسټګر', 'بنیان‌گذار'), organization: text('Saif Tech Studio', 'Saif Tech Studio', 'Saif Tech Studio'), description: text('Providing full-stack web development, AI solutions, data science services, digital products, and technical consulting.', 'د فول‌سټېک وېب پراختیا، AI حلونو، ډېټا ساینس خدمتونو، ډیجیټل محصولاتو او تخنیکي مشورې وړاندې کول.', 'ارائه توسعه فول‌استک وب، راه‌حل‌های هوش مصنوعی، خدمات علم داده، محصولات دیجیتال و مشاوره فنی.') },
  { year: '2020 - Present', type: 'teaching', title: text('Founder and Instructor', 'بنسټګر او ښوونکی', 'بنیان‌گذار و مدرس'), organization: text('Saif Online Academy', 'Saif Online Academy', 'Saif Online Academy'), description: text('Delivering practical technology education, structured training programs, academic resources, and student mentoring.', 'عملي ټکنالوژي زده‌کړه، منظم روزنیز پروګرامونه، اکاډمیکې سرچینې او د زده‌کوونکو لارښوونه.', 'ارائه آموزش عملی فناوری، برنامه‌های منظم آموزشی، منابع اکادمیک و راهنمایی دانشجویان.') },
  { year: 'Coursework', type: 'education', title: text('Master of Science in Data Science', 'په ډېټا ساینس کې ماسټري', 'کارشناسی ارشد علم داده'), organization: text('Graduate-level Data Science education', 'د ډېټا ساینس لوړې زده‌کړې', 'تحصیلات تکمیلی علم داده'), description: text('Graduate coursework in Data Science, Machine Learning, analytics, and intelligent systems.', 'په ډېټا ساینس، ماشین زده‌کړه، تحلیل او هوښیارو سیستمونو کې د ماسټرۍ کورسونه.', 'دروس تحصیلات تکمیلی در علم داده، یادگیری ماشین، تحلیل و سیستم‌های هوشمند.') },
  { year: 'Completed', type: 'education', title: text('Bachelor of Science in Computer Science', 'په کمپیوټر ساینس کې لیسانس', 'کارشناسی علوم کامپیوتر'), organization: text('Undergraduate education', 'لیسانس زده‌کړې', 'تحصیلات کارشناسی'), description: text('Foundation in programming, full-stack development, databases, networks, and computing systems.', 'په پروګرامینګ، فول‌سټېک پراختیا، ډیټابېس، شبکو او کمپیوټري سیستمونو کې بنسټیزه زده‌کړه.', 'پایه در برنامه‌نویسی، توسعه فول‌استک، پایگاه داده، شبکه و سیستم‌های محاسباتی.') },
];

export const achievements = [
  { value: '5+', label: text('Years of teaching and mentoring', 'د تدریس او لارښوونې کلونه', 'سال تدریس و راهنمایی') },
  { value: '2020', label: text('Saif Online Academy founded', 'د Saif Online Academy د پیل کال', 'سال تأسیس Saif Online Academy') },
  { value: '2', label: text('Technology and education ventures founded', 'ټکنالوژي او زده‌کړیزې ادارې', 'نهاد فناوری و آموزشی تأسیس‌شده') },
  { value: '3', label: text('Languages supported across the ecosystem', 'په ایکوسیستم کې ملاتړ شوې ژبې', 'زبان پشتیبانی‌شده در اکوسیستم') },
];

export const faqItems = [
  { q: text('What work can you support?', 'تاسو د کوم کار ملاتړ کولی شئ؟', 'از چه کاری پشتیبانی می‌کنید؟'), a: text('Data Science, AI engineering, Machine Learning and NLP, dataset construction, Django and React applications, academic platforms, research implementation, consulting, and technical training.', 'د ډېټا ساینس، AI، ماشین زده‌کړې، NLP، ډیټاسېټ جوړولو، Django او React اپلېکېشنونو، اکاډمیک پلاتفورمونو، څېړنې، مشورې او تخنیکي روزنې ملاتړ کوم.', 'علم داده، هوش مصنوعی، یادگیری ماشین و NLP، ساخت دیتاست، اپلیکیشن‌های Django و React، پلتفرم‌های اکادمیک، اجرای پژوهش، مشاوره و آموزش فنی.') },
  { q: text('Do you work remotely?', 'ایا ریموټ کار کوئ؟', 'آیا دورکاری می‌کنید؟'), a: text('Yes. I am open to selected remote roles, consulting, research partnerships, training, and full-stack development engagements.', 'هو. د ټاکلو ریموټ دندو، مشورې، څېړنیزو شراکتونو، روزنې او فول‌سټېک پراختیا فرصتونو هرکلی کوم.', 'بله. برای فرصت‌های منتخب دورکاری، مشاوره، همکاری پژوهشی، آموزش و توسعه فول‌استک آماده هستم.') },
  { q: text('What is Academic Hub?', 'اکاډمیک هب څه شی دی؟', 'هاب اکادمیک چیست؟'), a: text('Academic Hub is the secure student, teacher, and administration platform connected to this public portfolio. It manages courses, batches, classes, special online programs, materials, assignments, attendance, results, messages, and reports.', 'اکاډمیک هب د دې عام پورټفولیو سره تړلی خوندي زده‌کوونکي، استاد او اداري پلاتفورم دی چې کورسونه، بیچونه، ټولګي، ځانګړي آنلاین پروګرامونه، مواد، دندې، حاضري، پایلې، پیغامونه او راپورونه مدیریت کوي.', 'هاب اکادمیک پلتفرم امن دانشجو، استاد و مدیریت متصل به این پورتفولیوی عمومی است و کورس‌ها، بچ‌ها، صنف‌ها، برنامه‌های ویژه آنلاین، منابع، وظایف، حاضری، نتایج، پیام‌ها و گزارش‌ها را مدیریت می‌کند.') },
];

export const teachingTopics: LocalizedText[] = [
  text('Web Development', 'وېب پراختیا', 'توسعه وب'),
  text('HTML & CSS', 'HTML او CSS', 'HTML و CSS'),
  text('JavaScript', 'جاواسکرېپټ', 'جاوااسکریپت'),
  text('React', 'React', 'React'),
  text('Python', 'پایتون', 'پایتون'),
  text('Database Systems', 'ډیټابېس سیستمونه', 'سیستم‌های دیتابیس'),
  text('SQL Server', 'SQL Server', 'SQL Server'),
  text('MySQL', 'MySQL', 'MySQL'),
  text('Data Analytics', 'د ډېټا تحلیل', 'تحلیل داده'),
  text('Machine Learning', 'ماشین زده‌کړه', 'یادگیری ماشین'),
  text('Artificial Intelligence', 'مصنوعي ځیرکتیا', 'هوش مصنوعی'),
  text('Deep Learning', 'ژوره زده‌کړه', 'یادگیری عمیق'),
  text('Natural Language Processing', 'د طبیعي ژبې پروسس', 'پردازش زبان طبیعی'),
];
