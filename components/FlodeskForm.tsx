"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Loads the unmodified Flodesk export from /public. Scripts are recreated so
 * Flodesk owns submission, lead capture, automation, and its native redirect.
 */
export default function FlodeskForm() {
  const container = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const mount = container.current;
    if (!mount) return;
    let active = true;

    fetch("/flodesk-form-embed.html")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load the form.");
        return response.text();
      })
      .then((markup) => {
        if (!active) return;
        mount.innerHTML = markup;
        const scripts = Array.from(mount.querySelectorAll("script"));
        for (const oldScript of scripts) {
          const script = document.createElement("script");
          for (const attribute of Array.from(oldScript.attributes)) script.setAttribute(attribute.name, attribute.value);
          script.text = oldScript.text;
          oldScript.replaceWith(script);
        }
      })
      .catch(() => active && setError(true));

    return () => { active = false; mount.innerHTML = ""; };
  }, []);

  if (error) return <p className="rounded-xl border border-red-400/50 bg-red-950/30 p-4 text-sm text-red-100">The form could not load. Please refresh the page and try again.</p>;
  return <div ref={container} className="flodesk-theme" aria-live="polite" />;
}
