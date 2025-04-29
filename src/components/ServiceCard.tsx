
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  animationDelay?: string;
  style?: React.CSSProperties;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  animationDelay,
  style
}) => {
  // Create a combined style object that includes the animation delay
  const combinedStyle = animationDelay 
    ? { ...style, animationDelay } 
    : style;
    
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]",
        className
      )}
      style={combinedStyle}
    >
      <div className="bg-energy-blue/10 w-16 h-16 rounded-lg flex items-center justify-center text-energy-blue mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-energy-blue">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-energy-blue font-medium hover:text-energy-lightBlue group"
      >
        <span>Ver más</span>
        <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
