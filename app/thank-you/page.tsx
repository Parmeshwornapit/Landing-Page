"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

const nextSteps = [
  ["01", "Watch the welcome video", "It will help you arrive at the consultation ready to get the most value from our time together."],
  ["02", "I review your business", "Before we speak, I’ll look over the information you shared and prepare for a focused conversation."],
  ["03", "Get your clear next step", "During the call, you’ll receive practical marketing recommendations built for your business."],
];

export default function ThankYou() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(sessionStorage.getItem("consultationName") || "");
  }, []);

  return (
    <main className="min-h-screen bg-ink">
      <Header />
      <section className="hero-grid relative overflow-hidden px-5 pb-20 pt-12 text-center sm:pb-28 sm:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue text-3xl font-bold text-white shadow-xl shadow-blue-950/50 ring-8 ring-blue-500/10" aria-hidden>✓</div>
            <p className="mt-8 text-xs font-extrabold uppercase tracking-[.2em] text-blue-300">Your request is in</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">{name ? `Thanks, ${name}!` : "Your consultation is booked."}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-lilac sm:text-xl">You&apos;re one step closer to a customized AI-powered marketing plan for your business.</p>
          </div>

          <div className="mt-12 grid items-start gap-8 text-left lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
            <div className="order-2 rounded-3xl border border-white/10 bg-plum/70 p-7 shadow-soft lg:order-1 sm:p-9">
              <span className="eyebrow">What happens next</span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white">You&apos;re in good hands.</h2>
              <div className="mt-8 space-y-6">
                {nextSteps.map(([number, title, detail]) => (
                  <div key={number} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/15 text-xs font-extrabold tracking-wider text-blue-200 ring-1 ring-blue-400/30">{number}</span>
                    <div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-lilac">{detail}</p></div>
                  </div>
                ))}
              </div>
              <div className="mt-9 rounded-2xl border border-green-400/30 bg-green-950/25 p-5">
                <p className="font-bold text-white">Want to introduce your business now?</p>
                <p className="mt-1 text-sm leading-6 text-lilac">Send a quick WhatsApp message before the call.</p>
                <a href="https://wa.me/9779861676300?text=Hi%20Parmeshwor%2C%20I%20just%20booked%20a%20free%20consultation." target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-6 font-bold text-white shadow-lg shadow-green-950/40 transition hover:-translate-y-0.5 hover:bg-[#1EBE5D]">Chat on WhatsApp <span aria-hidden className="ml-2">↗</span></a>
              </div>
            </div>

            <div className="order-1 overflow-hidden rounded-3xl border border-blue-500/40 bg-ink/80 p-3 shadow-2xl shadow-black/40 lg:order-2 sm:p-4">
              <div className="mb-4 px-3 pt-3 text-left sm:px-4"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-300">Before we speak</p><h2 className="mt-2 text-2xl font-extrabold text-white">Watch this short welcome video</h2><p className="mt-2 text-sm leading-6 text-lilac">A few minutes now will make our consultation more useful for you.</p></div>
              <video className="mx-auto aspect-[9/16] w-full max-w-sm rounded-2xl bg-black" autoPlay controls playsInline preload="auto"><source src="/thank-you-video.mp4" type="video/mp4" />Your browser does not support this video.</video>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-2xl leading-7 text-blue-100">I look forward to helping you attract more customers online with a marketing strategy that feels clear, practical, and built around your goals.</p>
          <a href="/" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full border border-blue-500/50 px-6 font-bold text-white transition hover:bg-blue-500/10">Back to home <span aria-hidden className="ml-2">→</span></a>
        </div>
      </section>
    </main>
  );
}
