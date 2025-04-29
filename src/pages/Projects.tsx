import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { projects } from '@/data/siteData';

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  MapPin,
  X,
  Zap
} from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Listas únicas para filtros
  const categories = Array.from(new Set(projects.flatMap(p => p.services)));
  const locations = Array.from(new Set(projects.map(p => p.location)));
// Extraemos las ubicaciones únicas
const uniqueLocations = Array.from(new Set(projects.map(p => p.location)));

  // Proyectos filtrados
  const filteredProjects = projects
    .filter(p => filter === 'all' || p.services.includes(filter))
    .filter(p => locationFilter === 'all' || p.location === locationFilter);

  // Handlers Lightbox
  const openLightbox = (project: typeof projects[0], index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };
  const nextImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex(i => (i + 1) % currentProject.gallery.length);
  };
  const prevImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex(i => (i - 1 + currentProject.gallery.length) % currentProject.gallery.length);
  };

  return (
    <>
      <SEO
        title="Proyectos"
        description="Descubre los proyectos realizados por Electricidad Bógalo: instalaciones eléctricas, energía solar y más."
        keywords="proyectos eléctricos, instalaciones solares, energia renovable"
      />
      <Navbar />

      <main>
        {/* Hero + Filtros */}
        <section className="pt-32 pb-12 bg-energy-blue">
          <div className="container-custom text-center">
            <div className="inline-block bg-energy-yellow/20 text-energy-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              Nuestros proyectos
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Proyectos realizados
            </h1>
            <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Explora cómo hemos ayudado e impulsado la eficiencia energética de nuestros clientes.
            </p>

            {/* Filtros desplegables más bonitos */}
          
            {/* Grid de filtros responsive */}
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
      {/* Servicio */}
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="appearance-none w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:border-energy-yellow focus:ring-2 focus:ring-energy-yellow transition"
        >
          <option value="all">Todos los servicios</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute inset-y-0 right-3 w-5 h-5 text-gray-400" />
      </div>

      {/* Ubicación */}
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <select
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
          className="appearance-none w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:border-energy-yellow focus:ring-2 focus:ring-energy-yellow transition"
        >
          <option value="all">Todas las ubicaciones</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute inset-y-0 right-3 w-5 h-5 text-gray-400" />
      </div>

      {/* Limpiar filtros */}
      <button
        onClick={() => { setFilter('all'); setLocationFilter('all'); }}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-energy-yellow text-energy-blue rounded-lg shadow hover:bg-yellow-300 transition font-semibold"
      >
        <X className="w-4 h-4" /> Limpiar filtros
      </button>
    </div>
  </div>
</section>

        {/* Projects Gallery */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(p => (
                <div key={p.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="h-60 overflow-hidden cursor-pointer" onClick={() => openLightbox(p)}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-energy-blue mb-2">{p.title}</h2>
                    <p className="text-gray-600 mb-4">{p.shortDesc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.services.map(s => (
                        <span key={s} className="bg-energy-blue/10 text-energy-blue px-3 py-1 rounded-full text-xs">{s}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="bg-orange-100 text-orange-900 px-2 py-1 rounded-full text-xs font-medium inline-block">{p.location}</span>
                        <span className="text-sm text-gray-500 mt-1">{p.date}</span>
                      </div>
                      <button onClick={() => openLightbox(p)} className="flex items-center text-energy-blue font-medium">
                        Ver detalles
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No hay proyectos que coincidan con los filtros.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-energy-blue mb-4">¿Quieres que realicemos tu proyecto?</h2>
                <p className="text-gray-600 mb-6">Contáctanos y te asesoramos sin compromiso.</p>
                <Link to="/contacto" className="btn-primary inline-flex items-center">
                  Solicitar presupuesto<ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
              <div className="flex flex-col items-center justify-center bg-energy-yellow/20 rounded-lg shadow-lg p-8">
                <Zap size={48} className="text-energy-blue mb-2" />
                <div className="text-3xl font-bold text-energy-blue">100%</div>
                <div className="text-sm text-energy-blue">Adaptados a tus necesidades</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 overflow-auto z-50">
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white"><X size={32} /></button>
          <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white"><ChevronLeft size={24} /></button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white"><ChevronRight size={24} /></button>
          <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col items-center">
              {(() => {
                const src = currentProject.gallery[currentImageIndex];
                return /\.(mp4|webm|ogg)$/i.test(src) ? (
                  <video src={src} controls className="max-h-[70vh] w-full object-contain" />
                ) : (
                  <img src={src} alt={currentProject.title} className="max-h-[70vh] w-full object-contain" />
                );
              })()}
              <div className="mt-2 text-sm text-gray-400">{currentImageIndex + 1}/{currentProject.gallery.length}</div>
            </div>
            <div className="flex-1 text-white overflow-y-auto max-h-[70vh] p-4">
              <h2 className="text-2xl font-bold mb-4">{currentProject.title}</h2>
              <p className="mb-6">{currentProject.description}</p>
              <div className="space-y-2 mb-6 text-sm">
                <div><strong>Cliente:</strong> {currentProject.client}</div>
                <div><strong>Ubicación:</strong> {currentProject.location}</div>
                <div><strong>Fecha:</strong> {currentProject.date}</div>
                <div><strong>Servicios:</strong> {currentProject.services.join(', ')}</div>
              </div>
              <Link to="/contacto" className="btn-secondary">Solicitar proyecto similar</Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Projects;
