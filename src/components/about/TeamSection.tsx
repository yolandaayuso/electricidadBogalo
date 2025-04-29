
import React from 'react';
import TeamMember from './TeamMember';

const TeamSection = () => {
  return (
    <section className="py-20" id="equipo">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block bg-energy-blue/10 text-energy-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            Nuestro equipo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-energy-blue">
            Experiencia y profesionalidad a tu servicio
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            En Electricidad Bógalo creemos en el trato directo y personalizado. Aquí no hablas con una oficina: hablas directamente con quien te dará la solución.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <TeamMember
           name="Carlos Bógalo Gallego"
           role="Fundador y profesional técnico especializado"
           
            description="Con formación superior en Instalaciones Eléctricas y Automáticas, y especialización en Automatización y Robótica Industrial, soy un profesional autorizado con todas las certificaciones necesarias para garantizar la máxima calidad en cada proyecto. Mi compromiso es ofrecer soluciones eficientes y personalizadas, estando disponible 24/7 para atender cualquier emergencia eléctrica."
            certifications={[
              "Instalador Autorizado en Baja y Media Tensión",
              "Certificado en plataformas elevadoras",
              "Especialista en Automatización y Robótica Industrial"
            ]}
            quote='"Cada proyecto es para ti una muestra de nuestra calidad y excelencia. Mi compromiso es ofrecer soluciones eficientes y duraderas, con la garantía del trato directo con quien realizará el trabajo."'
            imageUrl="images/carlosTrabajando.jpg">

            </TeamMember>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
