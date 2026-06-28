import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Sparkles, Link2, MapPin, LayoutGrid, TrendingUp } from 'lucide-react';

const diferenciais = [
  { icon: Sparkles, title: 'Experiência real em operação de rede de saúde', description: 'Anos de atuação no terreno comprovam a nossa capacidade de gestão.' },
  { icon: Link2, title: 'Integração entre farmácia e clínicas', description: 'Uma rede unificada que garante continuidade assistencial completa.' },
  { icon: MapPin, title: 'Conhecimento profundo do sistema de saúde local', description: 'Domínio das particularidades do mercado angolano de saúde.' },
  { icon: LayoutGrid, title: 'Forte capacidade de organização operacional', description: 'Processos estruturados para máxima eficiência e qualidade.' },
  { icon: TrendingUp, title: 'Foco em eficiência e redução de falhas', description: 'Melhoria contínua como pilar fundamental da nossa operação.' },
];

export default function Diferenciais() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="diferenciais" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0b1829] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial from-emerald-400/8 via-transparent to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">Porquê Nos Escolher</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Diferenciais Competitivos</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative rounded-2xl bg-gradient-to-br from-[#111d33]/70 to-[#0d1520]/70 border border-white/[0.05] p-8 hover:border-#6EE7B7/20 hover:bg-white/[0.02] transition-all duration-500 cursor-default">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/15 to-#99F6E4/5 border border-#6EE7B7/15 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><item.icon className="w-7 h-7 text-#A7F3D0" /></div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
