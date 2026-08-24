import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Urgency from "@/components/Urgency";
import FlodeskForm from "@/components/FlodeskForm";

export default function Home() { return <><a className="skip-link" href="#main-content">Skip to content</a><main id="main-content"><Header /><Hero /><Problem /><Benefits /><Process /><Urgency /><section id="consultation-form" className="bg-mist px-5 py-20 sm:py-28"><div className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-plum p-6 shadow-soft ring-1 ring-blue-500/40 sm:p-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:p-14"><div><span className="eyebrow">Free consultation</span><h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white">Book the call</h2><p className="mt-5 leading-7 text-lilac">Fill in the form below to request your free consultation.</p><div className="mt-8 space-y-4 border-t border-white/10 pt-7"><p className="font-bold text-white">One-to-One Consultation</p><p className="font-bold text-white">Customized Strategy for Your Business</p><p className="pt-2 text-sm leading-6 text-blue-100">Share a few details now so the consultation can focus on the right next steps for your business.</p></div></div><FlodeskForm /></div></section></main><a href="#consultation-form" className="fixed bottom-4 left-4 right-4 z-20 flex min-h-14 items-center justify-center rounded-full bg-blue px-6 font-bold text-white shadow-lg shadow-blue-950/50 transition hover:bg-blue-700 sm:hidden">Book Free Consultation <span className="ml-2">→</span></a></>; }
