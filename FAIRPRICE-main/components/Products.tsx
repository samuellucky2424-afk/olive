import React, { useState } from 'react';
import { useAppStore } from '../store';
import { ShoppingCart, Star, Heart, Filter, Eye, Plus, Check, Minus } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import { QuickViewModal } from './QuickViewModal';

interface ProductListingProps {
    addToCart: (product: any, drinks?: any[]) => void;
    onOpenDetail: (product: any) => void;
}

export const ProductListing: React.FC<ProductListingProps> = ({ addToCart, onOpenDetail }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('meals');
    const [priceSort, setPriceSort] = useState<string>('default');
    const [quickViewProduct, setQuickViewProduct] = useState<typeof PRODUCTS[0] | null>(null);

    const calculateProductPrice = (product: any) => {
        return product.price as number;
    };

    const { user } = useAppStore();

    const handleAddToCart = (product: any) => {
        // Restriction: Non-registered users cannot order from Supermarket/Mall
        if (product.category !== 'meals' && !user) {
            alert("Please Login or Register to order from the Supermarket/Mall section. Meals are available to everyone!");
            return;
        }
        addToCart(product);
    };

    const filteredProducts = PRODUCTS.filter(product =>
        selectedCategory === 'all' || product.category === selectedCategory
    ).sort((a, b) => {
        if (priceSort === 'asc') return a.price - b.price;
        if (priceSort === 'desc') return b.price - a.price;
        return 0;
    });

    return (
        <section id="products" className="py-2 md:py-4 bg-gray-100 h-screen overflow-hidden flex flex-col">
            <div className="w-full px-2 sm:px-4 lg:px-6 flex-1 flex flex-col overflow-hidden">

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 flex-1 overflow-hidden">
                    {/* Sidebar Filters */}
                    <div className="w-full md:w-48 flex-shrink-0 hidden md:block overflow-y-auto">
                        <div className="bg-white rounded-lg shadow-sm p-3 sticky top-0">
                            <div className="flex items-center gap-2 mb-3 font-bold text-gray-800 border-b pb-1.5 text-xs">
                                <Filter className="w-3 h-3" /> Filters
                            </div>

                            <div className="mb-4">
                                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Categories</h4>
                                <div className="space-y-1">
                                    <label className="flex items-center space-x-1.5 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={selectedCategory === 'all'}
                                            onChange={() => setSelectedCategory('all')}
                                            className="w-3 h-3 text-primary-600 focus:ring-primary-500"
                                        />
                                        <span className={`text-[11px] ${selectedCategory === 'all' ? 'text-primary-600 font-bold' : 'text-gray-600 group-hover:text-primary-600'}`}>All Products</span>
                                    </label>
                                    {CATEGORIES.map(cat => (
                                        <label key={cat.id} className="flex items-center space-x-1.5 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat.id}
                                                onChange={() => setSelectedCategory(cat.id)}
                                                className="w-3 h-3 text-primary-600 focus:ring-primary-500"
                                            />
                                            <span className={`text-[11px] ${selectedCategory === cat.id ? 'text-primary-600 font-bold' : 'text-gray-600 group-hover:text-primary-600'}`}>{cat.title}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Price</h4>
                                <div className="flex items-center gap-1.5">
                                    <input type="number" placeholder="Min" className="w-14 p-1 border rounded text-[10px]" />
                                    <span className="text-gray-400">-</span>
                                    <input type="number" placeholder="Max" className="w-14 p-1 border rounded text-[10px]" />
                                </div>
                                <button className="mt-2 w-full bg-gray-100 text-gray-600 text-[10px] font-bold py-1 rounded hover:bg-gray-200 uppercase">APPLY</button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Mobile Filter & Sort Bar */}
                        <div className="bg-white p-2 rounded-lg shadow-sm mb-2 flex justify-between items-center sticky top-0 z-10">
                            <h2 className="font-bold text-gray-800 text-sm md:text-base">
                                {selectedCategory === 'all' ? 'All Products' : CATEGORIES.find(c => c.id === selectedCategory)?.title}
                            </h2>
                            <select
                                className="text-[10px] md:text-xs border-gray-300 rounded focus:ring-primary-500 focus:border-primary-500 bg-gray-50 border p-1"
                                value={priceSort}
                                onChange={(e) => setPriceSort(e.target.value)}
                            >
                                <option value="default">Popularity</option>
                                <option value="asc">Price: Low to High</option>
                                <option value="desc">Price: High to Low</option>
                            </select>
                        </div>

                        {/* Mobile Category Chips (Visible only on mobile) */}
                        <div className="md:hidden flex overflow-x-auto gap-1.5 mb-2 pb-1.5 no-scrollbar">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap border ${selectedCategory === 'all' ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-300'}`}
                            >
                                All
                            </button>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium whitespace-nowrap border ${selectedCategory === cat.id ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-gray-600 border-gray-300'}`}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Product Grid */}
                        <div className="flex-1 overflow-y-auto pr-1 no-scrollbar">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 pb-16">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="bg-white rounded shadow-sm hover:shadow transition-all duration-300 flex flex-col group relative overflow-hidden h-full">
                                        {/* Discount Badge */}
                                        {product.discount && (
                                            <span className="absolute top-1 left-1 bg-secondary-100 text-secondary-600 text-[8px] md:text-[9px] font-bold px-1 py-0.5 rounded z-10">
                                                {product.discount}
                                            </span>
                                        )}

                                        {/* Image - Now Clickable */}
                                        <div
                                            className="relative pt-[75%] overflow-hidden bg-gray-50 cursor-pointer"
                                            onClick={() => onOpenDetail(product)}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {(!product.inStock || (product as any).inventory === 0) && (
                                                <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-20">
                                                    <span className="bg-gray-800 text-white text-[8px] px-1.5 py-0.5 font-bold rounded">OUT</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Details */}
                                        <div className="p-1.5 md:p-2 flex flex-col flex-1">
                                            <h3
                                                className="text-[10px] md:text-[11px] text-gray-800 line-clamp-1 mb-0.5 group-hover:text-primary-600 transition-colors cursor-pointer font-medium leading-tight"
                                                title={product.name}
                                                onClick={() => onOpenDetail(product)}
                                            >
                                                {product.name}
                                            </h3>

                                            <div className="mt-auto">
                                                <div className="flex items-baseline gap-1 mb-1">
                                                    <span className="text-[11px] md:text-xs font-bold text-gray-900">₦{calculateProductPrice(product).toLocaleString()}</span>
                                                    {product.oldPrice && (
                                                        <span className="text-[8px] md:text-[9px] text-gray-400 line-through">₦{product.oldPrice.toLocaleString()}</span>
                                                    )}
                                                </div>

                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    disabled={!product.inStock || (product as any).inventory === 0}
                                                    className={`w-full py-1 rounded text-[9px] md:text-[10px] font-bold uppercase tracking-tighter transition-colors ${product.inStock && (product as any).inventory !== 0
                                                        ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
                                                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        }`}
                                                >
                                                    {product.inStock && (product as any).inventory !== 0 ? 'Add to Cart' : 'Out of Stock'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick View Modal */}
                <QuickViewModal
                    product={quickViewProduct}
                    isOpen={!!quickViewProduct}
                    onClose={() => setQuickViewProduct(null)}
                    addToCart={addToCart}
                />
            </div>
        </section>
    );
};