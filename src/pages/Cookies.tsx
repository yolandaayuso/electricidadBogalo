
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Cookies = () => {
  return (
    <>
      <SEO 
        title="Política de Cookies" 
        description="Política de cookies de Electricidad Bógalo. Información sobre el uso de cookies en nuestro sitio web."
      />

      <Navbar />
      
      <main>
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-energy-blue">Política de Cookies</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en el sitio web de Electricidad Bógalo. 
                Le recomendamos que lea esta política para entender qué tipo de cookies utilizamos, qué información 
                recopilamos y cómo se utiliza esta información.
              </p>

              <h2>1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, teléfono móvil) 
                cuando visita un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web funcionen de manera 
                más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>

              <h2>2. Tipos de cookies que utilizamos</h2>
              
              <h3>2.1. Cookies necesarias o técnicas</h3>
              <p>
                Estas cookies son esenciales para que pueda navegar por nuestro sitio web y utilizar sus funcionalidades. 
                Sin estas cookies, no podríamos proporcionar algunos servicios que ha solicitado.
              </p>

              <h3>2.2. Cookies de preferencias</h3>
              <p>
                Estas cookies nos permiten recordar las elecciones que hace en nuestro sitio web, como su idioma preferido 
                o la región en la que se encuentra. Estas cookies nos permiten proporcionar una experiencia más personalizada.
              </p>

              <h3>2.3. Cookies de estadísticas o analíticas</h3>
              <p>
                Estas cookies recopilan información sobre cómo los usuarios interactúan con nuestro sitio web, por ejemplo, 
                qué páginas son las más visitadas y si los usuarios reciben mensajes de error. Estas cookies no recopilan 
                información que identifique al visitante. Toda la información que recopilan estas cookies es agregada y, 
                por lo tanto, anónima. Solo se utiliza para mejorar el funcionamiento de nuestro sitio web.
              </p>

              <h3>2.4. Cookies de marketing</h3>
              <p>
                Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar anuncios 
                relevantes y atractivos para el usuario individual, y por lo tanto, más valiosos para los editores y 
                anunciantes terceros.
              </p>

              <h2>3. Cookies de terceros</h2>
              <p>
                En algunos casos, también utilizamos cookies proporcionadas por terceros de confianza. La siguiente sección 
                detalla qué cookies de terceros puede encontrar a través de este sitio web.
              </p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> Este sitio utiliza Google Analytics, uno de los servicios de análisis 
                  más extendidos y confiables en Internet, para ayudarnos a comprender cómo utiliza el sitio y las formas 
                  en que podemos mejorar su experiencia. Estas cookies pueden rastrear cosas como el tiempo que pasa en el 
                  sitio y las páginas que visita para que podamos seguir produciendo contenido atractivo.
                </li>
                <li>
                  <strong>Redes sociales:</strong> También utilizamos botones y/o complementos de redes sociales en este 
                  sitio que le permiten conectarse con su red social de varias maneras. Para que estos funcionen, las 
                  siguientes redes sociales, incluyendo Facebook, Twitter, LinkedIn, establecerán cookies a través de 
                  nuestro sitio que pueden ser utilizadas para mejorar su perfil en su sitio o contribuir a los datos que 
                  tienen para diversos propósitos descritos en sus respectivas políticas de privacidad.
                </li>
              </ul>

              <h2>4. Cómo controlar las cookies</h2>
              <p>
                Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su 
                dispositivo y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si 
                hace esto, es posible que tenga que establecer manualmente algunas preferencias cada vez que visite un sitio 
                y algunos servicios y funcionalidades pueden no funcionar.
              </p>
              
              <h3>4.1. Desactivación de cookies</h3>
              <p>
                Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las 
                opciones de su navegador. A continuación, le ofrecemos enlaces donde encontrará información sobre cómo 
                realizar esta operación en los principales navegadores:
              </p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Chrome</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              </ul>

              <h2>5. Cambios en nuestra política de cookies</h2>
              <p>
                Cualquier cambio que realicemos en nuestra política de cookies en el futuro se publicará en esta página. 
                Por favor, revise esta política con frecuencia para ver si hay actualizaciones o cambios.
              </p>

              <h2>6. Contacto</h2>
              <p>
                Si tiene alguna pregunta sobre nuestra política de cookies, puede contactarnos en:
              </p>
              <ul>
                <li>Email: electricidadbogalo@hotmail.com</li>
                <li>Teléfono: 654054705</li>
              </ul>

              <p className="text-sm text-gray-500 mt-10">Última actualización: Abril 2025</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cookies;
