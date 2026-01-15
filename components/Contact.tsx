import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white relative">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-900 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-900 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Visit Our Store
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              We are conveniently located in Boji Boji, Agbor. Drop by for your daily needs or give us a call for inquiries.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-secondary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="mt-1 text-gray-300">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-secondary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-secondary-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Opening Hours</h3>
                  <p className="mt-1 text-gray-300">{BUSINESS_INFO.hours}</p>
                  <p className="text-sm text-gray-400">Monday - Sunday</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-secondary-500 hover:bg-secondary-600 transition-colors"
              >
                Call Us Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <iframe
              src={BUSINESS_INFO.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Supermarket Location"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};