import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-950/90 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur text-blue-100 text-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Next‑gen doctor booking
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_8px_40px_rgba(56,189,248,0.25)]">
            Find the right specialist. Book in seconds.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
            A futuristic, reliable way to get care. Compare doctors, see real‑time availability, and confirm your visit with a tap.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <input className="flex-1 px-4 h-12 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Search doctors, specialties, or symptoms" />
            <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow">Search</button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-blue-200/80">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img src="https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
            </div>
            <p>
              Trusted by 25k+ patients • 4.9/5 satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
