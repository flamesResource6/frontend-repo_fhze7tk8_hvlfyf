import { CalendarClock, ShieldCheck, Star, Smartphone, Clock, Hospital } from 'lucide-react'

const features = [
  {
    icon: CalendarClock,
    title: 'Instant booking',
    desc: 'See real-time availability and confirm in a few taps.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified doctors',
    desc: 'Profiles vetted for credentials and patient feedback.'
  },
  {
    icon: Smartphone,
    title: 'Telehealth ready',
    desc: 'Video visits with secure, HIPAA-compliant calls.'
  },
  {
    icon: Clock,
    title: 'Smart reminders',
    desc: 'Automated reminders and rescheduling on the fly.'
  },
  {
    icon: Star,
    title: 'Top-rated care',
    desc: 'Transparent reviews to help you choose confidently.'
  },
  {
    icon: Hospital,
    title: 'Wide network',
    desc: 'Clinics and specialists across major cities.'
  }
]

function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.1),transparent_35%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why choose BlueCare</h2>
          <p className="mt-3 text-blue-200/80">Everything you need to discover great doctors and book care with confidence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-cyan-500/20">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
