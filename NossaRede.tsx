import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { Pill, Building2, MapPin, X, ZoomIn, ExternalLink } from 'lucide-react';

const galeriaItems = [
  {
    id: 1,
    title: 'Clínica Sacrinor',
    subtitle: 'Cacuaco, Luanda',
    category: 'clínica',
    image: '/images/clinica-sacrinor.jpg',
    description: 'Unidade de referência em Cacuaco com equipamentos modernos e equipe qualificada.',
  },
  {
    id: 2,
    title: 'LFARMA - Rede Farmacêutica',
    subtitle: 'Serviços Farmacêuticos',
    category: 'farmácia',
    image: '/images/farma-lfarma.jpg',
    description: 'Gestão integrada de serviços farmacêuticos para clientes particulares e segurados.',
  },
  {
    id: 3,
    title: 'Centro Médico Quixas',
    subtitle: 'Cacuaco, Luanda',
    category: 'clínica',
    image: '/images/centro-medico.jpg',
    description: 'Atendimento médico completo com foco na qualidade assistencial.',
  },
  {
    id: 4,
    title: 'Equipe Multidisciplinar',
    subtitle: 'Profissionais de Saúde',
    category: 'equipe',
    image: '/images/equipe-saude.jpg',
    description: 'Profissionais dedicados à excelência no cuidado ao paciente.',
  },
  {
    id: 5,
    title: 'Laboratório Clínico',
    subtitle: 'Diagnóstico & Análises',
    category: 'laboratório',
    image: '/images/lab-medico.jpg',
    description: 'Equipamentos de última geração para diagnósticos precisos.',
  },
  {
    id: 6,
    title: 'Cuidado ao Paciente',
    subtitle: 'Atendimento Humanizado',
    category: 'cuidado',
    image: '/images/cuidado-paciente.jpg',
    description: 'Foco total no bem-estar e recuperação do paciente.',
  },
];

const categorias = [
  { id: 'todas', label: 'Todas' },
  { id: 'clínica', label: 'Clínicas' },
  { id: 'farmácia', label: 'Farmácia' },
  { id: 'equipe', label: 'Equipe' },
  { id: 'laboratório', label: 'Laboratório' },
  { id: 'cuidado', label: 'Cuidado' },
];

export default function NossaRede() {
  const [ref, inView] = useInView(0.1);
  const [categoriaAtiva, setCategoriaAtiva] = useState('todas');
  const [imagemSelecionada, setImagemSelecionada] = useState<typeof galeriaItems[0] | null>(null);

  const itensFiltrados = categoriaAtiva === 'todas' 
    ? galeriaItems 
    : galeriaItems.filter(item => item.category === categoriaAtiva);

  return (
    <section id="rede" ref={ref} className="relative py-28 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-radial from-blue-600/8 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-teal-400 font-semibold mb-4">Infraestrutura</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Nossa Rede de Prestadores</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Conheça as nossas unidades, instalações e a equipe que faz a diferença na gestão integrada de saúde.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-#6EE7B7 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaAtiva(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                categoriaAtiva === cat.id
                  ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {itensFiltrados.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-[#111d33] border border-white/[0.06] cursor-pointer hover:border-teal-500/30 transition-all duration-500"
              onClick={() => setImagemSelecionada(item)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white capitalize border border-white/10">
                  {item.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Unidades Clínicas' },
            { number: '1+', label: 'Farmácias' },
            { number: '9+', label: 'Departamentos' },
            { number: '24/7', label: 'Disponibilidade' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-#6EE7B7 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {imagemSelecionada && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setImagemSelecionada(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src={imagemSelecionada.image}
                alt={imagemSelecionada.title}
                className="w-full max-h-[70vh] object-contain bg-[#111d33]"
              />
            </div>

            {/* Info below */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{imagemSelecionada.title}</h3>
              <p className="text-slate-400 mt-1">{imagemSelecionada.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}