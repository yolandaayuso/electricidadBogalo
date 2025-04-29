
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import GoogleMap from '@/components/GoogleMap';
import { MapPin, Phone, Mail, Clock, Calendar, ChevronRight } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { faqs } from '@/data/siteData';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contacto" 
        description="Contacta con Electricidad Bógalo para servicios eléctricos y energías renovables en Ciudad Real y toda España. Presupuestos sin compromiso y servicio 24h."
        keywords="contacto electricista, presupuesto instalación eléctrica, instalación solar Ciudad Real"
      />

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-energy-blue">
          <div className="container-custom">
            <div className="text-center">
              <div className="inline-block bg-energy-yellow/20 text-energy-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
                Contacto
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Estamos aquí para ayudarte
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
                Ponte en contacto con nosotros para solicitar información, presupuestos sin compromiso o resolver cualquier duda sobre nuestros servicios.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="bg-energy-blue text-white p-8 rounded-xl h-full">
                  <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                  
                  <div className="space-y-6 mb-8">
  <div className="flex items-start">
    <MapPin className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-sm font-semibold mb-1">Dirección</h3>
      <p className="text-gray-200">Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real</p>
    </div>
  </div>

  <div className="flex items-start">
    <Phone className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-sm font-semibold mb-1">Teléfono</h3>
      <p><a href="tel:654054705" className="text-gray-200 hover:text-white">654 054 705</a></p>
    </div>
  </div>

  <div className="flex items-start">
    <Mail className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-sm font-semibold mb-1">Email</h3>
      <p><a href="mailto:electricidadbogalo@hotmail.com" className="text-gray-200 hover:text-white">electricidadbogalo@hotmail.com</a></p>
    </div>
  </div>

  <div className="flex items-start">
    <Clock className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
    <div>
      <h3 className="text-sm font-semibold mb-1">Horario</h3>
      <p className="text-gray-200">Disponibilidad 24 horas, 365 días al año</p>
    </div>
  </div>
</div>


                  <h3 className="text-xl font-medium mb-4">Nuestros servicios</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-energy-yellow mr-2" />
                      <span>Instalaciones eléctricas</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-energy-yellow mr-2" />
                      <span>Instalaciones solares</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-energy-yellow mr-2" />
                      <span>Bombas de riego solar</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-energy-yellow mr-2" />
                      <span>Antenas y videoporteros</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="text-energy-yellow mr-2" />
                      <span>Cargadores para vehículos eléctricos</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-energy-blue">Nuestra ubicación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Estamos ubicados en Villanueva de los Infantes, Ciudad Real, pero trabajamos en toda España.
              </p>
            </div>
            
            <div className="h-[500px]">
              <GoogleMap />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-energy-blue">Preguntas frecuentes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <FAQ faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-energy-blue relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
  <div className="absolute inset-0 bg-energy-blue/80"></div>
  <div className="container-custom relative z-10">
    <div className="text-center max-w-3xl mx-auto text-white">
      <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
        <Calendar className="text-energy-yellow" size={32} />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Necesitas ayuda?</h2>
      <p className="text-lg text-gray-200 mb-8">
        Llámanos directamente y resolveremos todas tus dudas.
      </p>
      <a href="tel:654054705" className="btn-secondary">
        <Phone size={18} className="mr-2" />
        <span>654 054 705</span>
      </a>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default Contact;
