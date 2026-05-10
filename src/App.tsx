/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Soundscape from './components/Soundscape';
import CookieBanner from './components/CookieBanner';

import HomePage from './pages/HomePage';
import AvisoLegal from './pages/AvisoLegal';
import Privacidad from './pages/Privacidad';
import Cookies from './pages/Cookies';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-accent pointer-events-none z-[9999] transition-transform duration-300 ease-out flex items-center justify-center ${
        isPointer ? 'scale-150 bg-brand-accent/5' : 'scale-100'
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
      }}
    >
      <div className="w-1 h-1 bg-brand-accent rounded-full" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Soundscape />
          <CookieBanner />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/aviso-legal" element={<AvisoLegal />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
