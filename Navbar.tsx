import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartPulse } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#perfil', label: 'Perfil' },
  { href: '#missao', label: 'Missão' },
  { href: '#areas', label: 'Áreas' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#contactos', label: 'Contactos' },
  { href: '#organograma', label: 'Organograma' },
  { href: '#localizacao', label: 'Localização' },
];

export default function Navbar({ scrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a1628]/95 backdrop-blur-xl shadow-lg shadow-emerald-900/10 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-300 to-#99F6E4 flex items-center justify-center shadow-lg shadow-#6EE7B7/25 group-hover:shadow-#6EE7B7/40 transition-all duration-300"><HeartPulse className="w-6 h-6 text-[#0a1628]" /></div>
            <div className="flex flex-col"><span className="text-lg font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>MDC Health</span><span className="text-[10px] uppercase tracking-[0.2em] text-#A7F3D0 -mt-1">Services</span></div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (<a key={link.href} href={link.href} className="px-3 py-2 text-sm text-slate-300 hover:text-#A7F3D0 transition-colors duration-200 relative group">{link.label}<span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-#CFFAFE group-hover:w-full transition-all duration-300" /></a>))}
            <a href="#contactos" className="ml-3 px-5 py-2.5 bg-gradient-to-r from-emerald-400 to-#99F6E4 text-[#0a1628] text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-#6EE7B7/25 hover:-translate-y-0.5 transition-all duration-300">Fale Connosco</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-300 hover:text-white transition-colors">{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0a1628]/98 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (<a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 px-4 text-slate-300 hover:text-#A7F3D0 hover:bg-white/5 rounded-xl transition-all duration-200">{link.label}</a>))}
              <a href="#contactos" onClick={() => setIsOpen(false)} className="block mt-4 py-3 px-4 bg-gradient-to-r from-emerald-400 to-#99F6E4 text-[#0a1628] text-center font-semibold rounded-xl">Fale Connosco</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
