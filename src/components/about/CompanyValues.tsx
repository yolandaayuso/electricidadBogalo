
import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const CompanyValues = () => {
  const values = [
    {
      icon: Award,
      title: "Calidad",
      description: "Utilizamos materiales de primera calidad y seguimos procesos rigurosos para garantizar la excelencia en todos nuestros trabajos."
    },
    {
      icon: Users,
      title: "Profesionalidad",
      description: "Nuestro equipo está formado por profesionales cualificados y en constante formación para ofrecer el mejor servicio."
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimos con los plazos acordados y respondemos con rapidez a las necesidades de nuestros clientes."
    },
    {
      icon: MapPin,
      title: "Cercanía",
      description: "Mantenemos una relación cercana y transparente con nuestros clientes, asesorándoles en todo momento."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-energy-blue/10 text-energy-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nuestros valores
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">
            Los pilares de nuestro trabajo diario
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            En Electricidad Bógalo nos guiamos por unos principios claros que definen nuestra forma de trabajar y relacionarnos con nuestros clientes, proveedores y colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-energy-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-energy-blue" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-energy-blue">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
