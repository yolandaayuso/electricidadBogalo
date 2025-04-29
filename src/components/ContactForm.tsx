import React from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { Clock } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-energy-blue/10 text-energy-blue mx-auto">
          <Send size={24} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-energy-blue">¿Quieres hablar con nosotros?</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Contacta de forma rápida por WhatsApp o escríbenos un email. Estaremos encantados de ayudarte.
        </p>
        <p className="text-sm text-center text-gray-500 mb-6 flex items-center justify-center gap-2">
  <Clock size={16} className="text-energy-yellow" />
  Respuesta rápida garantizada
</p>


      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto">
        {/* WhatsApp */}
        <a
          href="https://wa.me/34654054705?text=Hola%20Carlos%2C%20estoy%20interesado%20en%20un%20presupuesto%20de%20instalación%20eléctrica"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center justify-center"
        >
          <MessageCircle size={18} className="mr-2" />
          Hablar por WhatsApp
        </a>

        {/* Email */}
        <a
          href="mailto:electricidadbogalo@hotmail.com"
          className="btn-outline text-energy-blue border-energy-blue hover:bg-energy-blue hover:text-white inline-flex items-center justify-center"
        >
          <Mail size={18} className="mr-2" />
          Enviar email
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
