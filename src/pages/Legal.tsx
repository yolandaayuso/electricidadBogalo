
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Legal = () => {
  return (
    <>
      <SEO 
        title="Aviso Legal" 
        description="Aviso legal de Electricidad Bógalo. Información legal sobre el sitio web y los servicios ofrecidos."
      />

      <Navbar />
      
      <main>
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-energy-blue">Aviso Legal</h1>
            
            <div className="prose prose-lg max-w-none">
              <p>
                En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, 
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
                a continuación se reflejan los siguientes datos:
              </p>

              <h2>1. Datos identificativos</h2>
              <p>
                <strong>Nombre comercial:</strong> Electricidad Bógalo<br />
                <strong>Dirección:</strong> Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real<br />
                <strong>Teléfono:</strong> 654054705<br />
                <strong>Email:</strong> electricidadbogalo@hotmail.com<br />
                <strong>NIF:</strong> [Número de Identificación Fiscal]
              </p>

              <h2>2. Objeto</h2>
              <p>
                El presente Aviso Legal regula el uso y utilización del sitio web www.electricidadbogalo.com, 
                del que es titular Electricidad Bógalo.
              </p>
              <p>
                La navegación por el sitio web de Electricidad Bógalo atribuye la condición de usuario del 
                mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones 
                incluidas en este Aviso Legal, que pueden sufrir modificaciones.
              </p>

              <h2>3. Propiedad intelectual e industrial</h2>
              <p>
                El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, 
                compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, 
                texto y/o gráficos, son propiedad de Electricidad Bógalo o, en su caso, dispone de licencia 
                o autorización expresa por parte de los autores.
              </p>
              <p>
                Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa 
                de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
              </p>
              <p>
                Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, 
                uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita 
                previa por parte de Electricidad Bógalo. Cualquier uso no autorizado previamente se considera un 
                incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
              </p>

              <h2>4. Exención de responsabilidades</h2>
              <p>
                Electricidad Bógalo se exime de cualquier tipo de responsabilidad derivada de la información 
                publicada en su sitio web siempre que esta información haya sido manipulada o introducida por 
                un tercero ajeno al mismo.
              </p>
              <p>
                El sitio web de Electricidad Bógalo puede utilizar cookies (pequeños archivos de información que 
                el servidor envía al ordenador de quien accede a la página) para llevar a cabo determinadas funciones 
                que son consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las 
                cookies utilizadas en el sitio web tienen, en todo caso, carácter temporal con la única finalidad de 
                hacer más eficaz su transmisión ulterior y desaparecen al terminar la sesión del usuario.
              </p>
              <p>
                Desde el sitio web del cliente es posible que se redirija a contenidos de terceros sitios web. 
                Dado que Electricidad Bógalo no puede controlar siempre los contenidos introducidos por los terceros 
                en sus sitios web, éste no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo 
                caso, Electricidad Bógalo manifiesta que procederá a la retirada inmediata de cualquier contenido que 
                pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo 
                a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades 
                competentes el contenido en cuestión.
              </p>

              <h2>5. Ley aplicable y jurisdicción</h2>
              <p>
                Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o 
                de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten 
                expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o 
                relacionados con su uso los Juzgados y Tribunales de Ciudad Real.
              </p>

              <p className="text-sm text-gray-500 mt-10">Última actualización: Abril 2023</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Legal;
