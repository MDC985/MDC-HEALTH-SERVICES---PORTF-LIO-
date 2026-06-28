import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contactos() {
  const [ref, inView] = useInView(0.15);
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const contactInfo = [
    { icon: Phone, title: 'Telefone', value: '+244 949 236 002 / 926 733 314', href: 'tel:+244949236002' },
    { icon: Mail, title: 'Email', value: 'mdchealthservices@gmail.com', href: 'mailto:mdchealthservices@gmail.com' },
    { icon: MapPin, title: 'Localização', value: 'Luanda, Angola – Ingombotas, Coqueiros', href: '#localizacao' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => { setEnviado(false); setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); }, 3000);
  };

  return (
    <section id="contactos" ref={ref} className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0b1a2d] to-[#0a1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-#A7F3D0/25 to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-[700px] h-[700px] bg-gradient-radial from-emerald-400/8 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-#A7F3D0 font-semibold mb-4">Fale Connosco</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Contactos</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Estamos prontos para atender às suas necessidades de gestão integrada de saúde.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-300 to-#CFFAFE mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-5">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.href} className="group flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-[#111d33]/70 to-[#0d1520]/70 border border-white/[0.05] hover:border-#6EE7B7/20 hover:bg-white/[0.04] transition-all duration-300 block">
                <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-emerald-400/15 to-#99F6E4/5 border border-#6EE7B7/15 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"><info.icon className="w-6 h-6 text-#A7F3D0" /></div>
                <div><h4 className="text-sm text-slate-500 uppercase tracking-wider mb-1">{info.title}</h4><p className="text-white font-medium leading-relaxed">{info.value}</p></div>
              </a>
            ))}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-#99F6E4/5 border border-#6EE7B7/15">
              <div className="flex items-center gap-3 mb-3"><Clock className="w-5 h-5 text-#A7F3D0" /><h4 className="text-sm text-#A7F3D0 font-semibold uppercase tracking-wider">Horário</h4></div>
              <p className="text-slate-300 text-sm">Seg-Sexta: <span className="text-white font-medium">08:00 - 18:00</span><br />Sábado: <span className="text-white font-medium">09:00 - 13:00</span></p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-3xl bg-gradient-to-br from-[#111d33]/80 to-[#0d1520]/80 border border-white/[0.06] backdrop-blur-xl p-8 sm:p-10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Envie-nos uma Mensagem</h3>
              <p className="text-sm text-slate-500 mb-6">Preencha o formulário abaixo e entraremos em contacto consigo.</p>
              {enviado && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 p-4 rounded-xl bg-#6EE7B7/10 border border-#6EE7B7/20 text-#D1FAE5 text-sm font-medium">✅ Mensagem enviada com sucesso! Entraremos em contacto em breve.</motion.div>)}
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-sm text-slate-400 mb-2 font-medium">Nome Completo *</label><input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-#6EE7B7/50 focus:ring-1 focus:ring-#6EE7B7/25 transition-all duration-200" placeholder="O seu nome" /></div>
                <div><label className="block text-sm text-slate-400 mb-2 font-medium">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-#6EE7B7/50 focus:ring-1 focus:ring-#6EE7B7/25 transition-all duration-200" placeholder="seu@email.com" /></div>
              </div>
              <div><label className="block text-sm text-slate-400 mb-2 font-medium">Telefone</label><input type="tel" value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-#6EE7B7/50 focus:ring-1 focus:ring-#6EE7B7/25 transition-all duration-200" placeholder="+244 XXX XXX XXX" /></div>
              <div><label className="block text-sm text-slate-400 mb-2 font-medium">Mensagem *</label><textarea required rows={5} value={formData.mensagem} onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })} className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-#6EE7B7/50 focus:ring-1 focus:ring-#6EE7B7/25 transition-all duration-200 resize-none" placeholder="Como podemos ajudar?" /></div>
              <button type="submit" disabled={enviado} className={`group w-full flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-300 ${enviado ? 'bg-#6EE7B7 text-[#0a1628] shadow-#6EE7B7/25 cursor-default' : 'bg-gradient-to-r from-emerald-400 to-#99F6E4 text-[#0a1628] shadow-#6EE7B7/25 hover:shadow-xl hover:shadow-#6EE7B7/35 hover:-translate-y-0.5'}`}>
                {enviado ? <><span>Mensagem Enviada!</span><span>✓</span></> : <><Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />Enviar Mensagem</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
