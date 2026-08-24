export default function Hero() {
  return <section className="hero-grid relative overflow-hidden px-5 pb-20 pt-14 text-center sm:pb-28 sm:pt-20">
    <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/30 blur-3xl" />
    <div className="relative mx-auto max-w-4xl"><span className="eyebrow">AI Marketing Expert · Free one-to-one consultation</span>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">Get a Free <span className="text-blue-300">AI-Powered Marketing Plan</span><br className="hidden sm:block" /> to attract more customers online</h1>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-lilac">Stop relying only on referrals and random Facebook posts. In one free consultation, you&apos;ll receive a customized marketing plan built specifically for your business—so you know exactly what to do next.</p>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">I help small and medium business owners sell their products or services online. If you want more consistent customer enquiries but aren&apos;t sure how to make digital marketing work, this consultation is for you.</p>
      <a href="#consultation-form" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-blue px-7 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-700">Book Free Consultation <span aria-hidden className="ml-2">→</span></a>
      <p className="mt-4 text-sm text-blue-100">Clear advice for your business · No commitment</p>
    </div>
  </section>;
}
