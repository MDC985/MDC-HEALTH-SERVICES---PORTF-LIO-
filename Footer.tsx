import { HeartPulse, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#071018]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/15 to-transparent" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-300 to-#99F6E4 flex items-center justify-center shadow-lg shadow-#6EE7B7/20"><HeartPulse className="w-6 h-6 text-[#0a1628]" /></div>
              <div><div className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>MDC Health Services</div><div className="text-[10px] uppercase tracking-[0.2em] text-#A7F3D0">Gestão Integrada de Saúde</div></div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Conectando prestadores clínicos, farmacêuticos e operacionais para garantir eficiência e qualidade nos serviços de saúde.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Navegação Rápida</h4>
            <ul className="space-y-3">
              {[
                { label: 'Perfil', href: '#perfil' },
                { label: 'Missão & Visão', href: '#missao' },
                { label: 'Áreas de Atuação', href: '#areas' },
                { label: 'Diferenciais', href: '#diferenciais' },
                { label: 'Contactos', href: '#contactos' },
                { label: 'Organograma', href: '#organograma' },
                { label: 'Localização', href: '#localizacao' },
              ].map((link, i) => (<li key={i}><a href={link.href} className="text-sm text-slate-500 hover:text-#A7F3D0 transition-colors duration-200 inline-flex items-center gap-2 group"><span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-#A7F3D0 transition-colors" />{link.label}</a></li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Informações de Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-start gap-2"><span className="text-#A7F3D0">📞</span><span>+244 949 236 002 / 926 733 314</span></li>
              <li className="flex items-start gap-2"><span className="text-#A7F3D0">📧</span><span>mdchealthservices@gmail.com</span></li>
              <li className="flex items-start gap-2"><span className="text-#A7F3D0">📍</span><span>Luanda, Angola – Ingombotas, Coqueiros</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} MDC Health Services. Todos os direitos reservados.</p>
          <p className="text-xs text-slate-600 flex items-center gap-1">Feito com <Heart className="w-3 h-3 text-red-400 inline" /> para a saúde angolana</p>
          <button onClick={scrollToTop} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 hover:text-#A7F3D0 hover:bg-#6EE7B7/10 hover:border-#6EE7B7/20 transition-all duration-300"><ArrowUp className="w-4 h-4" /></button>
        </div>
      </div>
    </footer>
  );
}
