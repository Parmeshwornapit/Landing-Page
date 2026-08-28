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
    let observer: MutationObserver | undefined;

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

        // Observe Flodesk's own success state without changing its submission
        // flow. This records a Meta Lead only after Flodesk confirms success.
        const formRoot = mount.querySelector<HTMLElement>("[data-ff-el='root']");
        if (formRoot) {
          let leadTracked = false;
          const trackSuccessfulLead = () => {
            if (leadTracked || formRoot.getAttribute("data-ff-stage") !== "success") return;
            leadTracked = true;
            const metaPixel = window as Window & { fbq?: (event: string, name: string) => void };
            metaPixel.fbq?.("track", "Lead");
          };
          observer = new MutationObserver(trackSuccessfulLead);
          observer.observe(formRoot, { attributes: true, attributeFilter: ["data-ff-stage"] });
          trackSuccessfulLead();
        }
      })
      .catch(() => active && setError(true));

    return () => { active = false; observer?.disconnect(); mount.innerHTML = ""; };
  }, []);

  if (error) return <p className="rounded-xl border border-red-400/50 bg-red-950/30 p-4 text-sm text-red-100">The form could not load. Please refresh the page and try again.</p>;
  return <div ref={container} className="flodesk-theme" aria-live="polite"><div className="flodesk-loading"><span className="flodesk-spinner" aria-hidden />Loading your secure consultation form…</div></div>;
}
