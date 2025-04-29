
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-energy-blue text-white">
      <div className="container-custom pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-xl font-heading font-bold flex items-center">
            <div className="w-10 h-10 mr-2 rounded-full overflow-hidden flex items-center justify-center bg-white">
  <img
    src="/images/logo.png"
    alt="Logo Electricidad Bógalo"
    className="w-full h-full object-contain"
  />
</div>

              <span>Electricidad <span className="text-energy-yellow">Bógalo</span></span>
            </div>
            <p className="mt-4 text-gray-300">
              Especialistas en servicios eléctricos y energías renovables, ofreciendo soluciones eficientes y sostenibles.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://www.facebook.com/people/Electricidad-B%C3%B3galo/61553008613032/" target="_blank" rel="noopener noreferrer" className="hover:text-energy-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/electricidadbogalo/" target="_blank" rel="noopener noreferrer" className="hover:text-energy-yellow transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', path: '/' },
                { label: 'Quiénes somos', path: '/nosotros' },
                { label: 'Servicios', path: '/servicios' },
                { label: 'Proyectos', path: '/proyectos' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contacto', path: '/contacto' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-gray-300 hover:text-energy-yellow transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Nuestros servicios</h3>
            <ul className="space-y-2">
              {[
                { label: 'Instalaciones Eléctricas', path: '/servicios#electricas' },
                { label: 'Instalaciones Solares', path: '/servicios#solares' },
                { label: 'Bombas de Riego Solar', path: '/servicios#bombas' },
                { label: 'Antenas y Videoporteros', path: '/servicios#antenas' },
                { label: 'Cargadores para Vehículos', path: '/servicios#cargadores' },
                { label: 'Mantenimiento Industrial', path: '/servicios#mantenimiento' },
              ].map((service) => (
                <li key={service.label}>
                  <Link to={service.path} className="text-gray-300 hover:text-energy-yellow transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-3 flex-shrink-0 text-energy-yellow" />
                <span>Antonio Machado, 34, Villanueva de los Infantes, Ciudad Real</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 flex-shrink-0 text-energy-yellow" />
                <a href="tel:654054705" className="hover:text-energy-yellow transition-colors">654 054 705</a>
              </li>
              <li className="flex">
                <Mail className="mr-3 flex-shrink-0 text-energy-yellow" />
                <a href="mailto:electricidadbogalo@hotmail.com" className="hover:text-energy-yellow transition-colors">electricidadbogalo@hotmail.com</a>
              </li>
              <li className="flex">
                <Clock className="mr-3 flex-shrink-0 text-energy-yellow" />
                <span>Disponible 24/7, 365 días</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} Electricidad Bógalo. Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacidad" className="text-gray-300 hover:text-energy-yellow transition-colors mr-4">Política de privacidad</Link>
              <Link to="/cookies" className="text-gray-300 hover:text-energy-yellow transition-colors mr-4">Política de cookies</Link>
              <Link to="/legal" className="text-gray-300 hover:text-energy-yellow transition-colors">Aviso legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
