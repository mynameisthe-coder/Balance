import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0 bg-brand-accent">
        <img
          src="/src/assets/images/regenerated_image_1778446996544.png"
          alt="Sala de masajes premium BALANCE"
          className="w-full h-full object-cover object-center scale-105 animate-[zoom-out_20s_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-accent/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif mb-10 leading-[0.95] tracking-tighter">
            Estudio profesional <br className="hidden md:block" />
            <span className="italic font-light">de masajes</span> en Jerez
          </h1>
          <p className="text-sm md:text-base font-light mb-14 max-w-md mx-auto opacity-70 leading-relaxed uppercase tracking-wider">
            MASAJES PROFESIONALES EN UN ESPACIO DISEÑADO PARA DESCONECTAR DEL RITMO DIARIO.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="https://wa.me/c/34664534245"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 bg-white text-brand-accent rounded-full uppercase tracking-[0.2em] text-[10px] font-bold transition-all inline-block"
            >
              Reservar Sesión
            </motion.a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-white/30"></div>
              <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">Desde 45€ / Sesión</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/60 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest">Desliza para explorar</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MousePointer2 size={20} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes zoom-out {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
      `}} />
    </section>
  );
}
