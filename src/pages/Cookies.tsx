import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Cookies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen text-brand-accent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity mb-12">
          <span>←</span> Volver al inicio
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Política de Cookies</h1>
        <p className="text-sm font-medium tracking-widest uppercase opacity-60 mb-16">Última actualización: mayo de 2026</p>

        <div className="space-y-12 font-light leading-relaxed text-sm md:text-base opacity-80">
          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">1. ¿Qué son las cookies?</h2>
            <p className="mb-4">
              Las cookies son pequeños archivos que se descargan en el dispositivo del usuario cuando accede a determinadas páginas web.
            </p>
            <p>
              Las cookies permiten, entre otras cosas, que una web funcione correctamente, recordar preferencias, mejorar la experiencia de navegación, analizar el uso del sitio o mostrar contenidos personalizados, según el tipo de cookie utilizada.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">2. ¿Qué tipos de cookies utiliza esta web?</h2>
            <p className="mb-4">Este sitio web puede utilizar las siguientes categorías de cookies:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">a) Cookies técnicas o necesarias</h3>
                <p>Son aquellas necesarias para el funcionamiento básico de la web, la navegación, la seguridad, la gestión del consentimiento de cookies o la prestación de servicios solicitados por el usuario. Estas cookies no requieren consentimiento.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">b) Cookies de preferencias o personalización</h3>
                <p>Permiten recordar determinadas preferencias del usuario, como idioma, configuración visual o ajustes de navegación. Cuando sean estrictamente solicitadas por el usuario, pueden considerarse técnicas. En otros casos, se solicitará consentimiento.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">c) Cookies analíticas</h3>
                <p>Permiten analizar el comportamiento de los usuarios en la web, conocer qué páginas se visitan, medir el tráfico y mejorar los contenidos y servicios. Estas cookies solo se instalarán si el usuario presta su consentimiento.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">d) Cookies publicitarias o de marketing</h3>
                <p>Permiten mostrar publicidad personalizada o medir campañas publicitarias. Estas cookies solo se instalarán si el usuario presta su consentimiento.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">3. Cookies utilizadas en esta web</h2>
            <p className="mb-4">
              Esta web utiliza cookies técnicas necesarias para su funcionamiento. Además, podrá utilizar cookies analíticas o de marketing únicamente si el usuario presta su consentimiento expreso mediante el banner o el panel de configuración de cookies.
            </p>

            <div className="space-y-6 mt-8">
              <div className="bg-white/50 p-6 rounded-2xl border border-brand-accent/10">
                <h3 className="font-medium tracking-widest uppercase mb-4 text-xs">Cookies técnicas necesarias:</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <strong>Nombre:</strong> cookie_consent<br/>
                    <strong>Proveedor:</strong> BALANCE Massage Studio<br/>
                    <strong>Tipo:</strong> Técnica necesaria<br/>
                    <strong>Finalidad:</strong> guardar la preferencia del usuario sobre el uso de cookies<br/>
                    <strong>Duración:</strong> 12 meses<br/>
                    <strong>Propia o de terceros:</strong> propia
                  </li>
                  <li>
                    <strong>Nombre:</strong> session<br/>
                    <strong>Proveedor:</strong> BALANCE Massage Studio<br/>
                    <strong>Tipo:</strong> Técnica necesaria<br/>
                    <strong>Finalidad:</strong> permitir el funcionamiento básico de la navegación y la seguridad de la web<br/>
                    <strong>Duración:</strong> sesión<br/>
                    <strong>Propia o de terceros:</strong> propia
                  </li>
                </ul>
              </div>

              <div className="bg-white/50 p-6 rounded-2xl border border-brand-accent/10">
                <h3 className="font-medium tracking-widest uppercase mb-4 text-xs">Cookies analíticas:</h3>
                <p className="text-sm mb-2">Las cookies analíticas solo se instalarán si el usuario las acepta expresamente.</p>
                <p className="text-sm"><strong>Finalidad:</strong> medir visitas, páginas consultadas, interacción con la web y rendimiento general del sitio.</p>
              </div>

              <div className="bg-white/50 p-6 rounded-2xl border border-brand-accent/10">
                <h3 className="font-medium tracking-widest uppercase mb-4 text-xs">Cookies de marketing:</h3>
                <p className="text-sm mb-2">Las cookies de marketing solo se instalarán si el usuario las acepta expresamente.</p>
                <p className="text-sm"><strong>Finalidad:</strong> medir campañas publicitarias, mostrar anuncios personalizados o analizar la eficacia de acciones promocionales.</p>
              </div>
            </div>
            <p className="mt-6 text-sm italic">
              Si la web no tiene activadas herramientas analíticas o publicitarias, no deben instalarse cookies analíticas ni de marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">4. Consentimiento</h2>
            <p className="mb-4">
              Al acceder a esta web, el usuario puede aceptar todas las cookies, rechazarlas o configurar sus preferencias. Las cookies no técnicas no se instalarán hasta que el usuario haya prestado su consentimiento.
            </p>
            <p className="mb-8">
              El usuario puede modificar o retirar su consentimiento en cualquier momento desde el panel de configuración de cookies disponible en esta web.
            </p>
            
            <button
              onClick={openCookieSettings}
              className="px-8 py-3 bg-brand-accent text-white uppercase tracking-widest text-xs font-bold hover:bg-brand-accent/90 transition-colors"
            >
              Cambiar configuración de cookies
            </button>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">5. Cómo configurar o desactivar cookies</h2>
            <p className="mb-4">
              El usuario puede permitir, bloquear o eliminar las cookies desde la configuración de su navegador. Los principales navegadores ofrecen opciones para gestionar cookies en sus apartados de privacidad y seguridad.
            </p>
            <p>
              No obstante, el bloqueo de determinadas cookies técnicas puede afectar al funcionamiento correcto de la web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">6. Cookies de terceros</h2>
            <p className="mb-4">
              Algunas cookies pueden ser gestionadas por terceros, como Google, Meta, plataformas de reserva, mapas, vídeos incrustados o redes sociales.
            </p>
            <p>
              BALANCE Massage Studio no controla completamente las cookies instaladas por dichos terceros, por lo que se recomienda revisar sus respectivas políticas de privacidad y cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">7. Actualización de la Política de Cookies</h2>
            <p className="mb-4">
              BALANCE Massage Studio podrá actualizar esta Política de Cookies cuando cambien las cookies utilizadas en la web o cuando se produzcan cambios legales, técnicos u organizativos.
            </p>
            <p>
              La versión vigente será siempre la publicada en esta página.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
