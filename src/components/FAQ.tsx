
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SearchCheck, Clock, MapPin, Sun, PiggyBank, Wrench, Car, Radar, Building, ShieldCheck } from 'lucide-react';

interface FAQProps {
  faqs: { question: string; answer: string; icon?: string }[];
}

const iconMap: { [key: string]: React.ReactNode } = {
  'service': <Clock className="w-5 h-5" />,
  'location': <MapPin className="w-5 h-5" />,
  'solar': <Sun className="w-5 h-5" />,
  'certification': <SearchCheck className="w-5 h-5" />,
  'maintenance': <Wrench className="w-5 h-5" />,
  'finance': <PiggyBank className="w-5 h-5" />,
  'car': <Car className="w-5 h-5" />,
  'detection': <Radar className="w-5 h-5" />,
  'building': <Building className="w-5 h-5" />,
  'warranty': <ShieldCheck className="w-5 h-5" />,
};

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-xl overflow-hidden divide-y divide-gray-100">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-gray-100 last:border-0 data-[state=open]:bg-gray-50 transition-colors"
            >
             <AccordionTrigger 
  className="px-6 py-4 text-left font-medium text-energy-blue hover:text-energy-lightBlue hover:no-underline transition-colors"
>
  <div className="flex items-center gap-4">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-energy-blue/10 text-energy-blue shrink-0">
      {faq.icon && iconMap[faq.icon]}
    </div>
    <div className="flex items-start gap-4">
      <span className="font-semibold text-sm text-energy-yellow">
        {(index + 1).toString().padStart(2, '0')}
      </span>
      <span className="text-base font-semibold">{faq.question}</span> {/* <--- Aquí cambiado */}
    </div>
  </div>
</AccordionTrigger>

              <AccordionContent className="px-6 pb-4 text-gray-600">
                <div className="pl-14 ml-4">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
