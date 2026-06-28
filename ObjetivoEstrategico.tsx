import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Crosshair } from 'lucide-react';

export default function ObjetivoEstrategico() {
  const [ref, inView] = useInView(0.2);

  return (
    <section ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="relative rounded-3xl bg-gradient-to-br from-[#0d2137] via-[#111d33] to-[#0d1520] border border-#6EE7B7/15 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-300 via-#CFFAFE to-#BBF7D0" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-400/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-teal-300/10 to-transparent rounded-tr-full" />

          <div className="relative p-10 sm:p-16 text-center">
            <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : { scale: 0 }} transition={{ duration: 0.5, delay: 0.2, type: "spring" }} className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-#99F6E4/10 border border-#6EE7B7/25 flex items-center justify-center mx-auto mb-8"><Crosshair className="w-10 h-10 text-#A7F3D0" /></motion.div>
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">O Nosso Norte</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Objetivo Estratégico</h2>
            <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Consolidar uma <span className="text-#A7F3D0 font-semibold">rede integrada de serviços de saúde</span> em Luanda, atuando como núcleo de coordenação entre clínicas, farmácias e prestadores, garantindo{' '}
              <span className="text-#CFFAFE font-semibold">eficiência operacional</span> e{' '}
              <span className="text-#BBF7D0 font-semibold">continuidade assistencial</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[{ label: 'Luanda', icon: '📍' }, { label: 'Rede Integrada', icon: '🔗' }, { label: 'Eficiência', icon: '⚡' }, { label: 'Qualidade', icon: '✨' }].map((point, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/8 text-sm text-slate-300"><span>{point.icon}</span>{point.label}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
