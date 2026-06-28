import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Users, Building2, Pill, Receipt, Workflow } from 'lucide-react';

const experiencias = [
  { icon: Users, text: 'Gestão de pacientes segurados e particulares' },
  { icon: Building2, text: 'Coordenação de múltiplas unidades clínicas' },
  { icon: Pill, text: 'Integração farmacêutica e clínica' },
  { icon: Receipt, text: 'Gestão de faturação e processos administrativos' },
  { icon: Workflow, text: 'Otimização de fluxos assistenciais' },
];

export default function Experiencia() {
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">No Terreno</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Experiência Operacional</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE rounded-full mb-8" />
            <p className="text-lg text-slate-400 leading-relaxed mb-10">Com experiência comprovada na gestão integrada de serviços de saúde, a MDC Health Services oferece soluções completas para otimizar a operação da sua rede.</p>
            <div className="space-y-4">
              {experiencias.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] hover:border-#6EE7B7/15 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400/15 to-#99F6E4/5 border border-#6EE7B7/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"><exp.icon className="w-5 h-5 text-#A7F3D0" /></div>
                  <span className="text-slate-300 font-medium">{exp.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="relative hidden lg:block">
            <div className="relative aspect-square max-w-[480px] mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-#99F6E4/10 to-#BBF7D0/10 blur-2xl" />
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#111d33] to-[#0d1520] border border-white/[0.08] p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm text-slate-500 font-medium">Experiência Operacional</div>
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/60" /><div className="w-3 h-3 rounded-full bg-yellow-500/60" /><div className="w-3 h-3 rounded-full bg-#A7F3D0/80" /></div>
                </div>
                <div className="flex-1 space-y-4">
                  {[
                    { label: 'Gestão de Pacientes', width: '95%', color: 'from-emerald-300 to-#6EE7B7' },
                    { label: 'Coordenação Clínica', width: '88%', color: 'from-teal-300 to-teal-400' },
                    { label: 'Integração Farmacêutica', width: '82%', color: 'from-green-300 to-green-400' },
                    { label: 'Processos Administrativos', width: '90%', color: 'from-cyan-300 to-cyan-400' },
                    { label: 'Otimização de Fluxos', width: '85%', color: 'from-lime-300 to-lime-400' },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-slate-400">{bar.label}</span><span className="text-slate-500">{bar.width}</span></div>
                      <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={inView ? { width: bar.width } : { width: 0 }} transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: "easeOut" }} className={`h-full rounded-full bg-gradient-to-r ${bar.color}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-sm text-slate-500">Competências Operacionais</div>
                  <div className="px-3 py-1.5 rounded-lg bg-#6EE7B7/10 border border-#6EE7B7/20 text-xs text-#A7F3D0 font-semibold">ATIVO</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
