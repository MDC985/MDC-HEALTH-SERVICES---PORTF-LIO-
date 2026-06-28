import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle2, ArrowRight, Gem } from 'lucide-react';

const propostas = [
  'Integração eficiente de serviços de saúde',
  'Redução de falhas operacionais',
  'Melhoria da experiência do paciente',
  'Organização estruturada da rede clínica',
  'Sustentabilidade operacional dos serviços',
];

export default function PropostaValor() {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1e30] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-400/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="order-2 lg:order-1 relative hidden lg:block">
            <div className="relative max-w-md mx-auto">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300/20 via-#CFFAFE/10 to-transparent blur-2xl animate-pulse" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-300/15 to-#99F6E4/5 border border-#A7F3D0/20 flex items-center justify-center backdrop-blur-sm"><Gem className="w-20 h-20 text-#A7F3D0" /></div>
                {propostas.map((_, i) => (
                  <motion.div key={i} className="absolute w-10 h-10 rounded-full bg-gradient-to-br from-emerald-300/20 to-#CFFAFE/10 border border-#A7F3D0/20 flex items-center justify-center" style={{ top: `${50 + 42 * Math.cos((i * 72 * Math.PI) / 180)}%`, left: `${50 + 42 * Math.sin((i * 72 * Math.PI) / 180)}%`, marginTop: '-5%', marginLeft: '-5%' }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}>
                    <CheckCircle2 className="w-5 h-5 text-#A7F3D0" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="order-1 lg:order-2">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">O Que Entregamos</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Proposta de Valor</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE rounded-full mb-8" />
            <p className="text-lg text-slate-400 leading-relaxed mb-10">A MDC Health Services entrega valor através de:</p>
            <div className="space-y-4">
              {propostas.map((proposta, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/15 to-#99F6E4/5 border border-#6EE7B7/15 flex items-center justify-center shrink-0 group-hover:from-emerald-400/25 group-hover:border-#6EE7B7/30 transition-all duration-300"><CheckCircle2 className="w-5 h-5 text-#A7F3D0" /></div>
                  <span className="text-lg text-slate-300 font-medium group-hover:text-white transition-colors">{proposta}</span>
                  <ArrowRight className="w-4 h-4 text-#A7F3D0/0 group-hover:text-#A7F3D0 group-hover:opacity-100 transition-all duration-300 ml-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
