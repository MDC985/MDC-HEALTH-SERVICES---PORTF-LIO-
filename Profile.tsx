import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Network, GitBranch, ClipboardCheck } from 'lucide-react';

export default function Profile() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="perfil" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Sem espaçamento excessivo - vem logo após Hero */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#6EE7B7/25 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-emerald-400/8 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">
                Quem Somos
              </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Perfil da Empresa
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-gradient-to-br from-[#111d33]/80 to-[#0d1520]/80 border border-white/[0.06] backdrop-blur-xl p-10 sm:p-14 shadow-2xl shadow-black/20">
            <div className="absolute -top-px -left-px w-32 h-32 bg-gradient-to-br from-emerald-400/30 to-transparent rounded-tl-3xl blur-sm" />
            <div className="absolute -bottom-px -right-px w-32 h-32 bg-gradient-to-tl from-teal-300/20 to-transparent rounded-br-3xl blur-sm" />

            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="hidden md:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-#99F6E4/10 border border-#6EE7B7/20 items-center justify-center shrink-0">
                <Network className="w-10 h-10 text-#A7F3D0" />
              </div>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                  A <span className="text-white font-semibold">MDC HEALTH SERVICES</span> atua na gestão integrada e coordenação de serviços de saúde, conectando prestadores clínicos, farmacêuticos e operacionais para garantir eficiência, continuidade assistencial e controlo de processos.
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  A empresa funciona como estrutura de coordenação operacional entre diferentes unidades de saúde, promovendo organização, fluidez de atendimento e melhoria contínua da qualidade dos serviços prestados.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { icon: Network, text: 'Coordenação Operacional' },
                    { icon: GitBranch, text: 'Integração de Redes' },
                    { icon: ClipboardCheck, text: 'Controlo de Processos' },
                  ].map((item, i) => (
                    <div key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-slate-300">
                      <item.icon className="w-4 h-4 text-#A7F3D0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
