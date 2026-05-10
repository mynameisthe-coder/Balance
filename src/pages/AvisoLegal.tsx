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
              En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa de que el titular de este sitio web es:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Titular:</strong> BALANCE Massage Studio</li>
              <li><strong>Nombre comercial:</strong> BALANCE Massage Studio</li>
              <li><strong>Teléfono:</strong> +34 664 53 42 45</li>
              <li><strong>Domicilio:</strong> Urb. El Bosque, C. Ursulinas, 6, 11405 Jerez de la Frontera, Cádiz</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">2. Objeto del sitio web</h2>
            <p className="mb-4">
              El presente sitio web tiene por finalidad ofrecer información sobre BALANCE Massage Studio, sus servicios de masaje, bienestar, recuperación muscular, descarga deportiva, drenaje linfático, presoterapia y otros tratamientos relacionados, así como facilitar el contacto y la solicitud de citas.
            </p>
            <p>
              La información contenida en esta web tiene carácter meramente informativo y no sustituye el diagnóstico, tratamiento o seguimiento médico realizado por profesionales sanitarios cuando sea necesario.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">3. Condiciones de uso</h2>
            <p className="mb-4">
              El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación del presente Aviso Legal.
            </p>
            <p className="mb-4">
              El usuario se compromete a utilizar la web de forma lícita, diligente y respetuosa, absteniéndose de realizar cualquier actuación que pueda dañar, inutilizar, sobrecargar o deteriorar el sitio web, sus contenidos o los sistemas informáticos del titular.
            </p>
            <p>
              Queda prohibido utilizar la web con fines ilícitos, fraudulentos, lesivos de derechos de terceros o contrarios a la buena fe.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium tracking-widest uppercase mb-4 opacity-100">4. Propiedad intelectual e industrial</h2>
            <p className="mb-4">
              Todos los contenidos de esta web, incluyendo textos, imágenes, fotografías, diseño gráfico, logotipo, nombre comercial, estructura, código, iconos, vídeos y demás elementos, son titularidad de BALANCE Massage Studio o de terceros que han autorizado su uso.
            </p>
            <p>
              Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de dichos contenidos sin autorización previa y expresa del titular.
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
