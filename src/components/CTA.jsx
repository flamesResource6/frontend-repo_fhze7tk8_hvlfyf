function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.12),transparent_35%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Ready to book your next visit?</h2>
          <p className="mt-3 text-blue-200/80">Join thousands choosing a faster, smarter way to get care.</p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow">Book now</button>
            <button className="h-12 px-6 rounded-xl bg-white/10 border border-white/10 text-white">Learn more</button>
          </div>

          <p className="mt-6 text-xs text-blue-200/60">No fees. Cancel anytime up to 24 hours before your appointment.</p>
        </div>
      </div>
    </section>
  )
}

export default CTA
