import React from 'react';
import { MapPin, Edit, Trash2, Plus } from 'lucide-react';

export const Addresses: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Saved Addresses</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary-500 text-white rounded-lg text-sm font-bold hover:bg-secondary-600 transition-colors">
                    <Plus className="w-4 h-4" /> Add New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Default Address */}
                <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-primary-500 relative">
                    <span className="absolute top-4 right-4 bg-primary-100 text-primary-700 text-xs font-bold px-2 py-1 rounded">Default</span>
                    <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                        <address className="not-italic text-gray-600">
                            <span className="block font-bold text-gray-900 text-lg">John Doe</span>
                            <span className="block">123 Asaba Road</span>
                            <span className="block">Boji Boji, Agbor</span>
                            <span className="block">Delta State</span>
                            <span className="block mt-2 font-medium">+234 801 234 5678</span>
                        </address>
                    </div>
                    <div className="flex gap-3 border-t pt-4">
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-primary-600">
                            <Edit className="w-4 h-4" /> Edit
                        </button>
                    </div>
                </div>

                {/* Secondary Address */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                    <div className="flex items-start gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                        <address className="not-italic text-gray-600">
                            <span className="block font-bold text-gray-900 text-lg">John Doe (Office)</span>
                            <span className="block">No 5, Old Lagos Road</span>
                            <span className="block">Agbor-Obi</span>
                            <span className="block">Delta State</span>
                            <span className="block mt-2 font-medium">+234 902 345 6789</span>
                        </address>
                    </div>
                    <div className="flex gap-3 border-t pt-4">
                         <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-primary-600">
                            <Edit className="w-4 h-4" /> Edit
                        </button>
                        <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-red-600">
                            <Trash2 className="w-4 h-4" /> Delete
                        </button>
                         <button className="ml-auto text-sm font-medium text-secondary-500 hover:text-secondary-600">
                            Set as Default
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};