import { motion } from 'motion/react';
import { Activity, ShieldCheck, Zap, Droplets, Waves, Thermometer } from 'lucide-react';

export default function Services() {
  const catalog = [
    {
      category: 'Masajes BALANCE',
      items: [
        { title: 'Masaje Deportivo', desc: 'Enfocado en mejorar el rendimiento.', price: '45€' },
        { title: 'Masaje Relajante', desc: 'Diseñado para aliviar el estrés.', price: '45€' },
        { title: 'Masaje Descarga Muscular', desc: 'Ideal para eliminar sobrecargas.', price: '45€' },
      ]
    },
    {
      category: 'Técnicas BALANCE',
      items: [
        { title: 'Presoterapia', desc: 'Mejora el aspecto corporal y circulación.', price: '45€' },
        { title: 'Drenaje Linfático', desc: 'Masaje suave y rítmico.', price: '45€' },
        { title: 'Piedras Calientes', desc: 'Calor y bienestar profundo.', price: '45€' },
        { title: 'BALANCE Cupping', desc: 'Técnica con ventosas.', price: '—' },
      ]
    },
    {
      category: 'BALANCE Premium',
      items: [
        { title: 'Masaje Personalizado', desc: 'Técnicas adaptadas a cada persona.', price: '50€' },
      ]
    },
    {
      category: 'Bonos & Especiales',
      items: [
        { title: 'BALANCE 4', desc: 'Bono de 4 sesiones de 50 min.', price: '175€' },
        { title: 'Masaje a Domicilio', desc: 'Servicio en Jerez de la Frontera.', price: '55€' },
      ]
    }
  ];

  return (
    <section id="tratamientos" className="py-40 px-6 bg-brand-offwhite">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-accent/40 font-bold block mb-4"
          >
            Catálogo BALANCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif tracking-tighter"
          >
            Catálogo que <br /><span className="italic">elevan tu estado.</span>
          </motion.h2>
        </div>

        <div className="space-y-20">
          {catalog.map((group, groupIdx) => (
            <div key={group.category}>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-30 border-b border-brand-accent/5 pb-4"
              >
                {group.category}
              </motion.h3>
              <div className="space-y-2">
                {group.items.map((t, i) => (
                  <motion.a
                    key={t.title}
                    href="https://wa.me/c/34664534245"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-brand-accent/10 hover:px-4 transition-all duration-500"
                  >
                    <div className="flex flex-col gap-1">
                      <h4 className="text-2xl font-serif group-hover:italic transition-all duration-500">
                        {t.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-brand-accent/40">
                        {t.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-12 mt-4 md:mt-0">
                      <span className="text-lg font-serif italic text-brand-accent/60">{t.price}</span>
                      <div className="w-10 h-10 rounded-full border border-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all transform group-hover:rotate-45">
                        <span className="text-xs transition-transform">→</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
