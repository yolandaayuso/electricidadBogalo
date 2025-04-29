import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectModal from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { services, projects, testimonials } from '@/data/siteData';

const Index = () => {
  return (
    <>
      <SEO 
        title="Inicio" 
        description="Electricidad Bógalo - Empresa de servicios eléctricos y energías renovables en Ciudad Real. Instalaciones eléctricas, solares, bombeo solar, antenas, videoporteros y más."
        keywords="electricista Ciudad Real, instalaciones solares, energía renovable Castilla-La Mancha, servicio eléctrico 24h"
      />

      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />

        {/* Services Section */}
        <section className="section-padding bg-gray-50" id="servicios">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">Nuestros servicios</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Ofrecemos una amplia gama de servicios eléctricos y de energías renovables para hogares, comercios e industrias.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {services.slice(0, 7).map((service, index) => {
    // ¿Es el último y se queda suelto en columna 1 de 3?
    const isLastSingle = 
      index === services.slice(0,7).length - 1 &&
      services.slice(0,7).length % 3 === 1;

    return (
      <div
        key={service.id}
        style={{ animationDelay: `${index * 0.1}s` }}
        className={`
          relative animate-fade-in h-full
          ${isLastSingle ? 'lg:col-start-2 lg:justify-self-center' : ''}
        `}
      >
        <ServiceCard
          className="h-full flex flex-col justify-between"
          title={service.title}
          description={service.shortDesc}
          icon={<service.icon size={28} />}
          link={`/servicios#${service.id}`}
        />
        {service.id=="deteccion" && (
          <span
  className="
    absolute top-2 right-2
    inline-block
    bg-yellow-300
    text-gray-800
    text-xs
    font-medium
    uppercase
    tracking-wide
    px-2.5
    py-1
    rounded-full
    shadow-sm
  "
>
 ¡Novedad!
</span>

     
        )}
      </div>
    )
  })}
</div>


    <div className="text-center mt-10">
      <Link to="/servicios" className="btn-primary">
        <span>Ver todos los servicios</span>
        <ArrowRight size={18} className="ml-2" />
      </Link>
    </div>
  </div>
</section>


        {/* About Section */}
        <section className="section-padding">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Texto primero en móviles */}
      <div className="order-1 lg:order-1">
        <div className="inline-block bg-energy-blue/10 text-energy-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
          Quiénes somos
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">
          Expertos en soluciones eléctricas y energías renovables
        </h2>
        <p className="text-gray-600 mb-6">
          En Electricidad Bógalo llevamos años ofreciendo soluciones eléctricas y energías renovables con un enfoque cercano, profesional y adaptado a cada cliente. Nos apasiona lo que hacemos, y eso se nota en cada instalación. Si buscas un equipo que te escuche, responda rápido y lo haga bien desde el primer día, estás en el lugar correcto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            "Amplia experiencia demostrable",
            "Atención personalizada y cercana",
            "Materiales de primera calidad",
            "Disponibilidad 24 horas",
            "Nos adaptamos a tus necesidades",
            "Garantía en todos nuestros trabajos"
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-energy-yellow rounded-full p-1 mr-3 text-white">
                <Check size={16} />
              </div>
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>

        <Link to="/nosotros" className="btn-primary">
          <span>Conocer más</span>
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>

      {/* Imagen */}
      <div className="order-2 lg:order-2 relative">
        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
          <img
            src="images/aboutIndex.png"
            alt="Técnico de Electricidad Bógalo trabajando"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute top-0 right-0 -mt-8 -mr-8 bg-energy-yellow p-6 rounded-lg shadow-lg z-20">
  <div className="text-4xl font-bold text-energy-blue">100%</div>
  <div className="text-sm font-medium text-energy-blue">Compromiso<br/>real contigo</div>
</div>

        <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 rounded-lg border-8 border-energy-blue z-0"></div>
      </div>
    </div>
  </div>
</section>


        {/* Why Choose Us */}
        <section className="section-padding bg-energy-blue text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                En Electricidad Bógalo nos diferenciamos por nuestra profesionalidad, experiencia y compromiso con la calidad en todos nuestros servicios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-energy-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Clock className="text-energy-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Disponibilidad 24/7</h3>
                <p className="text-gray-200">
                  Estamos disponibles las 24 horas del día, los 365 días del año para atender cualquier emergencia eléctrica.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-energy-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="text-energy-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Cobertura nacional</h3>
                <p className="text-gray-200">
                  Aunque estamos ubicados en Campo de Montiel (Ciudad Real), ofrecemos nuestros servicios en todo el territorio nacional.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <div className="bg-energy-yellow w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-energy-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Garantía de calidad</h3>
                <p className="text-gray-200">
                Cada instalación se realiza con máxima precisión y materiales de primera, porque tu seguridad es lo primero.                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-gray-50" id="proyectos">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">Proyectos realizados</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estos son algunos de nuestros proyectos más recientes. Descubre cómo hemos ayudado a nuestros clientes a mejorar su eficiencia energética.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 3).map((project) => (
                <ProjectModal
                  key={project.id}
                  title={project.title}
                  description={project.shortDesc}
                  image={project.image}
                  slug={project.id}
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/proyectos" className="btn-primary">
                <span>Ver todos los proyectos</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">Lo que dicen nuestros clientes</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Nuestros clientes destacan la rapidez, cercanía y profesionalidad con la que trabajamos. Estas son algunas opiniones reales sobre su experiencia con Electricidad Bógalo.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Noelia Campos López",
          role: "Cliente particular",
          initials: "NO",
          content: "Profesionalidad, eficacia y rapidez, además de un trato magnífico. Sin dudar, lo recomiendo 1000%.",
        },
        {
          name: "Alberto Gallego",
          role: "Cliente particular",
          initials: "AL",
          content: "Tuve una avería en mi huerta y quedé encantado con Carlos, muy profesional, rápido y siempre disponible. ¡Excelente trabajo!",
        },
        {
          name: "Pablo Valero",
          role: "Instalación de placas solares",
          initials: "PA",
          content: "Carlos es un profesional magnífico. Instaló las placas solares en mi chalet de forma rápida y económica. ¡Muy recomendable!",
        },
      ].map((testimonial, index) => (
        <div key={index} className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 h-full">
          {/* Estrellas */}
          <div>
            <div className="flex items-center mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.188 3.667a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.188 3.667c.3.921-.755 1.688-1.54 1.118l-3.124-2.27a1 1 0 00-1.176 0l-3.124 2.27c-.785.57-1.84-.197-1.54-1.118l1.188-3.667a1 1 0 00-.364-1.118L2.322 9.094c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.188-3.667z" />
                  </svg>
                ))}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.content}"</p>
          </div>

          {/* Footer cliente */}
          <div className="flex items-center mt-6">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-gray-600 mr-4">
              {testimonial.initials}
            </div>
            <div>
              <p className="font-semibold text-energy-blue">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Google Reviews */}
   {/* Reputación + CTA Google Reviews */}
<div className="text-center mt-12">
  <p className="text-gray-700 mb-2 text-lg font-semibold">
    Valoración media en Google: <span className="text-yellow-500">4,9 ★</span>
  </p>
  <p className="text-gray-600 mb-4 text-sm">
    El 100% de nuestras reseñas son de clientes satisfechos que han confiado en nosotros.
  </p>
  <a
    href="https://www.google.com/search?q=Electricidad+Bógalo+opiniones"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary inline-flex items-center justify-center"
  >
    <span>Escribe tu valoración en Google</span>
    <ArrowRight size={18} className="ml-2" />
  </a>
</div>

  </div>
</section>



<section className="section-padding bg-gray-50" id="contacto">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">Contacta con nosotros</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Estaremos encantados de atenderte y ayudarte con cualquier consulta o proyecto que tengas en mente.
      </p>
    </div>

    {/* 2 columnas: info + formulario */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Columna 1: Información */}
      <div className="bg-energy-blue text-white p-8 rounded-xl space-y-6">
  <h3 className="text-2xl font-bold mb-4">Información de contacto</h3>

  <div className="flex items-start">
    <MapPin className="text-energy-yellow mr-4 mt-1" />
    <div>
      <h4 className="font-bold mb-1 text-sm">Dirección</h4>
      <p className="text-gray-200 text-sm">
        Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <Phone className="text-energy-yellow mr-4 mt-1" />
    <div>
      <h4 className="font-bold mb-1 text-sm">Teléfono</h4>
      <p>
        <a
          href="tel:654054705"
          className="text-gray-200 hover:text-white text-sm"
        >
          654 054 705
        </a>
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <Mail className="text-energy-yellow mr-4 mt-1" />
    <div>
      <h4 className="font-bold mb-1 text-sm">Email</h4>
      <p>
        <a
          href="mailto:electricidadbogalo@hotmail.com"
          className="text-gray-200 hover:text-white text-sm"
        >
          electricidadbogalo@hotmail.com
        </a>
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <Clock className="text-energy-yellow mr-4 mt-1" />
    <div>
      <h4 className="font-bold mb-1 text-sm">Horario</h4>
      <p className="text-sm text-gray-200">
        Consultas y atención en oficina: <strong>lunes a viernes, de 8:00 a 18:00</strong>.<br />
        Para urgencias: <strong>disponibilidad 24h, los 365 días del año</strong>.
      </p>
    </div>
  </div>
</div>


      {/* Columna 2: Formulario simplificado */}
      <div className="flex">
        <div className="w-full h-full">
          <ContactForm />
        </div>
      </div>
    </div>
    {/* Mapa en fila completa */}
    <div className="mt-12">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.947419173262!2d-2.9637842260046103!3d38.738282653165844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6914045d681cbf%3A0x5ba10e44818686c3!2sC.%20Antonio%20Machado%2C%2034%2C%2013320%20Villanueva%20de%20los%20Infantes%2C%20Ciudad%20Real!5e0!3m2!1sen!2ses!4v1713814951968!5m2!1sen!2ses"
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-xl shadow-md"
        title="Ubicación de Electricidad Bógalo"
      ></iframe>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-20 bg-[#0c3a5c] relative overflow-hidden">
  {/* Fondo visual de textura + overlay */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
  <div className="absolute inset-0 bg-[#0c3a5c]/90"></div>

  <div className="container-custom relative z-10">
    <div className="text-center max-w-3xl mx-auto text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para mejorar tu eficiencia energética?</h2>
      <p className="text-lg text-gray-200 mb-8">
        Solicita un presupuesto sin compromiso y descubre cómo podemos ayudarte a ahorrar energía y dinero.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/contacto" className="btn-secondary">
          <span>Solicitar presupuesto</span>
          <ArrowRight size={18} className="ml-2" />
        </Link>
        <a
          href="tel:654054705"
          className="btn-outline border-white text-white hover:bg-white hover:text-energy-blue"
        >
          <Phone size={18} className="mr-2" />
          <span>654 054 705</span>
        </a>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default Index;
