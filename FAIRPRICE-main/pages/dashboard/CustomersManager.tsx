import React from 'react';
import { Users, Search, Mail, Phone, ShoppingBag } from 'lucide-react';

export const CustomersManager: React.FC = () => {
    // Placeholder data
    const customers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+234 801 234 5678', orders: 12, totalSpent: '₦150,000' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+234 802 345 6789', orders: 5, totalSpent: '₦45,000' },
        { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '+234 803 456 7890', orders: 2, totalSpent: '₦12,000' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Customers</h2>
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="Search customers..." className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((customer) => (
                    <div key={customer.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-lg">
                                {customer.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">{customer.name}</h3>
                                <p className="text-xs text-gray-500">Customer ID: #{customer.id}</p>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-gray-400" />
                                {customer.email}
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-gray-400" />
                                {customer.phone}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center">
                            <div className="text-center">
                                <span className="block text-xs text-gray-400 uppercase">Orders</span>
                                <span className="font-bold text-gray-900">{customer.orders}</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-xs text-gray-400 uppercase">Total Spent</span>
                                <span className="font-bold text-gray-900">{customer.totalSpent}</span>
                            </div>
                            <button className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg">
                                <ShoppingBag className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
