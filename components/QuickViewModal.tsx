import React from 'react';
import { X, Star, Check, Phone, ShoppingCart } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  image: string;
  inStock: boolean;
  discount: string;
  description?: string;
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  addToCart: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, addToCart }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm" 
            aria-hidden="true" 
            onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-gray-100 rounded-full p-1 transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div className="bg-white">
                <div className="sm:flex sm:items-stretch">
                    {/* Image Section */}
                    <div className="sm:w-1/2 flex-shrink-0 bg-gray-50 flex items-center justify-center relative">
                        <div className="w-full h-full min-h-[300px] sm:min-h-full relative">
                             <img 
                                src={product.image} 
                                alt={product.name} 
                                className="absolute inset-0 w-full h-full object-cover" 
                             />
                             {product.discount && (
                                <span className="absolute top-4 left-4 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    {product.discount}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            {product.name}
                        </h3>
                        
                        {/* Rating */}
                         <div className="flex items-center mt-2 mb-4">
                             {[...Array(5)].map((_, i) => (
                                 <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                             ))}
                             <span className="text-sm text-gray-500 ml-2">({Math.floor(Math.random() * 50) + 10} reviews)</span>
                         </div>

                         {/* Price */}
                         <div className="mb-4">
                             <span className="text-3xl font-bold text-gray-900">₦{product.price.toLocaleString()}</span>
                             {product.oldPrice && (
                                <span className="ml-3 text-lg text-gray-400 line-through">₦{product.oldPrice.toLocaleString()}</span>
                             )}
                         </div>

                         {/* Stock Status */}
                         <div className="mb-4">
                             <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                 {product.inStock ? <Check className="w-3 h-3 mr-1" /> : <X className="w-3 h-3 mr-1" />}
                                 {product.inStock ? 'In Stock' : 'Out of Stock'}
                             </div>
                         </div>

                         {/* Description */}
                         <div className="flex-1">
                             <h4 className="text-sm font-medium text-gray-900">Description</h4>
                             <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                {product.description || "High quality product from Olive Mega Mall. Freshness guaranteed and delivered to your doorstep."}
                             </p>
                         </div>

                         {/* Actions */}
                         <div className="mt-8 flex flex-col gap-3">
                             <button
                                onClick={() => { addToCart(); onClose(); }}
                                disabled={!product.inStock}
                                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-bold text-white transition-all transform active:scale-95 ${product.inStock ? 'bg-primary-600 hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-500' : 'bg-gray-300 cursor-not-allowed'}`}
                             >
                                <ShoppingCart className="w-5 h-5 mr-2" />
                                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                             </button>
                             
                             <a 
                                href={`tel:${BUSINESS_INFO.phone}`}
                                className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-primary-600 transition-colors"
                             >
                                <Phone className="w-5 h-5 mr-2" /> Order via Phone
                             </a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};