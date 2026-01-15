import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-2">
              <div className="p-2 bg-primary-50 rounded-full text-primary-600 mb-2">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xs font-bold text-gray-900 uppercase">
                {feature.title}
              </h3>
              <p className="text-[10px] text-gray-500 mt-1 hidden sm:block">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};