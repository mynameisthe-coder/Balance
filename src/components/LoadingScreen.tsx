import { motion } from 'motion/react';
import Logo from './Logo';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-brand-offwhite flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo className="h-24 md:h-32 w-auto text-brand-accent mx-auto" />
        </motion.div>
        
        <div className="w-48 h-[1px] bg-brand-beige mx-auto relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-1/2 h-full bg-brand-accent/20"
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-[10px] uppercase tracking-[0.3em] text-brand-muted"
        >
          Calibrando tu bienestar
        </motion.p>
      </div>
    </motion.div>
  );
}
