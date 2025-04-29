
import React, { useEffect, useRef } from 'react';

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // This is a simplified version. In production, you would need to include the Google Maps API script
    // and use the actual Google Maps JavaScript API
    
    // For the demo purposes, we're just displaying an iframe with the embedded map
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.947419173262!2d-2.9637842260046103!3d38.738282653165844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6914045d681cbf%3A0x5ba10e44818686c3!2sC.%20Antonio%20Machado%2C%2034%2C%2013320%20Villanueva%20de%20los%20Infantes%2C%20Ciudad%20Real!5e0!3m2!1sen!2ses!4v1713814951968!5m2!1sen!2ses";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.style.border = "0";
    iframe.allowFullscreen = true;
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    
    mapRef.current.appendChild(iframe);
    
    return () => {
      if (mapRef.current && iframe) {
        mapRef.current.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg"></div>
  );
};

export default GoogleMap;
