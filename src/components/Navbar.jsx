import { useState } from 'react'
import { Menu, Stethoscope, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/70 rounded-b-2xl mt-2 px-4 border border-white/10">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight">BlueCare</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-blue-100/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-blue-100 hover:text-white transition-colors">Sign in</button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow">Book a visit</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-blue-100" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 p-4 rounded-2xl bg-slate-900/80 backdrop-blur border border-white/10 text-blue-100/90">
          <a href="#features" className="block py-2">Features</a>
          <a href="#how" className="block py-2">How it works</a>
          <a href="#contact" className="block py-2">Contact</a>
          <div className="flex gap-3 pt-3">
            <button className="flex-1 px-4 py-2 rounded-xl bg-slate-800/80">Sign in</button>
            <button className="flex-1 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white">Book a visit</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
