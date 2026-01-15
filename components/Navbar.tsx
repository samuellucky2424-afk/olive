import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search, Phone, ChevronDown, User } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  cartCount: number;
  onNavigateToDashboard?: () => void;
  onNavigateToCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onNavigateToDashboard, onNavigateToCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Bar (Desktop) */}
      <div className="hidden md:block bg-gray-100 text-xs py-1">
        <div className="w-full px-6 flex justify-between items-center text-gray-600">
          <span>Best Supermarket in Agbor, Delta State</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-600 flex items-center gap-1 text-orange-600 font-medium">
              <span className="bg-orange-100 px-1 rounded">Sell on Olive Mega Mall</span>
            </a>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {BUSINESS_INFO.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full px-2 sm:px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -ml-2 text-gray-600 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, 0); }} className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="bg-primary-600 text-white p-1.5 rounded shadow-sm group-hover:bg-primary-700 transition-colors">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl md:text-2xl tracking-tighter text-gray-900 leading-none">OLIVE<span className="text-primary-600">MEGA</span></span>
                <span className="text-[0.6rem] text-gray-500 font-medium tracking-widest hidden md:block uppercase">Mall</span>
              </div>
            </a>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
            <div className="relative w-full flex">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-l-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm"
                placeholder="Search products, brands and categories..."
              />
              <button className="bg-secondary-500 text-white px-6 py-2 rounded-r-md font-bold text-sm hover:bg-secondary-600 transition-colors shadow-sm uppercase tracking-wide">
                Search
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-6">

            {/* Account (Desktop) */}
            <div
              className="hidden md:flex items-center cursor-pointer hover:text-primary-600 text-gray-700"
              onClick={onNavigateToDashboard}
            >
              <User className="h-6 w-6 mr-1" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs">Hello, User</span>
                <span className="font-semibold text-sm flex items-center">Account <ChevronDown className="h-3 w-3 ml-1" /></span>
              </div>
            </div>

            {/* Help (Desktop) */}
            <div className="hidden md:flex items-center cursor-pointer hover:text-primary-600 text-gray-700">
              <div className="flex flex-col leading-tight">
                <span className="text-xs">Need Help?</span>
                <span className="font-semibold text-sm flex items-center">Contact <ChevronDown className="h-3 w-3 ml-1" /></span>
              </div>
            </div>

            {/* Cart */}
            <div
              className="relative cursor-pointer hover:text-primary-600 text-gray-700"
              onClick={onNavigateToCart}
            >
              <div className="flex items-center">
                <ShoppingCart className="h-7 w-7 md:h-6 md:w-6" />
                <span className="hidden md:block font-semibold text-sm ml-2">Cart</span>
              </div>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-2 md:left-3 md:right-auto bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 md:hidden">
          <div className="relative w-full flex shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-sm"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 top-full shadow-xl">
          <div className="px-4 py-2 space-y-1">
            <a href="#" className="block py-3 text-base font-medium text-gray-900 border-b border-gray-100">Home</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigateToDashboard?.(); setIsOpen(false); }} className="block py-3 text-base font-medium text-gray-900 border-b border-gray-100">My Account</a>
            <a href="#products" className="block py-3 text-base font-medium text-gray-900 border-b border-gray-100">All Products</a>
            <a href="#categories" className="block py-3 text-base font-medium text-gray-900 border-b border-gray-100">Categories</a>
            <div className="pt-4 pb-2">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex justify-center items-center w-full bg-primary-600 text-white font-bold py-3 rounded-md">
                <Phone className="w-4 h-4 mr-2" /> Call to Order
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};