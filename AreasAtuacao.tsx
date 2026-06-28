import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Settings, Network, ArrowRightLeft, FileSearch, Stethoscope, Pill, Building2, MapPin, Workflow } from 'lucide-react';

const areas = [
  {
    icon: Settings,
    title: 'Gestão Operacional de Serviços de Saúde',
    items: ['Coordenação de fluxos clínicos', 'Organização de processos assistenciais', 'Integração entre unidades prestadoras'],
    color: 'emerald',
  },
  {
    icon: Network,
    title: 'Gestão de Rede de Prestadores de Saúde',
    isNetwork: true,
    color: 'teal',
  },
  {
    icon: ArrowRightLeft,
    title: 'Administração de Fluxos Assistenciais',
    items: ['Coordenação de atendimento entre unidades', 'Gestão de encaminhamentos clínicos', 'Otimização de tempos de resposta'],
    color: 'violet',
  },
  {
    icon: FileSearch,
    title: 'Auditoria e Controlo Operacional',
    items: ['Monitorização de processos clínicos e administrativos', 'Identificação de inconsistências', 'Melhoria contínua da eficiência operacional'],
    color: 'amber',
  },
  {
    icon: Stethoscope,
    title: 'Gestão de Casos Clínicos',
    items: ['Acompanhamento de pacientes em rede', 'Coordenação de tratamentos multidisciplinares', 'Suporte à decisão clínica integrada'],
    color: 'rose',
  },
];

const networkData = {
  farmacia: { name: 'LFARMA, Lda', description: 'Gestão de serviços farmacêuticos para clientes particulares e segurados', extra: 'Integração com processos operacionais e administrativos', icon: Pill },
  clinicas: [
    { name: 'Clínica Sacrinor', location: 'Cacuaco, Luanda' },
    { name: 'Clínica Poli Chekinan', location: 'Ilha de Luanda' },
    { name: 'Centro Médico Quixas', location: 'Cacuaco, Luanda' },
    { name: 'Castilho e Pulido Medical Center', location: 'Viana, Luanda' },
  ],
};

const colorMap: Record<string, { dot: string; bg: string; border: string }> = {
  emerald: { dot: '#6EE7B7', bg: 'bg-#6EE7B7/10', border: 'border-#6EE7B7/20' },
  teal: { dot: '#5EEAD4', bg: 'bg-#99F6E4/10', border: 'border-#99F6E4/20' },
  violet: { dot: '#A78BFA', bg: 'bg-violet-400/10', border: 'border-violet-400/20' },
  amber: { dot: '#FBBF24', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  rose: { dot: '#FB7185', bg: 'bg-rose-400/10', border: 'border-rose-400/20' },
};

export default function AreasAtuacao() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="areas" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/25 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-emerald-400/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">O Que Fazemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Áreas de Atuação</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Uma abordagem completa à gestão integrada de serviços de saúde em Luanda.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {areas.map((area, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.12 }} className="rounded-3xl bg-gradient-to-br from-[#111d33]/80 to-[#0d1520]/80 border border-white/[0.06] backdrop-blur-xl overflow-hidden hover:border-white/15 transition-all duration-500">
              {!area.isNetwork ? (
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-2xl ${colorMap[area.color].bg} border ${colorMap[area.color].border} flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-7 h-7" style={{ color: colorMap[area.color].dot }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{area.title}</h3>
                      <ul className="space-y-3">
                        {area.items!.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colorMap[area.color].dot }} />{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-8 sm:p-10">
                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-#99F6E4/10 border border-#99F6E4/20 flex items-center justify-center shrink-0"><area.icon className="w-7 h-7 text-#99F6E4" /></div>
                    <div><h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{area.title}</h3><p className="text-slate-400 mt-2">Operamos uma rede integrada de prestadores clínicos e farmacêuticos.</p></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-gradient-to-br from-teal-300/10 to-#99F6E4/5 border border-#99F6E4/15 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-#99F6E4/20 flex items-center justify-center"><Pill className="w-5 h-5 text-#99F6E4" /></div>
                        <div><span className="text-xs text-#99F6E4 font-medium uppercase tracking-wider">🏥 Rede Farmacêutica</span><h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{networkData.farmacia.name}</h4></div>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-400"><li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-#99F6E4 shrink-0 mt-0.5" />{networkData.farmacia.description}</li><li className="flex items-start gap-2"><Workflow className="w-4 h-4 text-#99F6E4 shrink-0 mt-0.5" />{networkData.farmacia.extra}</li></ul>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-emerald-300/10 to-#A7F3D0/5 border border-#A7F3D0/15 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-#A7F3D0/20 flex items-center justify-center"><Building2 className="w-5 h-5 text-#A7F3D0" /></div>
                        <span className="text-xs text-#A7F3D0 font-medium uppercase tracking-wider">🏥 Rede de Clínicas e Centros Médicos</span>
                      </div>
                      <ul className="space-y-3">{networkData.clinicas.map((clinica, i) => (<li key={i} className="flex items-center gap-3 text-sm"><div className="w-2 h-2 rounded-full bg-#A7F3D0 shrink-0" /><div><span className="text-white font-medium">{clinica.name}</span><span className="text-slate-500 ml-2">— {clinica.location}</span></div></li>))}</ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
