import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const FloatingButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/234${BUSINESS_INFO.phone.substring(1).replace(/\s/g, '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 z-40 flex items-center justify-center p-3 md:p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Contact on WhatsApp"
    >
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
            Chat with us
        </span>
      <Phone className="w-6 h-6 text-white" />
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
    </a>
  );
};