"use client";

import { useEffect, useState } from "react";

export default function MobileBookingCTA() {
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("consultation-form");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (formVisible) return null;

  return <a href="#consultation-form" className="fixed bottom-4 left-4 right-4 z-20 flex min-h-14 items-center justify-center rounded-full bg-blue px-6 font-bold text-white shadow-lg shadow-blue-950/50 transition hover:bg-blue-700 sm:hidden">Book Free Consultation <span className="ml-2">→</span></a>;
}
