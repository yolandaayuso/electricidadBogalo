
import React from 'react';
import { Check, HardHat } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  certifications: string[];
  quote: string;
  imageUrl: string;
}

const TeamMember = ({ name, role, description, certifications, quote, imageUrl }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="h-full">
            <img
              src={imageUrl}
              alt={`${name} trabajando en una instalación eléctrica`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 p-6 md:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-energy-blue/10 p-2 rounded-full">
              <HardHat className="w-6 h-6 text-energy-blue" />
            </div>
            <h3 className="text-2xl font-bold text-energy-blue">{name}</h3>
          </div>
          <p className="text-energy-yellow font-semibold mb-4">{role}</p>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-energy-yellow/10 p-1 rounded-full">
                  <Check className="w-4 h-4 text-energy-yellow" />
                </div>
                <span className="text-gray-600">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <blockquote className="italic text-gray-600 border-l-4 border-energy-yellow pl-4">
              {quote}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
