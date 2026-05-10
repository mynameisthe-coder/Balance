import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    { name: "Juan Carlos Valle Soto", text: "La experiencia no ha podido ser mejor, profesional de 10 y trato muy cercano. Se nota que ama su trabajo, y eso es difícil encontrarlo hoy en día.", rating: 5 },
    { name: "Soledad Tordesilla", text: "He tenido una experiencia de diez y no puedo más que recomendarlo. Llegué con un dolor de espalda bastante fuerte y en una sola sesión me dejó muchísimo mejor.", rating: 5 },
    { name: "Armando Mesa", text: "Ponerse en las manos de Ignacio es ponerse en las manos de un PROFESIONAL con un trato exquisito. Sentirse 'en casa' y mejorar tanto: 1000/10.", rating: 5 },
    { name: "Maria García Sánchez", text: "La experiencia ha sido increíble. Desde el primer momento transmite una energía brutal, que te hace sentir mejor incluso antes de empezar el masaje.", rating: 5 },
    { name: "Rocky Rasakith", text: "Como deportista, Ignacio ofrece un masaje deportivo excepcional, trabajando las zonas correctas con precisión y conocimiento real. Muy recomendable.", rating: 5 },
    { name: "Lola Fernandez Diaz", text: "Experiencia fantástica. El masaje de drenaje linfático fue muy efectivo, noté alivio y ligereza inmediatamente. Me sentí en buenas manos.", rating: 5 },
    { name: "Daniel Cárdenas García", text: "He entrado con cansancio y estrés y he salido como nuevo y contento. Se nota que el chaval es un profesional de los pies a la cabeza.", rating: 5 },
    { name: "Francisco Escot", text: "Hacía mucho tiempo que no me encontraba con un gran profesional en este campo. Lo recomiendo totalmente.", rating: 5 },
  ];

  return (
    <section id="testimonios" className="py-32 px-6 bg-brand-accent text-brand-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.3em] text-brand-sand/60 font-bold block mb-6"
            >
              La Voz de la Experiencia
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif leading-tight"
            >
              Lo que <span className="italic">dicen</span> <br />
              de nosotros.
            </motion.h2>
          </div>
          <div className="flex flex-col items-end gap-2 mb-2">
            <div className="flex gap-1 text-brand-sand">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-[9px] font-bold tracking-[0.2em] opacity-40 uppercase">Google Reviews 4.9/5</span>
          </div>
        </div>

        {/* Endless Marquee for Testimonials */}
        <div className="relative flex overflow-hidden py-12">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 px-4"
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[400px] border border-white/10 p-12 rounded-sm bg-white/5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-8 text-brand-sand/40">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-2xl font-serif italic text-white/90 mb-12 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex justify-between items-end border-t border-white/5 pt-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-sand">{review.name}</p>
                    <p className="text-[9px] opacity-30 uppercase tracking-widest mt-1">Google Review</p>
                  </div>
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[9px] italic opacity-40">
                    Balance
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
