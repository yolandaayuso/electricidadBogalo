
import React from 'react';
import { Check, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const advantages = [
    "Experiencia contrastada en el sector",
    "Profesionales cualificados y en constante formación",
    "Materiales de primera calidad y garantía en todos nuestros trabajos",
    "Disponibilidad 24 horas para urgencias eléctricas",
    "Servicio personalizado y adaptado a cada cliente",
    "Precios competitivos y presupuestos sin compromiso",
    "Compromiso con la sostenibilidad y el medio ambiente"
  ];

  return (
    <section className="py-20 bg-energy-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              ¿Por qué elegirnos?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Razones para confiar en Electricidad Bógalo
            </h2>
            <p className="text-gray-200 mb-8">
              Nos distinguimos por nuestra experiencia, profesionalidad y compromiso con la satisfacción del cliente, ofreciendo servicios de alta calidad adaptados a cada necesidad.
            </p>
            
            <div className="space-y-4">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-energy-yellow rounded-full p-1 mr-3 text-energy-blue flex-shrink-0">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-energy-yellow">Contacta con nosotros</h3>
            <p className="text-gray-200 mb-6">
              Si tienes alguna duda o quieres solicitar un presupuesto sin compromiso, no dudes en ponerte en contacto con nosotros. Estaremos encantados de atenderte.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Dirección</h4>
                  <p className="text-gray-200">Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-energy-yellow mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Teléfono</h4>
                  <p><a href="tel:654054705" className="text-gray-200 hover:text-white">654 054 705</a></p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  );
};

export default ContactSection;
