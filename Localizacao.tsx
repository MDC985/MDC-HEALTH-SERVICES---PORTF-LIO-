import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Navigation, Phone, Clock, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Ingombotas+Coqueiros+Luanda+Angola';
const GOOGLE_MAPS_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2909!2d13.230!3d-8.815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnNTQuMCJTIDEzwrAxMyc0OC4wIkU!5e0!3m2!1spt-2!2sao!4v1700000000000!5m2!1spt-2!2sao';

export default function Localizacao() {
  const [ref, inView] = useInView(0.15);

  return (
    <section id="localizacao" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1e30] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">Onde Estamos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Nossa Localização</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Visite-nos em Luanda ou navegue diretamente até nós pelo Google Maps.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#111d33]/90 to-[#0d1520]/90 border border-white/[0.06] backdrop-blur-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-#99F6E4/10 border border-#6EE7B7/20 flex items-center justify-center"><MapPin className="w-7 h-7 text-#A7F3D0" /></div>
                <div><h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>Escritório Central</h3><p className="text-sm text-slate-500">Sede Administrativa</p></div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"><MapPin className="w-5 h-5 text-#A7F3D0 shrink-0 mt-0.5" /><div><div className="text-sm text-slate-500 mb-1">Endereço</div><div className="text-white font-medium">Luanda, Angola – Ingombotas, Coqueiros</div></div></div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"><Phone className="w-5 h-5 text-#A7F3D0 shrink-0 mt-0.5" /><div><div className="text-sm text-slate-500 mb-1">Telefone</div><div className="text-white font-medium">+244 949 236 002 / +244 926 733 314</div></div></div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5"><Clock className="w-5 h-5 text-#A7F3D0 shrink-0 mt-0.5" /><div><div className="text-sm text-slate-500 mb-1">Horário de Funcionamento</div><div className="text-white font-medium">Seg-Sex: <span className="text-#A7F3D0">08:00 – 18:00</span><br />Sáb: <span className="text-#A7F3D0">09:00 – 13:00</span></div></div></div>
              </div>
            </div>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 w-full p-5 rounded-2xl bg-gradient-to-r from-emerald-400 to-#99F6E4 text-[#0a1628] font-semibold shadow-lg shadow-#6EE7B7/25 hover:shadow-xl hover:shadow-#6EE7B7/35 hover:-translate-y-0.5 transition-all duration-300"><Navigation className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />Abrir no Google Maps<ExternalLink className="w-4 h-4" /></a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/20 group">
              <iframe src={GOOGLE_MAPS_EMBED_URL} width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização MDC Health Services - Ingombotas, Coqueiros, Luanda, Angola" className="w-full min-h-[500px]" />
              <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/10" />
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a1628]/90 backdrop-blur-md border border-white/10 text-sm text-white font-medium hover:bg-#6EE7B7 hover:border-#6EE7B7 hover:text-[#0a1628] transition-all duration-300 shadow-lg"><Navigation className="w-4 h-4" />Como Chegar</a>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="mt-14">
          <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>Todas as Nossas Unidades</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'Clínica Sacrinor', location: 'Cacuaco, Luanda', type: 'Clínica' },
              { name: 'Clínica Poli Chekinan', location: 'Ilha de Luanda', type: 'Clínica' },
              { name: 'Centro Médico Quixas', location: 'Cacuaco, Luanda', type: 'Centro Médico' },
              { name: 'Castilho e Pulido MC', location: 'Viana, Luanda', type: 'Medical Center' },
              { name: 'LFARMA, Lda', location: 'Luanda', type: 'Farmácia' },
              { name: 'Sede MDC Health', location: 'Ingombotas, Coqueiros', type: 'Escritório Central', highlight: true },
            ].map((unit, i) => (
              <div key={i} className={`group relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer hover:-translate-y-1 ${unit.highlight ? 'bg-gradient-to-br from-emerald-400/10 to-#99F6E4/5 border-#6EE7B7/20' : 'bg-[#111d33]/70 border-white/[0.05] hover:border-white/15'}`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${unit.highlight ? 'bg-#6EE7B7/20' : 'bg-white/5'}`}><MapPin className={`w-5 h-5 ${unit.highlight ? 'text-#A7F3D0' : 'text-slate-400 group-hover:text-#A7F3D0'} transition-colors`} /></div>
                  <div><h4 className={`font-semibold ${unit.highlight ? 'text-#A7F3D0' : 'text-white group-hover:text-#A7F3D0'} transition-colors`} style={{ fontFamily: 'var(--font-heading)' }}>{unit.name}</h4><p className="text-sm text-slate-500 mt-0.5">{unit.location}</p><span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${unit.highlight ? 'bg-#6EE7B7/20 text-#D1FAE5' : 'bg-white/5 text-slate-500'}`}>{unit.type}</span></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
