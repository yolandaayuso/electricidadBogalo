
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '@/data/siteData';

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags
  const allTags = Array.from(
    new Set(
      blogPosts.flatMap(post => post.tags)
    )
  );

  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag)) 
    : blogPosts;

  return (
    <>
      <SEO 
        title="Blog" 
        description="Blog de Electricidad Bógalo con artículos sobre energías renovables, instalaciones eléctricas, consejos eléctricos y novedades del sector."
        keywords="blog energías renovables, artículos instalaciones eléctricas, consejos electricidad"
      />

      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-energy-blue">
          <div className="container-custom">
            <div className="text-center">
              <div className="inline-block bg-energy-yellow/20 text-energy-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
                Blog
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Artículos sobre electricidad
              </h1>
              <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
              Descubre consejos, novedades y soluciones para mejorar tus instalaciones eléctricas, optimizar el consumo de energía y aprovechar las nuevas tecnologías.              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-12">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="h-60 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User size={16} className="mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          
                          <h2 className="text-2xl font-bold mb-3 text-energy-blue">{post.title}</h2>
                          <p className="text-gray-600 mb-4">{post.summary}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedTag(tag)}
                                className="bg-energy-blue/10 text-energy-blue text-xs px-3 py-1 rounded-full hover:bg-energy-blue/20 transition-colors"
                              >
                                {tag}
                              </button>
                            ))}
                          </div>
                          
                          <Link to={`/blog/${post.id}`} className="inline-flex items-center text-energy-blue font-medium hover:text-energy-lightBlue">
                            <span>Leer más</span>
                            <ArrowRight size={18} className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 text-lg">No hay artículos que coincidan con la etiqueta seleccionada.</p>
                      <button
                        onClick={() => setSelectedTag(null)}
                        className="mt-4 btn-primary"
                      >
                        Ver todos los artículos
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Tags */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 text-energy-blue">Etiquetas</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedTag(null)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTag === null
                          ? 'bg-energy-blue text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      Todas
                    </button>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedTag === tag
                            ? 'bg-energy-blue text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4 text-energy-blue">Artículos recientes</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link 
                        key={post.id} 
                        to={`/blog/${post.id}`}
                        className="flex gap-3 group"
                      >
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                        <h4 className="font-medium text-sm text-gray-800 group-hover:text-energy-blue transition-colors line-clamp-2">
  {post.title}
</h4>

                          <p className="text-sm text-gray-500">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-energy-blue rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">¿Necesitas ayuda?</h3>
                  <p className="text-gray-200 mb-6">
                    Ponte en contacto con nosotros para resolver cualquier duda sobre nuestros servicios.
                  </p>
                  <Link to="/contacto" className="btn-secondary w-full justify-center">
                    Contactar ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* CTA: Consultas y profundización */}
<section className="py-16 bg-gray-50">
  <div className="container-custom">
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-energy-blue">
        ¿Tienes dudas o quieres profundizar?
      </h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Si hay algo en nuestros artículos que quieras comentar, aclarar o explorar en más detalle, estamos aquí para ayudarte.
      </p>
      <Link to="/contacto" className="btn-primary whitespace-nowrap">
        Contáctanos
      </Link>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default Blog;
