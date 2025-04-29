
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { services } from '@/data/siteData';

const Services = () => {
  const location = useLocation();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Scroll to service if hash is present
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = serviceRefs.current[id];
      if (element) {
        const yOffset = -100; // Adjust this value according to your navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <SEO 
        title="Servicios" 
        description="Electricidad Bógalo ofrece servicios profesionales de instalaciones eléctricas, energía solar, bombeo solar, antenas, videoporteros, cargadores para vehículos eléctricos y más."
        keywords="instalaciones eléctricas, energía solar, bombeo solar, cargadores vehículos eléctricos"
      />

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-energy-blue">
          <div className="container-custom">
            <div className="text-center">
              <div className="inline-block bg-energy-yellow/20 text-energy-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
                Nuestros servicios
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Soluciones eléctricas y energías renovables a tu medida
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
                En Electricidad Bógalo ofrecemos una amplia gama de servicios profesionales para particulares, comercios e industrias. Descubre cómo podemos ayudarte.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {services.map((service) => (
                  <a 
                    key={service.id}
                    href={`#${service.id}`}
                    className="bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-md transition-colors"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  ref={el => serviceRefs.current[service.id] = el}
                  className="scroll-mt-32"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                      <div className="inline-block bg-energy-blue/10 text-energy-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Servicio
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {service.description}
                      </p>
                      
                      <div className="mb-8">
                        <h3 className="text-xl font-medium mb-4 text-energy-blue">Beneficios</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="bg-energy-yellow rounded-full p-1 mr-3 text-white flex-shrink-0 mt-1">
                                <Check size={16} />
                              </div>
                              <span className="text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contacto" className="btn-primary">
                          <span>Solicitar presupuesto</span>
                          <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <a href="tel:654054705" className="btn-outline">
                          <Phone size={18} className="mr-2" />
                          <span>654 054 705</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}>
                      <div className="relative">
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className={`absolute ${index % 2 === 0 ? '-bottom-8 -right-8' : '-bottom-8 -left-8'} w-2/3 h-2/3 rounded-lg border-8 ${index % 2 === 0 ? 'border-energy-yellow' : 'border-energy-blue'} z-0`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-energy-blue relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-energy-blue/80"></div>
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Necesitas un servicio personalizado?</h2>
              <p className="text-lg text-gray-200 mb-8">
                Si no encuentras el servicio que necesitas o tienes alguna duda, contacta con nosotros y te asesoraremos sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contacto" className="btn-secondary">
                  <span>Contactar ahora</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <a href="tel:654054705" className="btn-outline border-white text-white hover:bg-white hover:text-energy-blue">
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

export default Services;