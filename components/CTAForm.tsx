"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Values = { name: string; email: string; whatsapp: string; business: string; url: string; message: string };
const initial: Values = { name: "", email: "", whatsapp: "", business: "", url: "", message: "" };

export default function CTAForm() {
  const router = useRouter(); const [values, setValues] = useState(initial); const [errors, setErrors] = useState<Partial<Values>>({}); const [submitting, setSubmitting] = useState(false);
  const change = (key: keyof Values, value: string) => { setValues(v => ({ ...v, [key]: value })); setErrors(e => ({ ...e, [key]: undefined })); };
  function submit(e: FormEvent) {
    e.preventDefault(); const next: Partial<Values> = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number.";
    if (!values.business.trim()) next.business = "Please enter your business name.";
    setErrors(next); if (Object.keys(next).length) return;
    setSubmitting(true); sessionStorage.setItem("consultationName", values.name.trim()); router.push("/thank-you");
  }
  const field = (key: keyof Values, label: string, placeholder: string, type = "text") => <label className="block text-sm font-bold text-white" htmlFor={key}>{label}{key !== "url" && <span className="text-blue-300"> *</span>}<input id={key} name={key} autoComplete={key === "name" ? "name" : key === "email" ? "email" : key === "whatsapp" ? "tel" : "organization"} type={type} value={values[key]} onChange={e => change(key, e.target.value)} placeholder={placeholder} className={`form-field ${errors[key] ? "error-field" : ""}`} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `${key}-error` : undefined} />{errors[key] && <span id={`${key}-error`} className="mt-1 block text-sm text-red-300">{errors[key]}</span>}</label>;
  return <section id="consultation-form" className="bg-mist px-5 py-20 sm:py-28"><div className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-plum p-6 shadow-soft ring-1 ring-blue-500/40 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:p-14"><div><span className="eyebrow">Free consultation</span><h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white">Book the call</h2><p className="mt-5 leading-7 text-lilac">Fill in the form below to request your free consultation.</p><div className="mt-8 space-y-4 border-t border-white/10 pt-7"><p className="font-bold text-white">One-to-One Consultation</p><p className="font-bold text-white">Customized Strategy for Your Business</p><p className="pt-2 text-sm leading-6 text-blue-100">Share a few details now so the consultation can focus on the right next steps for your business.</p></div></div><form noValidate onSubmit={submit} className="space-y-5" aria-busy={submitting}>{field("name", "Full Name", "Your full name")}{field("email", "Active Email", "you@example.com", "email")}{field("whatsapp", "WhatsApp Number", "Your active WhatsApp number", "tel")}{field("business", "Business Name", "Your business name")}{field("url", "Website or Facebook URL", "https://", "url") }<label className="block text-sm font-bold text-white" htmlFor="message">Anything You Want to Say<textarea id="message" name="message" value={values.message} onChange={e => change("message", e.target.value)} placeholder="Tell us a little about your business or goals" rows={4} className="form-field resize-y" /></label><button disabled={submitting} className="flex min-h-14 w-full items-center justify-center rounded-xl bg-blue px-6 font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-70">{submitting ? "Booking your consultation…" : <>Book Free Consultation <span className="ml-2">→</span></>}</button><p className="text-center text-sm text-lilac">We respect your privacy. No spam.</p></form></div></section>;
}
