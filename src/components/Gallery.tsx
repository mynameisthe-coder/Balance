import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { url: "/src/assets/images/regenerated_image_1778447656313.png", aspect: "aspect-[3/4]", alt: "Recepción minimalista" },
    { url: "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=1200", aspect: "aspect-[3/4]", alt: "Profesionalidad y técnica" },
    { url: "https://images.unsplash.com/photo-1620916566391-c94111744610?auto=format&fit=crop&q=80&w=1200", aspect: "aspect-video", alt: "Bienestar en Jerez" },
  ];

  return (
    <section className="py-32 bg-brand-beige/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-brand-accent italic mb-6"
          >
            La estética de la calma
          </motion.h2>
          <div className="h-[1px] w-24 bg-brand-accent mx-auto opacity-20" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-[2rem] premium-shadow group bg-brand-sand/20`}
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className={`w-full ${img.aspect} object-cover grayscale-[0.5] group-hover:grayscale-0 transition-opacity duration-700 ease-in-out`}
              />
              {i === 2 && (
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black/30">
                  <p className="text-white font-serif italic text-lg md:text-xl leading-relaxed">
                    "Cada cliente que se echa en mi camilla, es una historia única que merece ser cuidada con amor y excelencia."
                  </p>
                </div>
              )}
              <div className="absolute inset-0 bg-brand-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-[0.3em] font-bold">Ver detalle</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
