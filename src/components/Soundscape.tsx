import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Leaf } from 'lucide-react';

export default function Soundscape() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Fuente de audio: Atmósfera de bosque, aves y naturaleza relajante (Selección IA para ambiente spa premium)
  const audioUrl = "https://assets.mixkit.co/active_storage/sfx/2434/2434-preview.mp3";

  const fadeAudio = (audioElement: HTMLAudioElement, targetVolume: number, duration: number = 1000) => {
    const startVolume = audioElement.volume;
    const volumeChange = targetVolume - startVolume;
    const updateInterval = 50;
    const steps = duration / updateInterval;
    const stepChange = volumeChange / steps;
    
    let currentStep = 0;
    
    const fadeInterval = setInterval(() => {
      currentStep++;
      let newVolume = startVolume + (stepChange * currentStep);
      
      // Aseguramos de no salirnos de los límites [0, 1]
      newVolume = Math.min(Math.max(newVolume, 0), 1);
      audioElement.volume = newVolume;
      
      if (currentStep >= steps) {
        clearInterval(fadeInterval);
        if (targetVolume === 0) {
          audioElement.pause();
        }
      }
    }, updateInterval);
  };

  const toggleSound = () => {
    if (audioRef.current) {
      if (isPlaying) {
        fadeAudio(audioRef.current, 0, 800); // Fade out antes de pausar
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0; // Empieza en 0
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              fadeAudio(audioRef.current!, 0.4, 1500); // Fade in suave hasta 0.4
            })
            .catch((error) => {
              console.error("Audio playback error:", error.name, error.message);
              setIsPlaying(false);
            });
        }
      }
    }
  };

  useEffect(() => {
    // Tooltip inicial para invitar a la relajación
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-10 left-10 z-[60] flex items-center gap-4">
      <audio ref={audioRef} loop src={audioUrl} preload="auto" />
      
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="bg-brand-accent text-white py-2 px-4 rounded-full text-[9px] uppercase tracking-[0.2em] pointer-events-none"
          >
            Activar atmósfera de calma
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSound}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${
          isPlaying 
            ? 'bg-brand-accent text-white shadow-[0_0_20px_rgba(45,41,38,0.3)]' 
            : 'bg-white/50 backdrop-blur-md border border-brand-accent/10 text-brand-accent'
        }`}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              className="relative"
            >
              <Volume2 size={18} strokeWidth={1.5} />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white rounded-full -z-10"
              />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1"
            >
              <Leaf size={16} strokeWidth={1.5} className="opacity-40" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
