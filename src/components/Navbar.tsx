import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Wrench, Briefcase, Mail, FileText, Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Quiénes Somos', href: '/nosotros', icon: Users },
  { name: 'Servicios', href: '/servicios', icon: Wrench },
  { name: 'Proyectos', href: '/proyectos', icon: Briefcase },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Contacto', href: '/contacto', icon: Mail },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="z-50">
      {/* 🔵 Barra superior fija */}
      <div className="fixed top-0 left-0 right-0 bg-energy-blue text-white text-sm h-8 px-4 flex justify-between items-center z-50">
        <div className="flex space-x-4 items-center">
          Lunes - Viernes: 8:00 - 18:00 · <span className="font-semibold text-energy-yellow"> Urgencias 24h</span>
        </div>
      </div>

      {/* ⚪ Navbar principal más fina */}
      <header className="fixed top-8 left-0 right-0 z-40 bg-white shadow-md py-2">
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-energy-blue font-heading font-bold text-xl flex items-center">
              <img
                src="/images/logobogalodef.png"
                alt="Logo Electricidad Bogalo"
                className="w-10 h-10 mr-2"
              />
              <span>Electricidad <span className="text-energy-yellow">Bógalo</span></span>
            </div>
          </Link>

          <a
            href="tel:654054705"
            className="lg:hidden ml-auto mr-2 bg-energy-yellow hover:bg-energy-orange text-energy-blue rounded-full w-9 h-9 flex items-center justify-center"
          >
            <Phone size={18} />
          </a>

          <button
            className="lg:hidden rounded-md p-2 text-energy-blue"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-base font-medium transition-colors relative group py-1 text-energy-blue',
                  location.pathname === link.href && 'font-semibold'
                )}
              >
                {link.name}
                <span className={cn(
                  'absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform origin-center group-hover:scale-x-100',
                  location.pathname === link.href ? 'bg-energy-blue scale-x-100' : 'bg-energy-yellow'
                )} />
              </Link>
            ))}
            <a
              href="tel:654054705"
              className="bg-energy-yellow hover:bg-energy-orange text-energy-blue px-3 py-1.5 rounded-md font-medium transition-all flex items-center"
            >
              <Phone size={16} className="mr-2" />
              <span>654 054 705</span>
            </a>
          </nav>
        </div>

        {/* Móvil: overlay y drawer */}
        <div
          className={cn(
            'fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={cn(
            'fixed top-0 right-0 bottom-0 w-64 bg-white z-50 p-5 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-energy-blue"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-5 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'flex items-center p-3 rounded-md transition-colors',
                  location.pathname === link.href
                    ? 'bg-energy-blue text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <link.icon size={18} className="mr-3" />
                {link.name}
              </Link>
            ))}
            <a
              href="tel:654054705"
              className="flex items-center p-3 bg-energy-yellow text-energy-blue rounded-md mt-4"
            >
              <Phone size={18} className="mr-3" />
              <span>654 054 705</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
