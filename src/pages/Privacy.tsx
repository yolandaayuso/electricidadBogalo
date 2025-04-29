
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Política de Privacidad" 
        description="Política de privacidad de Electricidad Bógalo. Información sobre el tratamiento de datos personales y derechos de los usuarios."
      />

      <Navbar />
      
      <main>
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-energy-blue">Política de Privacidad</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                En Electricidad Bógalo, nos comprometemos a proteger la privacidad de nuestros usuarios y clientes. 
                Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información personal 
                que nos proporciona al utilizar nuestro sitio web o contratar nuestros servicios.
              </p>

              <h2>1. Responsable del tratamiento</h2>
              <p>
                <strong>Nombre:</strong> Electricidad Bógalo<br />
                <strong>Dirección:</strong> Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real<br />
                <strong>Teléfono:</strong> 654054705<br />
                <strong>Email:</strong> electricidadbogalo@hotmail.com
              </p>

              <h2>2. Datos que recopilamos</h2>
              <p>
                Podemos recopilar la siguiente información personal:
              </p>
              <ul>
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección postal</li>
                <li>Información relacionada con consultas o servicios solicitados</li>
              </ul>

              <h2>3. Finalidad del tratamiento</h2>
              <p>
                Utilizamos la información personal recopilada con las siguientes finalidades:
              </p>
              <ul>
                <li>Dar respuesta a las consultas o solicitudes que nos envíe</li>
                <li>Prestar los servicios contratados</li>
                <li>Enviar presupuestos solicitados</li>
                <li>Gestionar la relación contractual</li>
                <li>Enviar comunicaciones comerciales, si ha dado su consentimiento expreso</li>
              </ul>

              <h2>4. Base legal para el tratamiento</h2>
              <p>
                El tratamiento de sus datos se realiza con las siguientes bases jurídicas:
              </p>
              <ul>
                <li>La ejecución de un contrato o la aplicación de medidas precontractuales</li>
                <li>El consentimiento del interesado</li>
                <li>El interés legítimo del responsable</li>
                <li>El cumplimiento de obligaciones legales aplicables</li>
              </ul>

              <h2>5. Tiempo de conservación</h2>
              <p>
                Conservaremos sus datos personales durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos. Una vez finalizada la relación, los datos serán conservados durante los plazos legalmente establecidos.
              </p>

              <h2>6. Destinatarios de los datos</h2>
              <p>
                No cedemos sus datos personales a terceros, salvo que:
              </p>
              <ul>
                <li>Exista una obligación legal</li>
                <li>Sea necesario para la prestación del servicio contratado</li>
                <li>Haya dado su consentimiento expreso</li>
              </ul>

              <h2>7. Derechos de los interesados</h2>
              <p>
                Puede ejercer los siguientes derechos:
              </p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos personales suyos estamos tratando.</li>
                <li><strong>Rectificación:</strong> Modificar los datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
                <li><strong>Oposición:</strong> Solicitar que no tratemos sus datos.</li>
                <li><strong>Limitación del tratamiento:</strong> Solicitar la limitación del tratamiento de sus datos.</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
              </ul>
              <p>
                Para ejercer estos derechos, puede contactar con nosotros a través de:
              </p>
              <ul>
                <li>Email: electricidadbogalo@hotmail.com</li>
                <li>Dirección postal: Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real</li>
              </ul>

              <h2>8. Medidas de seguridad</h2>
              <p>
                Implementamos medidas técnicas y organizativas para garantizar la protección de sus datos personales y evitar su pérdida, mal uso, alteración o acceso no autorizado.
              </p>

              <h2>9. Modificaciones de la política de privacidad</h2>
              <p>
                Podemos actualizar esta política de privacidad periódicamente para reflejar cambios en nuestras prácticas de información. La fecha de la última actualización aparecerá al final de esta página.
              </p>

              <h2>10. Contacto</h2>
              <p>
                Si tiene preguntas o inquietudes sobre nuestra política de privacidad, puede contactarnos en:
              </p>
              <ul>
                <li>Email: electricidadbogalo@hotmail.com</li>
                <li>Teléfono: 654054705</li>
              </ul>

              <p className="text-sm text-gray-500 mt-10">Última actualización: Abril 2023</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
