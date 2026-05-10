import { MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-offwhite text-brand-accent pb-16 px-12">
      <div className="max-w-7xl mx-auto">
        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-t border-brand-accent/10 pt-24">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="h-20 w-auto text-brand-accent opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Ubicación</h4>
            <a 
              href="https://maps.app.goo.gl/ZyTVTN3EkqiKKnzP9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-4 text-brand-accent/70 hover:text-brand-accent transition-colors group"
            >
              <MapPin size={16} className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
              <p className="font-medium text-[10px] uppercase tracking-widest leading-loose">
                Urb. El Bosque, C. Ursulinas, 6<br />
                11405 Jerez de la Frontera, Cádiz
              </p>
            </a>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Contacto</h4>
            <div className="flex flex-col gap-6 text-brand-accent/70">
              <div className="flex gap-4">
                <Phone size={16} className="shrink-0 opacity-40" />
                <p className="font-medium text-[10px] uppercase tracking-widest">T: +34 664 534 245</p>
              </div>
              <div className="flex gap-4">
                <Clock size={16} className="shrink-0 opacity-40" />
                <div className="font-medium text-[9px] uppercase tracking-widest flex flex-col gap-1.5 opacity-80">
                  <p>Lun-Mar: 10:00–14:00, 17:00–20:00</p>
                  <p>Mié-Vie: 10:00–14:00, 17:00–19:00</p>
                  <p>Sáb: 10:00–14:00</p>
                  <p>Dom: Cerrado</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 opacity-40">Legales</h4>
            <ul className="flex flex-col gap-4 text-brand-accent/50 font-medium uppercase tracking-[0.2em] text-[9px]">
              <li><Link to="/aviso-legal" className="hover:text-brand-accent transition-colors">Aviso legal</Link></li>
              <li><Link to="/privacidad" className="hover:text-brand-accent transition-colors">Política de privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-brand-accent transition-colors">Política de cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-accent/5 pt-12 text-brand-accent/30 text-[9px] uppercase tracking-[0.2em] font-medium gap-4">
          <p>© 2026 Balance Studio. Minimal Luxury Wellness.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-brand-accent/60 italic font-serif">Aura Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
