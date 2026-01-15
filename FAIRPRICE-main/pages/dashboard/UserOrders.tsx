import React, { useState } from 'react';
import { useAppStore } from '../../store';
import { Package, Clock, CheckCircle } from 'lucide-react';

export const UserOrders: React.FC = () => {
    // In a real app, fetch orders filtered by user.id
    // For now, using mock data but simulating "My Orders"
    const mockUserOrders = [
        { id: '#ORD-3921', date: 'Oct 24, 2023', status: 'Pending', total: '₦45,000', items: 3 },
        { id: '#ORD-3920', date: 'Oct 15, 2023', status: 'Delivered', total: '₦12,500', items: 1 },
    ];

    return (
        <div className="space-y-6">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
                    <p className="text-gray-500">Track and view your order history</p>
                </div>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-500 bg-gray-50 uppercase text-xs">
                            <tr>
                                <th className="px-5 py-3 font-medium">Order ID</th>
                                <th className="px-5 py-3 font-medium">Date</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 font-medium">Total</th>
                                <th className="px-5 py-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockUserOrders.length > 0 ? (
                                mockUserOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-5 py-4 font-medium text-gray-900">{order.id}</td>
                                        <td className="px-5 py-4 text-gray-500">{order.date}</td>
                                        <td className="px-5 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1 ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                    order.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                {order.status === 'Delivered' && <CheckCircle className="w-3 h-3" />}
                                                {order.status === 'Pending' && <Clock className="w-3 h-3" />}
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 font-medium text-gray-900">{order.total}</td>
                                        <td className="px-5 py-4">
                                            <button className="text-primary-600 font-medium hover:underline text-xs uppercase tracking-wide">
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-5 py-8 text-center text-gray-500">
                                        You haven't placed any orders yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
