import React from 'react';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-energy-blue">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto izquierda */}
          <div>
            <div className="inline-block bg-energy-yellow/20 text-energy-yellow px-4 py-2 rounded-full text-sm font-medium mb-6">
              Quiénes somos
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Soluciones eléctricas con profesionalidad y compromiso
            </h1>
            <p className="text-gray-200 text-lg mb-8">
              Contamos con una sólida trayectoria ofreciendo servicios eléctricos y energías renovables adaptados a cada necesidad. Nuestro compromiso es brindarte atención cercana, resultados duraderos y total confianza en cada proyecto.
            </p>
          </div>

          {/* Imagen derecha */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="images/aboutIndex.png"
                alt="Equipo de Electricidad Bógalo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 rounded-lg border-8 border-energy-yellow z-0"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
