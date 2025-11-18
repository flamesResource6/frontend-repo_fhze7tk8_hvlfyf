import { PlayCircle, CalendarDays, MessageSquareHeart } from 'lucide-react'

function Step({ index, title, desc }) {
  return (
    <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className="absolute -top-4 left-6 w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center text-white font-semibold shadow-lg shadow-cyan-500/30">
        {index}
      </div>
      <h3 className="mt-2 text-white font-medium">{title}</h3>
      <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
    </div>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Book great care in three simple steps</h2>
            <p className="mt-3 text-blue-200/80">Built for speed and clarity with a friendly, modern experience.</p>

            <div className="mt-8 grid gap-4">
              <Step index={1} title="Search for a doctor" desc="Browse by specialty, condition, or clinic — with filters for language, insurance, and more." />
              <Step index={2} title="Pick a time" desc="See live availability and choose the slot that works best for you." />
              <Step index={3} title="Confirm instantly" desc="Add your details and you're all set. Get reminders and manage visits easily." />

              <div className="mt-4 flex items-center gap-3 text-blue-200/80">
                <PlayCircle className="w-5 h-5" />
                <span>Demo walkthrough in under 60 seconds</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1585503418537-88331351ad99?q=80&w=1200&auto=format&fit=crop" alt="doctor" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/70 backdrop-blur border border-white/10">
              <div className="flex items-center justify-between text-blue-100">
                <div className="flex items-center gap-3">
                  <MessageSquareHeart className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-white font-medium">Your health, simplified</p>
                    <p className="text-sm text-blue-200/80">Friendly support whenever you need it</p>
                  </div>
                </div>
                <CalendarDays className="w-5 h-5 text-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
