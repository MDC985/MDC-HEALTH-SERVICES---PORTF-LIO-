import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Target, Eye, Heart, Zap, Scale, Award, UserCheck } from 'lucide-react';

const values = [
  { icon: UserCheck, title: 'Profissionalismo', color: 'from-emerald-300 to-#99F6E4' },
  { icon: Zap, title: 'Eficiência Operacional', color: 'from-teal-300 to-cyan-300' },
  { icon: Scale, title: 'Transparência', color: 'from-violet-400 to-purple-400' },
  { icon: Award, title: 'Responsabilidade', color: 'from-amber-400 to-orange-400' },
  { icon: Heart, title: 'Foco na Qualidade Assistencial', color: 'from-rose-400 to-pink-400' },
];

export default function MissionVisionValues() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="missao" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1a2e] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">
                Nossa Essência
              </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Missão, Visão e Valores
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="group relative rounded-3xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-10 hover:border-#6EE7B7/20 transition-all duration-500"
          >
            <div className="absolute -top-px -left-px w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-transparent rounded-tl-3xl blur-sm" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-#6EE7B7/5 border border-#6EE7B7/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-8 h-8 text-#A7F3D0" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Missão</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Garantir a integração eficiente dos serviços de saúde, assegurando qualidade assistencial, organização operacional e melhoria contínua dos processos clínicos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="group relative rounded-3xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-10 hover:border-#99F6E4/20 transition-all duration-500"
          >
            <div className="absolute -top-px -left-px w-24 h-24 bg-gradient-to-br from-teal-300/30 to-transparent rounded-tl-3xl blur-sm" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-300/20 to-#99F6E4/5 border border-#99F6E4/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="w-8 h-8 text-#99F6E4" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Visão</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Ser uma referência nacional na coordenação e integração de redes de saúde, contribuindo para sistemas mais eficientes, organizados e sustentáveis.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Os Nossos Valores
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-br from-[#111d33]/70 to-[#0d1520]/70 border border-white/[0.05] p-6 text-center hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 cursor-default"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} bg-opacity-15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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
