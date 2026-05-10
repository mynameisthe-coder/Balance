import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Privacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4">Política de Privacidad</h1>
        <p className="text-sm font-medium tracking-widest uppercase opacity-60 mb-16">Última actualización: mayo de 2026</p>

        <div className="space-y-12 font-light leading-relaxed text-sm md:text-base opacity-80">
          
          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">1. Información al usuario</h2>
            <p className="mb-4">
              En BALANCE Massage Studio, como responsable de este sitio web y de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos de que hemos implementado las medidas de seguridad necesarias, de índole técnica y organizativas, para garantizar y proteger la confidencialidad, integridad y disponibilidad de los datos introducidos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">2. Responsable del tratamiento</h2>
            <p className="mb-4">
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Titular:</strong> BALANCE Massage Studio</li>
              <li><strong>Teléfono:</strong> +34 664 53 42 45</li>
              <li><strong>Domicilio:</strong> Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">3. Finalidad del tratamiento</h2>
            <p className="mb-4">
              Sus datos personales serán utilizados para las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Gestionar el envío de la información que nos soliciten.</li>
              <li>Gestionar y confirmar sus citas y reservas de masajes y tratamientos.</li>
              <li>Facilitar a los interesados ofertas de productos y servicios de su interés (solo si existe consentimiento expreso).</li>
              <li>Garantizar que el servicio prestado es seguro y adecuado a su estado físico (tratamiento de datos de salud bajo consentimiento).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">4. Legitimación del tratamiento</h2>
            <p className="mb-4">
              La base legal para el tratamiento de su datos es:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>El consentimiento del interesado:</strong> Art. 6.1.a del RGPD y Art. 9.2.a del RGPD para datos de salud.</li>
              <li><strong>Ejecución de un contrato o medidas precontractuales:</strong> Art. 6.1.b del RGPD.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> Art. 6.1.c del RGPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">5. Derechos de los interesados</h2>
            <p className="mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si en BALANCE Massage Studio estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Acceso:</strong> conocer qué datos se están tratando.</li>
              <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
              <li><strong>Supresión (Derecho al Olvido):</strong> solicitar la eliminación cuando ya no sean necesarios.</li>
              <li><strong>Limitación del tratamiento:</strong> solicitar que se limite el uso de sus datos en casos específicos.</li>
              <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
              <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
              <li><strong>Retirada del consentimiento:</strong> derecho a retirar el consentimiento en cualquier momento.</li>
            </ul>
            <p className="mb-4">
              Para ejercer estos derechos, el usuario puede contactar con BALANCE Massage Studio mediante comunicación dirigida al domicilio Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz, o a través del teléfono +34 664 53 42 45.
            </p>
            <p className="mb-4">
              La solicitud deberá indicar el derecho que se desea ejercer y permitir acreditar la identidad del solicitante cuando sea necesario (por ejemplo, mediante copia del DNI).
            </p>
            <p>
              Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">6. Plazo de conservación</h2>
            <p className="mb-4">
              Los datos personales se conservarán durante el tiempo necesario para cumplir la finalidad para la que fueron recogidos.
            </p>
            <p className="mb-4">Con carácter general:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Los datos de consultas se conservarán durante el tiempo necesario para atenderlas.</li>
              <li>Los datos de clientes se conservarán mientras dure la relación profesional y durante los plazos necesarios para atender posibles responsabilidades.</li>
              <li>Los datos de facturación se conservarán durante los plazos exigidos por la normativa fiscal y contable.</li>
              <li>Los datos utilizados para comunicaciones comerciales se conservarán hasta que el usuario retire su consentimiento o solicite la baja.</li>
              <li>Los datos obtenidos mediante cookies se conservarán según lo indicado en la <Link to="/cookies" className="underline hover:opacity-100">Política de Cookies</Link>.</li>
              <li>Los datos relacionados con testimonios, imágenes o reseñas se conservarán mientras se mantenga la autorización o hasta que el interesado solicite su retirada, cuando proceda.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">7. Destinatarios de los datos</h2>
            <p className="mb-4">Los datos personales no se venderán ni se cederán a terceros con fines comerciales.</p>
            <p className="mb-4">Podrán acceder a los datos determinados proveedores necesarios para el funcionamiento del negocio, como:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Proveedores de hosting y mantenimiento web.</li>
              <li>Plataformas de reserva o gestión de citas.</li>
              <li>Servicios de correo electrónico, mensajería o atención al cliente.</li>
              <li>Asesoría fiscal, contable o jurídica.</li>
              <li>Entidades bancarias o pasarelas de pago, si se utilizan.</li>
              <li>Herramientas de analítica web, si el usuario acepta las cookies correspondientes.</li>
              <li>Administraciones públicas, juzgados o autoridades competentes cuando exista obligación legal.</li>
            </ul>
            <p>
              Estos proveedores tratarán los datos conforme a la normativa aplicable y únicamente para prestar sus servicios.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">8. Transferencias internacionales</h2>
            <p className="mb-4">
              Algunos proveedores tecnológicos utilizados para la web, reservas, correo electrónico, analítica, redes sociales o mensajería pueden estar ubicados fuera del Espacio Económico Europeo.
            </p>
            <p>
              En esos casos, BALANCE Massage Studio procurará que dichas transferencias se realicen con garantías adecuadas conforme al Reglamento General de Protección de Datos, como decisiones de adecuación, cláusulas contractuales tipo u otros mecanismos legalmente previstos.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">9. Seguridad de los datos</h2>
            <p className="mb-4">
              BALANCE Massage Studio aplicará medidas técnicas y organizativas adecuadas para proteger los datos personales frente a pérdida, acceso no autorizado, alteración, divulgación o destrucción.
            </p>
            <p>
              No obstante, ningún sistema informático es completamente seguro, por lo que el usuario debe evitar enviar información especialmente sensible si no es estrictamente necesaria.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">10. Menores de edad</h2>
            <p className="mb-4">
              Los servicios de BALANCE Massage Studio no están dirigidos a menores de 14 años a través de la web.
            </p>
            <p>
              Cuando una persona menor de edad solicite o reciba servicios, será necesaria la intervención y autorización de sus padres, madres, tutores o representantes legales cuando proceda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">11. Redes sociales</h2>
            <p className="mb-4">
              BALANCE Massage Studio puede tener presencia en redes sociales como Instagram, Google Business Profile u otras plataformas.
            </p>
            <p>
              El tratamiento de datos realizado dentro de dichas plataformas se regirá también por las políticas de privacidad de cada red social.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">12. Reseñas de Google</h2>
            <p>
              Las reseñas mostradas proceden de opiniones publicadas públicamente por clientes en Google. BALANCE Massage Studio podrá mostrar extractos de dichas reseñas con fines informativos y de reputación profesional. Si alguna persona desea solicitar la retirada o modificación de una reseña mostrada en esta web, puede contactar con BALANCE Massage Studio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">13. Modificaciones de la Política de Privacidad</h2>
            <p className="mb-4">
              BALANCE Massage Studio podrá modificar esta Política de Privacidad para adaptarla a cambios legales, técnicos u organizativos.
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
