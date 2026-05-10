import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Differential() {
  const points = [
    'Atención totalmente personalizada',
    'Tratamientos adaptados a cada persona',
    'Ambiente exclusivo y relajante',
    'Profesional altamente valorado',
    'Mejora física desde la primera sesión',
    'Experiencia premium desde que entras',
  ];

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/2 h-[50vh] md:h-screen sticky top-0 bg-brand-sand/20">
        <img
          src="/src/assets/images/regenerated_image_1778446999253.png"
          alt="Tratamiento profesional BALANCE"
          className="w-full h-full object-cover transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-accent/20" />
        
        {/* Statistics Overlay */}
        <div className="absolute bottom-12 left-12 grid grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-effect p-8 rounded-3xl"
          >
            <span className="block text-4xl font-serif text-white mb-2">50+</span>
            <span className="text-[10px] uppercase tracking-widest text-white/70">Clientes Premium</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-effect p-8 rounded-3xl"
          >
            <span className="block text-4xl font-serif text-white mb-2">10/10</span>
            <span className="text-[10px] uppercase tracking-widest text-white/70">Satisfacción</span>
          </motion.div>
        </div>
      </div>

      {/* Content Side */}
      <div className="md:w-1/2 bg-brand-accent text-white flex items-center justify-center p-12 lg:p-24">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-sand/60 mb-8 block font-bold">
            ¿Por qué BALANCE?
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mb-12 leading-[0.95] tracking-tighter">
            Mucho más <br />
            <span className="italic">que un masaje.</span>
          </h2>
          
          <div className="space-y-10">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-sand/20 flex items-center justify-center transition-all duration-500 group-hover:border-brand-sand">
                  <div className="w-1.5 h-1.5 bg-brand-sand rounded-full opacity-40 group-hover:opacity-100" />
                </div>
                <span className="text-lg font-light text-white/70 group-hover:text-white transition-colors uppercase tracking-[0.1em]">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 p-8 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-sm"
            whileHover={{ scale: 1.02 }}
          >
            <p className="italic text-brand-sand/80 font-serif text-xl border-l-2 border-brand-sand pl-6">
              "Mi objetivo es que te sientas renovado no solo físicamente, sino que encuentres ese refugio mental que todos necesitamos."
            </p>
            <p className="mt-4 text-xs uppercase tracking-widest text-right">— Ignacio, Director de BALANCE</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
