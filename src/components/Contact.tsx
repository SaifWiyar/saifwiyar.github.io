import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckCircle2, LoaderCircle, Mail, MapPin, MessageCircle, Phone, Send, UploadCloud } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { validateContact, type ContactFormValues } from '../lib/form';
import { SectionHeading } from './SectionHeading';
import { t } from '../lib/i18n';

const initialValues: ContactFormValues = { name: '', email: '', phone: '', country: '', company: '', subject: '', budget: '', message: '', website: '' };

export function Contact() {
  const { copy, locale } = useApp();
  const [values, setValues] = useState(initialValues);
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const startedAt = useRef(0);
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID?.trim();

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const update = (field: keyof ContactFormValues, value: string) => setValues((current) => ({ ...current, [field]: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.website) return setStatus('success');
    if (!startedAt.current || Date.now() - startedAt.current < 2500) return setStatus('error');
    const nextErrors = validateContact(values, file);
    setErrors(nextErrors as Record<string, string>);
    if (Object.keys(nextErrors).length) return;
    setStatus('sending');

    if (!formspreeId) {
      const body = encodeURIComponent(`${values.message}\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nCountry: ${values.country}\nCompany: ${values.company}\nBudget: ${values.budget}`);
      window.location.href = `mailto:saifwiyar@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const data = new FormData();
      Object.entries(values).forEach(([key, value]) => data.append(key, value));
      data.append('_subject', `Portfolio inquiry: ${values.subject}`);
      if (file) data.append('attachment', file);
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('success'); setValues(initialValues); setFile(null); startedAt.current = Date.now();
    } catch { setStatus('error'); }
  };

  const fieldClass = (name: string) => `form-input ${errors[name] ? 'border-red-500' : ''}`;
  const budgets = ['$500 - $1,000', '$1,000 - $3,000', '$3,000 - $10,000', '$10,000+', 'Research / academic collaboration', 'Discuss privately'];

  return <section id="contact" className="section-space bg-white dark:bg-slate-950"><div className="container-shell"><SectionHeading label={copy.contact.label} title={copy.contact.title} subtitle={copy.contact.subtitle} />
    <div className="grid gap-8 xl:grid-cols-[.72fr_1.28fr]">
      <aside className="rounded-[1.8rem] bg-gradient-to-br from-blue-700 via-blue-600 to-violet-700 p-7 text-white shadow-xl"><h3 className="text-2xl font-black">{t(locale, 'Direct contact', 'مستقیمه اړیکه', 'تماس مستقیم')}</h3><p className="mt-3 text-blue-100">{t(locale, 'For urgent or private discussions, use email, WhatsApp, or mobile.', 'د عاجلو یا خصوصي خبرو لپاره برېښنالیک، واټساپ یا موبایل وکاروئ.', 'برای گفتگوهای فوری یا خصوصی از ایمیل، واتساپ یا موبایل استفاده کنید.')}</p><div className="mt-8 space-y-3">
        <a className="contact-link" href="mailto:saifwiyar@gmail.com"><Mail size={19} /><span><small>Email</small><strong>saifwiyar@gmail.com</strong></span></a>
        <a className="contact-link" href="https://wa.me/923439521969" target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp</small><strong>+92 343 9521969</strong></span></a>
        <a className="contact-link" href="tel:+93771985013"><Phone size={19} /><span><small>Mobile</small><strong>+93 771 985013</strong></span></a>
        <a className="contact-link" href="https://www.google.com/maps/search/Afghanistan" target="_blank" rel="noreferrer"><MapPin size={19} /><span><small>{t(locale, 'Location', 'ځای', 'موقعیت')}</small><strong>Afghanistan 🇦🇫</strong></span></a>
      </div><div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-blue-50">{t(locale, 'Your information is used only to respond to your inquiry. Do not send passwords, secret keys, medical records, or sensitive identity documents.', 'ستاسو معلومات یوازې ستاسو پوښتنې ته د ځواب لپاره کارول کېږي. پاسورډونه، پټ کلي، طبي اسناد یا حساس هویتي معلومات مه استوئ.', 'اطلاعات شما فقط برای پاسخ به درخواست‌تان استفاده می‌شود. رمز عبور، کلید محرمانه، سوابق پزشکی یا اسناد حساس هویتی ارسال نکنید.')}</div></aside>

      <form onSubmit={submit} encType="multipart/form-data" noValidate className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-6 md:p-8 dark:border-white/10 dark:bg-white/[.035]">
        <input type="text" name="website" value={values.website} onChange={(event) => update('website', event.target.value)} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-5 md:grid-cols-2">
          {(['name','email','phone','country','company','subject'] as const).map((field) => <label key={field} className={field === 'subject' ? 'md:col-span-2' : ''}><span className="form-label">{copy.contact.form[field]}{['name','email','country','subject'].includes(field) && ' *'}</span><input className={fieldClass(field)} type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} value={values[field]} onChange={(event) => update(field, event.target.value)} autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'country' ? 'country-name' : field === 'company' ? 'organization' : 'off'} aria-invalid={Boolean(errors[field])} aria-describedby={errors[field] ? `${field}-error` : undefined} />{errors[field] && <span id={`${field}-error`} className="form-error">{errors[field]}</span>}</label>)}
          <label className="md:col-span-2"><span className="form-label">{copy.contact.form.budget}</span><select value={values.budget} onChange={(event) => update('budget', event.target.value)} className="form-input"><option value="">{copy.contact.form.selectBudget}</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
          <label className="md:col-span-2"><span className="form-label">{copy.contact.form.message} *</span><textarea value={values.message} onChange={(event) => update('message', event.target.value)} rows={7} className={fieldClass('message')} aria-invalid={Boolean(errors.message)} />{errors.message && <span className="form-error">{errors.message}</span>}</label>
          <label className="md:col-span-2"><span className="form-label">{copy.contact.form.attachment}</span><span className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-5 text-sm text-slate-500 hover:border-blue-400 dark:border-white/15 dark:bg-white/5 dark:text-slate-400"><UploadCloud className="text-blue-600" /><span>{file ? file.name : copy.contact.form.attachHelp}</span><input type="file" className="sr-only" accept=".pdf,.docx,.png,.jpg,.jpeg" onChange={(event) => setFile(event.target.files?.[0] ?? null)} /></span>{errors.attachment && <span className="form-error">{errors.attachment}</span>}</label>
        </div>
        <button disabled={status === 'sending'} type="submit" className="primary-button mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' ? <LoaderCircle className="animate-spin" size={19} /> : status === 'success' ? <CheckCircle2 size={19} /> : <Send size={19} />}{status === 'sending' ? copy.contact.form.sending : copy.contact.form.submit}</button>
        {status === 'success' && <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300" role="status">{copy.contact.form.success}</p>}
        {status === 'error' && <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700 dark:bg-red-400/10 dark:text-red-300" role="alert">{copy.contact.form.error}</p>}
      </form>
    </div>
  </div></section>;
}
