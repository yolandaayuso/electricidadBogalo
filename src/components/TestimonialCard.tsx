
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  avatar,
  rating,
  className
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-lg transition-all duration-300",
      className
    )}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-energy-yellow text-energy-yellow" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6">"{content}"</p>
      
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full mr-4 bg-energy-blue/10 text-energy-blue flex items-center justify-center font-medium">
            {name.substring(0, 2).toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-gray-500 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
