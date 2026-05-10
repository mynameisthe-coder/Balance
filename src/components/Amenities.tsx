import { motion } from 'motion/react';
import { Accessibility, CalendarCheck, CreditCard, Car, Building2, Smartphone } from 'lucide-react';

export default function Amenities() {
  const categories = [
    {
      title: 'Accesibilidad',
      icon: Accessibility,
      items: ['Acceso para sillas de ruedas', 'Aseo adaptado']
    },
    {
      title: 'Planificación',
      icon: CalendarCheck,
      items: ['Se necesita cita previa']
    },
    {
      title: 'Pagos',
      icon: CreditCard,
      items: ['NFC con móvil', 'Crédito y Débito']
    },
    {
      title: 'Aparcamiento',
      icon: Car,
      items: ['Gratuito en la calle']
    }
  ];

  return (
    <section className="py-24 bg-brand-offwhite border-y border-brand-accent/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="flex flex-col items-center lg:items-start group"
            >
              <div className="w-12 h-12 rounded-full border border-brand-accent/5 flex items-center justify-center mb-8 group-hover:border-brand-accent/20 transition-all duration-500">
                <cat.icon size={18} strokeWidth={1} className="text-brand-accent/40 group-hover:text-brand-accent transition-colors" />
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                {cat.title}
              </h4>
              <ul className="space-y-3 text-center lg:text-left">
                {cat.items.map((item) => (
                  <li key={item} className="text-[11px] uppercase tracking-widest font-medium text-brand-accent/70">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
