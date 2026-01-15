import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <span className="text-2xl font-bold text-primary-700">OLIVE MEGA MALL</span>
            <p className="mt-2 text-sm text-gray-500">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-600">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#home" className="text-base text-gray-500 hover:text-primary-600">Home</a></li>
              <li><a href="#products" className="text-base text-gray-500 hover:text-primary-600">Products</a></li>
              <li><a href="#about" className="text-base text-gray-500 hover:text-primary-600">About Us</a></li>
              <li><a href="#contact" className="text-base text-gray-500 hover:text-primary-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact Small */}
          <div>
             <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
             <ul className="mt-4 space-y-4">
                <li className="text-base text-gray-500">{BUSINESS_INFO.address}</li>
                <li className="text-base text-gray-500">{BUSINESS_INFO.phone}</li>
                <li className="text-base text-gray-500">{BUSINESS_INFO.hours}</li>
             </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Olive Mega Mall. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};