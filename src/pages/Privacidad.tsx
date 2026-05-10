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
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">1. Responsable del tratamiento</h2>
            <p className="mb-4">
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Titular:</strong> BALANCE Massage Studio</li>
              <li><strong>Nombre comercial:</strong> BALANCE Massage Studio</li>
              <li><strong>Teléfono:</strong> +34 664 53 42 45</li>
              <li><strong>Domicilio:</strong> Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">2. Datos personales que podemos tratar</h2>
            <p className="mb-4">BALANCE Massage Studio podrá tratar los siguientes datos personales:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Datos identificativos: nombre y apellidos.</li>
              <li>Datos de contacto: teléfono, correo electrónico y, en su caso, usuario de redes sociales.</li>
              <li>Datos relacionados con la cita: fecha, hora, servicio solicitado y preferencias de atención.</li>
              <li>Datos de comunicación: mensajes enviados por formulario, WhatsApp, correo electrónico o redes sociales.</li>
              <li>Datos de facturación: cuando sean necesarios para emitir factura.</li>
              <li>Datos técnicos: dirección IP, identificadores de cookies, navegador, dispositivo y datos de navegación, cuando proceda.</li>
              <li>Datos relacionados con molestias, lesiones, estado físico o necesidades concretas del servicio, únicamente cuando el usuario los facilite voluntariamente y sean necesarios para adaptar la sesión.</li>
            </ul>
            <p>
              En caso de que el usuario facilite información relativa a su salud, molestias, lesiones, embarazo, medicación, limitaciones físicas o cualquier otra circunstancia similar, dicha información será tratada con especial confidencialidad y únicamente para adaptar correctamente el servicio solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">3. Finalidades del tratamiento</h2>
            <p className="mb-4">Los datos personales podrán tratarse para las siguientes finalidades:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gestionar solicitudes de información.</li>
              <li>Gestionar reservas, citas, cambios o cancelaciones.</li>
              <li>Prestar correctamente los servicios solicitados.</li>
              <li>Adaptar el tratamiento a las necesidades indicadas por el cliente.</li>
              <li>Enviar confirmaciones, recordatorios o comunicaciones relacionadas con la cita.</li>
              <li>Gestionar pagos, facturación y obligaciones administrativas.</li>
              <li>Atender consultas, reclamaciones o incidencias.</li>
              <li>Enviar comunicaciones comerciales, promociones o novedades, solo si el usuario ha prestado su consentimiento.</li>
              <li>Gestionar reseñas, testimonios o imágenes, únicamente cuando exista autorización suficiente.</li>
              <li>Analizar el uso de la web mediante cookies o tecnologías similares, solo cuando el usuario haya prestado su consentimiento cuando sea necesario.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">4. Base jurídica del tratamiento</h2>
            <p className="mb-4">Las bases jurídicas que permiten el tratamiento de los datos son:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Ejecución de medidas precontractuales o contractuales:</strong> para gestionar citas, solicitudes de información y prestación de servicios.</li>
              <li><strong>Consentimiento del usuario:</strong> para el envío de comunicaciones comerciales, uso de cookies no técnicas, publicación de testimonios o tratamiento de información especialmente sensible cuando proceda.</li>
              <li><strong>Cumplimiento de obligaciones legales:</strong> para obligaciones fiscales, contables, administrativas o de atención a requerimientos legales.</li>
              <li><strong>Interés legítimo:</strong> para mantener la seguridad de la web, prevenir abusos, atender incidencias y conservar comunicaciones necesarias para la defensa de derechos o reclamaciones.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">5. Datos relativos a la salud o estado físico</h2>
            <p className="mb-4">
              Si el usuario comunica información sobre dolores, lesiones, patologías, embarazo, medicación, limitaciones físicas u otras circunstancias similares, debe hacerlo solo cuando sea necesario para adaptar el servicio solicitado.
            </p>
            <p className="mb-4">
              BALANCE Massage Studio tratará estos datos únicamente para valorar la idoneidad del servicio, adaptar la sesión y garantizar una atención adecuada.
            </p>
            <p>
              El usuario podrá retirar su consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado previamente.
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
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">9. Derechos de los usuarios</h2>
            <p className="mb-4">El usuario puede ejercer los siguientes derechos:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Derecho de acceso.</li>
              <li>Derecho de rectificación.</li>
              <li>Derecho de supresión.</li>
              <li>Derecho de oposición.</li>
              <li>Derecho a la limitación del tratamiento.</li>
              <li>Derecho a la portabilidad de los datos.</li>
              <li>Derecho a retirar el consentimiento en cualquier momento.</li>
            </ul>
            <p className="mb-4">
              Para ejercer estos derechos, el usuario puede contactar con BALANCE Massage Studio mediante comunicación dirigida al domicilio Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz, o a través del teléfono +34 664 53 42 45.
            </p>
            <p className="mb-4">
              La solicitud deberá indicar el derecho que se desea ejercer y permitir acreditar la identidad del solicitante cuando sea necesario.
            </p>
            <p>
              Asimismo, el usuario puede presentar una reclamación ante la Agencia Española de Protección de Datos si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">10. Seguridad de los datos</h2>
            <p className="mb-4">
              BALANCE Massage Studio aplicará medidas técnicas y organizativas adecuadas para proteger los datos personales frente a pérdida, acceso no autorizado, alteración, divulgación o destrucción.
            </p>
            <p>
              No obstante, ningún sistema informático es completamente seguro, por lo que el usuario debe evitar enviar información especialmente sensible si no es estrictamente necesaria.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">11. Menores de edad</h2>
            <p className="mb-4">
              Los servicios de BALANCE Massage Studio no están dirigidos a menores de 14 años a través de la web.
            </p>
            <p>
              Cuando una persona menor de edad solicite o reciba servicios, será necesaria la intervención y autorización de sus padres, madres, tutores o representantes legales cuando proceda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">12. Redes sociales</h2>
            <p className="mb-4">
              BALANCE Massage Studio puede tener presencia en redes sociales como Instagram, Google Business Profile u otras plataformas.
            </p>
            <p>
              El tratamiento de datos realizado dentro de dichas plataformas se regirá también por las políticas de privacidad de cada red social.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">13. Reseñas de Google</h2>
            <p>
              Las reseñas mostradas proceden de opiniones publicadas públicamente por clientes en Google. BALANCE Massage Studio podrá mostrar extractos de dichas reseñas con fines informativos y de reputación profesional. Si alguna persona desea solicitar la retirada o modificación de una reseña mostrada en esta web, puede contactar con BALANCE Massage Studio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">14. Modificaciones de la Política de Privacidad</h2>
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
