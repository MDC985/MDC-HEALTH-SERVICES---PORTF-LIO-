import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Target, Eye, Heart, Zap, Scale, Award, UserCheck, Network, GitBranch, ClipboardCheck } from 'lucide-react';

const values = [
  { icon: UserCheck, title: 'Profissionalismo', color: 'from-teal-500 to-teal-600' },
  { icon: Zap, title: 'Eficiência Operacional', color: 'from-blue-500 to-blue-600' },
  { icon: Scale, title: 'Transparência', color: 'from-violet-500 to-violet-600' },
  { icon: Award, title: 'Responsabilidade', color: 'from-amber-500 to-orange-500' },
  { icon: Heart, title: 'Foco na Qualidade Assistencial', color: 'from-rose-500 to-pink-600' },
];

export default function SobreNos() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="sobre" ref={ref} className="relative py-28 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-radial from-teal-600/8 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold mb-4">Quem Somos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Sobre a MDC Health Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-#6EE7B7 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                A <span className="text-white font-semibold">MDC HEALTH SERVICES</span> atua na gestão integrada e coordenação de serviços de saúde, conectando prestadores clínicos, farmacêuticos e operacionais para garantir eficiência, continuidade assistencial e controlo de processos.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                A empresa funciona como estrutura de coordenação operacional entre diferentes unidades de saúde, promovendo organização, fluidez de atendimento e melhoria contínua da qualidade dos serviços prestados.
              </p>
              
              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: Network, text: 'Coordenação Operacional' },
                  { icon: GitBranch, text: 'Integração de Redes' },
                  { icon: ClipboardCheck, text: 'Controlo de Processos' },
                ].map((item, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/8 text-sm text-slate-300">
                    <item.icon className="w-4 h-4 text-teal-400" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-8 hover:border-teal-500/20 transition-all duration-500">
              <div className="absolute -top-px -left-px w-20 h-20 bg-gradient-to-br from-teal-500/30 to-transparent rounded-tl-2xl blur-sm" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-500/5 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Missão</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Garantir a integração eficiente dos serviços de saúde, assegurando qualidade assistencial, organização operacional e melhoria contínua dos processos clínicos.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative rounded-2xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-8 hover:border-emerald-500/20 transition-all duration-500">
              <div className="absolute -top-px -left-px w-20 h-20 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-tl-2xl blur-sm" />
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-#6EE7B7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Visão</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Ser uma referência nacional na coordenação e integração de redes de saúde, contribuindo para sistemas mais eficientes, organizados e sustentáveis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10" style={{ fontFamily: 'var(--font-heading)' }}>Os Nossos Valores</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-br from-[#111d33]/70 to-[#0d1520]/70 border border-white/[0.05] p-6 text-center hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white leading-snug">{value.title}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}