import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../../constants';

interface WishlistProps {
    onMoveToCart: () => void;
}

export const Wishlist: React.FC<WishlistProps> = ({ onMoveToCart }) => {
    // Mock Wishlist Data
    const wishlistItems = [PRODUCTS[3], PRODUCTS[6], PRODUCTS[8]];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">My Wishlist ({wishlistItems.length})</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlistItems.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col relative group">
                        <button className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500 bg-white rounded-full shadow-sm z-10">
                            <Trash2 className="w-4 h-4" />
                        </button>
                        
                        <div className="w-full h-40 bg-gray-50 rounded-lg overflow-hidden mb-4">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        
                        <h3 className="font-bold text-gray-900 line-clamp-1 mb-1">{product.name}</h3>
                        <span className="text-primary-600 font-bold mb-4">₦{product.price.toLocaleString()}</span>
                        
                        <button 
                            onClick={onMoveToCart}
                            className="w-full mt-auto py-2 bg-gray-900 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-600 transition-colors"
                        >
                            <ShoppingCart className="w-4 h-4" /> Move to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};