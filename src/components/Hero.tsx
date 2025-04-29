import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, BadgeCheck, Users, Handshake, Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-[100px] min-h-screen flex items-center relative overflow-hidden bg-sky-50">
      {/* Círculo decorativo con logo embebido */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-100 rounded-full opacity-100 z-0" >
      <img
    src="/images/logo.png"
    alt="Logo decorativo dentro del círculo"
    className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-28 opacity-100 pointer-events-none"
  />
  </div>

      {/* Círculo azul decorativo inferior izquierdo */}

      {/* Contenido principal */}
      <div className="max-w-screen-xl mx-auto relative z-20 px-6 sm:px-8 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Texto principal */}
          <div className="lg:w-1/2 text-slate-900">
            <div className="inline-block bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-6">
            Servicio Profesional · 24/7 · Soluciones a medida</div> 
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-950 mb-6 leading-tight tracking-tight">
              Soluciones eléctricas profesionales y{' '}
              <span className="text-yellow-500">energía renovable</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-700 tracking-wide leading-relaxed mb-8 max-w-lg">
            Especialistas en soluciones eléctricas y renovables a medida, con atención cercana, calidad garantizada y compromiso total con tu seguridad y ahorro.            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contacto"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-blue-900 text-white hover:bg-yellow-500 transition"
                >
                <span>Solicitar presupuesto</span>
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:654054705"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border border-blue-900 text-blue-900 hover:bg-yellow-500 hover:text-white transition"
              >
                <Phone size={18} />
                <span>654 054 705</span>
              </a>
            </div>
          </div>

          {/* Beneficios o valores */}
          <div className="lg:w-1/2 flex flex-col gap-4 w-full max-w-md">
            {[
              { icon: <BadgeCheck size={24} className="text-yellow-500" />, text: 'Instalador autorizado' },
              { icon: <Users size={24} className="text-yellow-500" />, text: 'Profesionales cualificados' },
              { icon: <Handshake size={24} className="text-yellow-500" />, text: 'Compromiso con el cliente' },
              { icon: <Award size={24} className="text-yellow-500" />, text: 'Calidad garantizada' },
            ].map(({ icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-5 py-4 bg-white rounded-xl shadow-sm hover:shadow-md hover:ring-1 hover:ring-yellow-400 hover:scale-[1.01] transition-all duration-300"
              >
                {icon}
                <span className="text-sm sm:text-base font-semibold text-slate-800">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
