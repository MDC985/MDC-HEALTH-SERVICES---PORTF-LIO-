import { motion } from 'framer-motion';
import { ChevronDown, Shield, Users, Activity, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B1120]">

      {/* BACKGROUND */}
      <div className="absolute inset-0" />

      {/* Glow effects (verde saúde) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2FDABE1A] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2FDABE14] rounded-full blur-3xl" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-[15%] right-[12%] w-16 h-16 rounded-2xl bg-[#2FDABE14] border border-[#2FDABE33] flex items-center justify-center"
        >
          <Shield className="w-8 h-8 text-[#2FDABE]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-[25%] left-[8%] w-14 h-14 rounded-2xl bg-[#2FDABE14] border border-[#2FDABE33] flex items-center justify-center"
        >
          <Users className="w-7 h-7 text-[#2FDABE]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[25%] right-[18%] w-16 h-16 rounded-2xl bg-[#2FDABE14] border border-[#2FDABE33] flex items-center justify-center"
        >
          <Activity className="w-8 h-8 text-[#2FDABE]" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-[35%] left-[15%] w-14 h-14 rounded-2xl bg-[#2FDABE14] border border-[#2FDABE33] flex items-center justify-center"
        >
          <Building2 className="w-7 h-7 text-[#2FDABE]" />
        </motion.div>

      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 pt-28 pb-16">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2FDABE14] border border-[#2FDABE33] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#2FDABE] animate-pulse" />
              <span className="text-sm text-[#94A3B8]">
                Saúde Integrada & Excelência
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-[#F8FAFC]">
              MDC{' '}
              <span className="text-[#2FDABE]">Health</span>
              <br />
              Services
            </h1>

            <p className="text-lg text-[#94A3B8] mb-10 max-w-xl leading-relaxed">
              Gestão integrada e coordenação de serviços de saúde —
              conectando prestadores clínicos, farmacêuticos e operacionais
              para garantir eficiência e qualidade.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="#areas"
                className="px-6 py-4 rounded-xl bg-[#2FDABE] text-[#0B1120] font-semibold hover:opacity-90 transition"
              >
                Conhecer Áreas
              </a>

              <a
                href="#contactos"
                className="px-6 py-4 rounded-xl border border-[#2FDABE33] text-[#F8FAFC] hover:bg-white/5 transition"
              >
                Contactar
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:block">

            <div className="relative w-full aspect-square">

              <div className="absolute inset-0 rounded-full bg-[#2FDABE14] blur-3xl scale-110" />

              <div className="absolute inset-8 rounded-3xl bg-[#111A2E] border border-white/10 p-8">

                <div className="text-[#F8FAFC] font-bold mb-4">
                  MDC Dashboard
                </div>

                <div className="space-y-3">
                  <div className="h-3 w-3/4 bg-white/10 rounded" />
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-5/6 bg-white/5 rounded" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#94A3B8]">
        <ChevronDown className="animate-bounce" />
      </div>

    </section>
  );
}