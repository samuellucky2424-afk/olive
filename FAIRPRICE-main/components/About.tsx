import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h3 className="text-lg font-semibold text-secondary-600 tracking-wide uppercase mb-3">
          About Olive Mega Mall
        </h3>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">
          Quality You Can Taste, Prices You Can Trust
        </h2>
        
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Welcome to <strong>Olive Mega Mall</strong>, Agbor's premier destination for fresh groceries, household essentials, and beverages. 
            We established our store with a simple mission: to bring high-quality products to our community at prices that make sense.
          </p>
          <p>
            Located in the heart of Boji Boji, we are proud to serve thousands of happy customers. Our shelves are stocked daily with the freshest farm produce and the most trusted brands.
          </p>
          <div className="max-w-2xl mx-auto mt-8 bg-primary-50 p-6 rounded-xl border border-primary-100">
            <p className="italic text-gray-800 font-medium">
              "We don't just sell groceries; we are building a community of satisfied families who eat well and save more."
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
            <div className="text-center">
                <span className="block text-4xl font-extrabold text-primary-600 mb-1">5+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Years Serving</span>
            </div>
            <div className="text-center border-l border-gray-100">
                <span className="block text-4xl font-extrabold text-primary-600 mb-1">1000+</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Happy Customers</span>
            </div>
            <div className="text-center border-l border-gray-100">
                <span className="block text-4xl font-extrabold text-primary-600 mb-1">100%</span>
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Freshness Guaranteed</span>
            </div>
        </div>
      </div>
    </section>
  );
};