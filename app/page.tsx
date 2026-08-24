import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Urgency from "@/components/Urgency";
import CTAForm from "@/components/CTAForm";

export default function Home() { return <><a className="skip-link" href="#main-content">Skip to content</a><main id="main-content"><Header /><Hero /><Problem /><Benefits /><Process /><Urgency /><CTAForm /></main><a href="#consultation-form" className="fixed bottom-4 left-4 right-4 z-20 flex min-h-14 items-center justify-center rounded-full bg-blue px-6 font-bold text-white shadow-lg shadow-blue-950/50 transition hover:bg-blue-700 sm:hidden">Book Free Consultation <span className="ml-2">→</span></a></>; }
