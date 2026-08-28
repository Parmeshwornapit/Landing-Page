const questions = [
  ["Who is this free consultation for?", "It is designed for small and medium business owners who want more consistent customer enquiries and a clearer way to market their product or service online."],
  ["What will we cover on the call?", "We will review your current marketing, your business goals, and the areas that may be making it harder for customers to find and choose you online."],
  ["What will I leave with?", "You will receive practical, AI-powered marketing recommendations and a simple next-step plan tailored to your business."],
  ["Is there any obligation after the consultation?", "No. The consultation is free and focused on giving you useful clarity. You can decide what to do next in your own time."],
];

export default function FAQ() {
  return (
    <section className="bg-mist px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <span className="eyebrow">Before you book</span>
          <h2 className="section-title mt-5">Everything you need to know</h2>
          <p className="mt-5 max-w-md leading-7 text-lilac">A simple conversation with practical advice for your business — no jargon and no pressure.</p>
        </div>
        <div className="space-y-3">
          {questions.map(([question, answer]) => (
            <details key={question} className="faq-item rounded-2xl border border-blue-500/25 bg-plum/65 px-6 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-white">
                {question}<span className="faq-marker" aria-hidden>+</span>
              </summary>
              <p className="border-t border-white/10 pb-5 pt-4 leading-7 text-lilac">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
