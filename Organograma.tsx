import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Network, ZoomIn } from 'lucide-react';
import { useState } from 'react';

export default function Organograma() {
  const [ref, inView] = useInView(0.1);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="organograma" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1e30] to-[#0f1f35]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">Estrutura Organizacional</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Organograma</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Conheça a estrutura organizacional da MDC Health Services — 9 departamentos dedicados à excelência na gestão integrada de saúde.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full mt-6" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-4 sm:p-8 shadow-2xl shadow-black/20">
            <div className="absolute -top-px -left-px w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-transparent rounded-tl-3xl blur-sm" />
            <div className="absolute -bottom-px -right-px w-24 h-24 bg-gradient-to-tl from-teal-300/20 to-transparent rounded-br-3xl blur-sm" />

            <div className="flex items-center justify-between mb-6 px-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-#99F6E4/10 border border-#6EE7B7/20 flex items-center justify-center"><Network className="w-5 h-5 text-#A7F3D0" /></div>
                <div><h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>Organograma MDC Health Services</h3><p className="text-xs text-slate-500">Estrutura organizacional completa</p></div>
              </div>
              <button onClick={() => setIsZoomed(!isZoomed)} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-#A7F3D0 hover:border-#6EE7B7/20 transition-all duration-200"><ZoomIn className="w-4 h-4" />{isZoomed ? 'Reduzir' : 'Ampliar'}</button>
            </div>

            <div className={`relative rounded-2xl overflow-hidden bg-white/5 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
              <img src="/uploads/upload_1.png" alt="Organograma da MDC Health Services" className={`w-full object-contain transition-transform duration-500 ${isZoomed ? 'scale-125' : 'scale-100'}`} />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none"><div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-sm text-white text-sm"><ZoomIn className="w-4 h-4" />Clique para {isZoomed ? 'reduzir' : 'ampliar'}</div></div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-#A7F3D0" /> 9 Departamentos</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-400" /> Direção Geral</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-#86EFAC" /> Missão Integrada</span>
              </div>
              <p className="text-xs text-slate-600 italic">"Promover o acesso a serviços de saúde de qualidade, de forma integrada, eficiente e sustentável."</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
