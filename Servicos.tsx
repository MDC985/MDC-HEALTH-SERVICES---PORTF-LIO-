import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { 
  Settings, Network, ArrowRightLeft, FileSearch, Stethoscope,
  Pill, Building2, MapPin, Workflow
} from 'lucide-react';

const servicos = [
  {
    icon: Settings,
    title: 'Gestão Operacional de Serviços de Saúde',
    description: 'Coordenação completa dos fluxos clínicos e organização de processos assistenciais entre unidades.',
    items: ['Coordenação de fluxos clínicos', 'Organização de processos assistenciais', 'Integração entre unidades prestadoras'],
    color: 'teal',
  },
  {
    icon: ArrowRightLeft,
    title: 'Administração de Fluxos Assistenciais',
    description: 'Gestão inteligente do atendimento e encaminhamentos para otimização de tempos de resposta.',
    items: ['Coordenação de atendimento entre unidades', 'Gestão de encaminhamentos clínicos', 'Otimização de tempos de resposta'],
    color: 'violet',
  },
  {
    icon: FileSearch,
    title: 'Auditoria e Controlo Operacional',
    description: 'Monitorização rigorosa para identificação de inconsistências e melhoria contínua.',
    items: ['Monitorização de processos clínicos e administrativos', 'Identificação de inconsistências', 'Melhoria contínua da eficiência'],
    color: 'amber',
  },
  {
    icon: Stethoscope,
    title: 'Gestão de Casos Clínicos',
    description: 'Acompanhamento integral do paciente com coordenação multidisciplinar.',
    items: ['Acompanhamento de pacientes em rede', 'Coordenação de tratamentos multidisciplinares', 'Suporte à decisão clínica integrada'],
    color: 'rose',
  },
];

const networkData = {
  farmacia: {
    name: 'LFARMA, Lda',
    description: 'Gestão de serviços farmacêuticos para clientes particulares e segurados',
    extra: 'Integração com processos operacionais e administrativos',
    icon: Pill,
  },
  clinicas: [
    { name: 'Clínica Sacrinor', location: 'Cacuaco, Luanda' },
    { name: 'Clínica Poli Chekinan', location: 'Ilha de Luanda' },
    { name: 'Centro Médico Quixas', location: 'Cacuaco, Luanda' },
    { name: 'Castilho e Pulido Medical Center', location: 'Viana, Luanda' },
  ],
};

const colorMap: Record<string, { accent: string; bg: string; border: string; dot: string }> = {
  teal: { accent: 'teal', bg: 'bg-teal-500/10', border: 'border-teal-500/20', dot: '#14b8a6' },
  violet: { accent: 'violet', bg: 'bg-violet-500/10', border: 'border-violet-500/20', dot: '#8b5cf6' },
  amber: { accent: 'amber', bg: 'bg-amber-500/10', border: 'border-amber-500/20', dot: '#f59e0b' },
  rose: { accent: 'rose', bg: 'bg-rose-500/10', border: 'border-rose-500/20', dot: '#f43f5e' },
};

export default function Servicos() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="servicos" ref={ref} className="relative py-28 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1a2e] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-radial from-teal-600/8 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold mb-4">O Que Fazemos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Nossos Serviços</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Uma abordagem completa à gestão integrada de serviços de saúde em Luanda.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-#6EE7B7 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid - No images, clean cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`group relative rounded-2xl bg-gradient-to-br from-[#111d33]/80 to-[#0d1520]/80 border border-white/[0.06] backdrop-blur-xl p-8 hover:border-${colorMap[servico.color].accent}-500/20 transition-all duration-500`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${colorMap[servico.color].bg} border ${colorMap[servico.color].border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <servico.icon className="w-7 h-7 text-white" style={{ color: colorMap[servico.color].dot }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{servico.title}</h3>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{servico.description}</p>
                  <ul className="space-y-2">
                    {servico.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colorMap[servico.color].dot }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-gradient-to-br from-[#111d33]/80 to-[#0d1520]/80 border border-white/[0.06] backdrop-blur-xl p-8 sm:p-10"
        >
          <div className="flex items-start gap-5 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Network className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Gestão de Rede de Prestadores de Saúde</h3>
              <p className="text-slate-400">Operamos uma rede integrada de prestadores clínicos e farmacêuticos em Luanda.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Farmácia Card */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/15 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Pill className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">🏥 Rede Farmacêutica</span>
                  <h4 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{networkData.farmacia.name}</h4>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{networkData.farmacia.description}</li>
                <li className="flex items-start gap-2"><Workflow className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{networkData.farmacia.extra}</li>
              </ul>
            </div>

            {/* Clínicas Card */}
            <div className="rounded-2xl bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/15 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-teal-400" />
                </div>
                <span className="text-xs text-teal-400 font-medium uppercase tracking-wider">🏥 Rede de Clínicas e Centros Médicos</span>
              </div>
              <ul className="space-y-3">
                {networkData.clinicas.map((clinica, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <div>
                      <span className="text-white font-medium">{clinica.name}</span>
                      <span className="text-slate-500 ml-2">— {clinica.location}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}