import React from 'react';
import { Home, Grid, ShoppingCart, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface BottomNavProps {
    cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({ cartCount }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 pb-safe">
      <div className="grid grid-cols-4 h-16">
        <a href="#" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 active:text-primary-600">
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Home</span>
        </a>
        <a href="#categories" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 active:text-primary-600">
          <Grid className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Categories</span>
        </a>
        <a href="#cart" className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 active:text-primary-600 relative">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 mb-1" />
            {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-secondary-500 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                    {cartCount}
                </span>
            )}
          </div>
          <span className="text-[10px] font-medium">Cart</span>
        </a>
        <a href={`tel:${BUSINESS_INFO.phone}`} className="flex flex-col items-center justify-center text-gray-600 hover:text-primary-600 active:text-primary-600">
          <Phone className="w-6 h-6 mb-1" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
      </div>
    </div>
  );
};