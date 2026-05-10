import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 md:py-40 px-6 bg-brand-offwhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
        {/* Visual Composition */}
        <div className="flex-1 grid grid-cols-12 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="col-span-8 aspect-[4/5] rounded-[2rem] overflow-hidden premium-shadow bg-brand-sand/30"
          >
            <img
              src="/src/assets/images/regenerated_image_1778446996544.png"
              alt="Zona de espera minimalista BALANCE"
              className="w-full h-full object-cover transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="col-span-4 self-end aspect-square rounded-[2rem] overflow-hidden premium-shadow mb-[-10%] bg-brand-sand/50"
          >
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
              alt="Detalles de bienestar en BALANCE"
              className="w-full h-full object-cover transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Textual Content */}
        <div className="flex-1 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-brand-accent/40 font-bold mb-8 block">
              La Filosofía BALANCE
            </span>
            <h2 className="text-5xl md:text-6xl font-serif leading-[1.1] mb-10 text-brand-accent tracking-tighter">
              Un ritual de <br />
              <span className="italic">bienestar absoluto.</span>
            </h2>
            <div className="space-y-8 text-brand-accent/70 leading-relaxed font-light text-base max-w-md">
              <p>
                En BALANCE | Estudio profesional de masaje somos especialistas en masajes deportivos, relajantes y de descarga muscular, enfocados en ofrecer resultados reales y una experiencia exclusiva. Situados en la Urbanización El Bosque (Jerez de la Frontera), destacamos por nuestra profesionalidad, seriedad y trato personalizado, en un espacio diseñado para el bienestar y la calma.
              </p>
              <p>
                Cada sesión tiene una duración de 50 minutos, combinando técnica, dedicación y atención al detalle. Reserva fácilmente tu sesión por WhatsApp al 664 534 245 para disfrutar de un momento único pensado para ti y descubre por qué BALANCE es el estudio de masajes de referencia en Jerez de la Frontera.
              </p>
            </div>
            
            <motion.a
              href="https://wa.me/c/34664534245"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 text-brand-accent font-medium group mt-8"
            >
              <span className="text-xs uppercase tracking-[0.2em]">Reserva tu Experiencia</span>
              <div className="w-10 h-10 rounded-full border border-brand-accent/20 flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
                <span className="text-sm">→</span>
              </div>
            </motion.a>
            
            <motion.div 
              className="mt-16 flex items-center gap-6 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="h-[1px] w-20 bg-brand-accent group-hover:w-28 transition-all duration-700" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">El Estudio</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
