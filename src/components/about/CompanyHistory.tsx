
import React from 'react';

const CompanyHistory = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="images/about.jpg"
                alt="Historia de Electricidad Bógalo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-8 w-2/3 h-2/3 rounded-lg border-8 border-energy-blue z-0"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-energy-blue/10 text-energy-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
              Nuestra historia
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">
              Una trayectoria marcada por la excelencia
            </h2>
            <p className="text-gray-600 mb-4">
              Electricidad Bógalo nació como una pequeña empresa familiar dedicada a las instalaciones eléctricas en Villanueva de los Infantes, Ciudad Real. Desde entonces, hemos crecido y evolucionado, incorporando nuevos servicios y tecnologías, pero manteniendo siempre nuestros valores de profesionalidad, calidad y cercanía con el cliente.
            </p>
            <p className="text-gray-600 mb-6">
              Con el auge de las energías renovables, ampliamos nuestra oferta de servicios para incluir instalaciones solares fotovoltaicas, bombeo solar y otros sistemas de energía limpia, contribuyendo así a la transición energética y al desarrollo sostenible de nuestra región y de toda España.
            </p>
            
          {/* Métricas */}
          <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <span className="text-3xl font-bold text-energy-blue">+500</span>
                <p className="text-gray-600">Proyectos realizados</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <span className="text-3xl font-bold text-energy-blue">100%</span>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <span className="text-3xl font-bold text-energy-blue">24/7</span>
                <p className="text-gray-600">Disponibilidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
