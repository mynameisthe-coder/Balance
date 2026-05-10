import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function AvisoLegal() {
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
        
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-16">Aviso Legal</h1>

        <div className="space-y-12 font-light leading-relaxed text-sm md:text-base opacity-80">
          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">1. Datos identificativos</h2>
            <p className="mb-4">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Titular:</strong> BALANCE Massage Studio</li>
              <li><strong>Teléfono:</strong> +34 664 53 42 45</li>
              <li><strong>Domicilio:</strong> Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">2. Usuarios</h2>
            <p className="mb-4">
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">3. Uso del portal</h2>
            <p className="mb-4">
              Este sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a BALANCE Massage Studio o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
            <p className="mb-4">
              El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro el USUARIO será responsable de aportar información veraz y lícita.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">4. Protección de datos</h2>
            <p className="mb-4">
              BALANCE Massage Studio cumple con las directrices del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), velando por asegurar un correcto uso y tratamiento de los datos personales del usuario.
            </p>
            <p>
              Para más información, consulte nuestra <Link to="/privacidad" className="underline hover:opacity-100">Política de Privacidad</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">5. Propiedad intelectual e industrial</h2>
            <p className="mb-4">
              BALANCE Massage Studio por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p>
              Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de BALANCE Massage Studio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">5. Responsabilidad</h2>
            <p className="mb-4">
              BALANCE Massage Studio procura que la información publicada en esta web sea correcta, actualizada y clara. No obstante, no se garantiza la inexistencia de errores u omisiones.
            </p>
            <p>
              BALANCE Massage Studio no se responsabiliza de los daños derivados del uso indebido de la web, de interrupciones del servicio, fallos técnicos, virus, errores informáticos o contenidos enlazados desde páginas externas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">6. Enlaces externos</h2>
            <p className="mb-4">
              Esta web puede incluir enlaces a sitios web de terceros, como redes sociales, plataformas de reserva, mapas, reseñas o herramientas externas.
            </p>
            <p>
              BALANCE Massage Studio no se responsabiliza del contenido, funcionamiento, políticas o prácticas de privacidad de dichos sitios web de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">7. Reservas, citas y servicios</h2>
            <p className="mb-4">
              La solicitud de cita a través de la web, teléfono, WhatsApp, redes sociales o cualquier otro medio no implica necesariamente la confirmación automática de la reserva.
            </p>
            <p className="mb-4">
              La cita quedará confirmada cuando BALANCE Massage Studio lo comunique expresamente al cliente.
            </p>
            <p>
              BALANCE Massage Studio podrá establecer condiciones específicas de reserva, cancelación, modificación de citas, bonos, promociones o pagos, que serán comunicadas al cliente antes de la contratación cuando proceda.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">8. Comunicaciones comerciales</h2>
            <p className="mb-4">
              BALANCE Massage Studio no enviará comunicaciones comerciales por medios electrónicos sin consentimiento previo del usuario, salvo en los casos legalmente permitidos.
            </p>
            <p>
              El usuario podrá oponerse o darse de baja de dichas comunicaciones en cualquier momento contactando con BALANCE Massage Studio.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">9. Protección de datos</h2>
            <p>
              El tratamiento de los datos personales de los usuarios se regula en la <Link to="/privacidad" className="underline hover:opacity-100">Política de Privacidad</Link> disponible en esta web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">10. Legislación aplicable</h2>
            <p className="mb-4">
              El presente Aviso Legal se rige por la legislación española.
            </p>
            <p>
              Para cualquier controversia que pudiera derivarse del acceso o uso de la web, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
