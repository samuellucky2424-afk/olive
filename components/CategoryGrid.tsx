import React, { useState } from 'react';
import { CATEGORIES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const CategoryGrid: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 3);

    return (
        <section id="categories" className="py-6 bg-gray-100">
            <div className="w-full px-2 sm:px-4 md:px-6">
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                    <div className="flex justify-between items-center mb-4 border-l-4 border-secondary-500 pl-3">
                        <h3 className="text-lg font-bold text-gray-800 uppercase">
                            Shop by Category
                        </h3>
                        {CATEGORIES.length > 3 && (
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-primary-600 font-bold text-sm flex items-center gap-1 hover:text-primary-700 transition-colors"
                            >
                                {showAll ? (
                                    <><ChevronUp className="w-4 h-4" /> Show Less</>
                                ) : (
                                    <><ChevronDown className="w-4 h-4" /> View More</>
                                )}
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
                        {displayedCategories.map((category) => (
                            <a key={category.id} href="#products" className="group flex flex-col items-center p-2 rounded hover:shadow-md transition-all duration-300 hover:bg-gray-50">
                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-100 mb-2 overflow-hidden border border-gray-200 group-hover:border-primary-500 transition-colors">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <span className="text-xs md:text-sm font-medium text-gray-700 text-center group-hover:text-primary-600">
                                    {category.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};