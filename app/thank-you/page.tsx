"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function ThankYou() {
  const [name, setName] = useState("");
  useEffect(() => { setName(sessionStorage.getItem("consultationName") || ""); }, []);

  return <main className="min-h-screen bg-ink"><Header /><section className="hero-grid px-5 pb-20 pt-16 text-center sm:pt-24"><div className="mx-auto max-w-3xl rounded-3xl border border-blue-500/40 bg-plum p-8 shadow-soft sm:p-14"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue text-2xl font-bold text-white" aria-hidden>✓</div><p className="mt-7 text-sm font-bold uppercase tracking-[.16em] text-blue-300">Request received</p><h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{name ? `Thanks, ${name}!` : "Your Free Consultation Has Been Booked!"}</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-lilac">You&apos;re one step closer to getting a customized AI-powered marketing plan for your business.</p><p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">We&apos;ll review your information and follow up using the contact details you provided.</p><div className="mt-9 rounded-2xl border border-white/10 bg-ink/60 p-6 text-left"><h2 className="text-xl font-bold text-white">Here&apos;s what happens next</h2><ul className="mt-4 space-y-3 leading-7 text-lilac"><li>✓ We&apos;ll review your business details before the consultation.</li><li>✓ We&apos;ll contact you by email or WhatsApp to arrange a suitable time.</li><li>✓ During the call, you&apos;ll receive a customized marketing strategy built specifically for your business.</li></ul></div><p className="mt-8 leading-7 text-lilac">I look forward to speaking with you and helping you attract more customers online.</p><a href="/" className="mt-8 inline-flex rounded-full border border-blue-500/50 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500/10">Back to home</a></div></section></main>;
}
