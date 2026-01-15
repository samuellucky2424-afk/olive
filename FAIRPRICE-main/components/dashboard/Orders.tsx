import React from 'react';
import { Package, ChevronRight } from 'lucide-react';

export const Orders: React.FC = () => {
    const orders = [
        { id: '#ORD-3921', date: 'Oct 24, 2023', status: 'Pending', total: '₦45,000', items: ['Mama Gold Rice 50kg', 'Kings Oil 5L'] },
        { id: '#ORD-3920', date: 'Oct 15, 2023', status: 'Delivered', total: '₦12,500', items: ['Golden Penny Semovita 10kg'] },
        { id: '#ORD-3919', date: 'Sep 30, 2023', status: 'Delivered', total: '₦8,200', items: ['Ariel Detergent 2kg', 'Eva Water 75cl x 2'] },
        { id: '#ORD-3918', date: 'Sep 10, 2023', status: 'Cancelled', total: '₦3,500', items: ['Hollandia Yoghurt 1L'] },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">My Orders</h2>
            
            <div className="space-y-4">
                {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4 md:p-6">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4 border-b border-gray-50 pb-4">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-lg text-gray-900">{order.id}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                                            order.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                                            'bg-red-100 text-red-700'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <span className="text-sm text-gray-500">Placed on {order.date}</span>
                                </div>
                                <div className="text-right">
                                     <button className="text-secondary-500 font-bold text-sm uppercase flex items-center md:justify-end gap-1 hover:text-secondary-600">
                                        See Details <ChevronRight className="w-4 h-4" />
                                     </button>
                                </div>
                            </div>
                            
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-gray-50 rounded text-gray-400">
                                        <Package className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium line-clamp-1">{order.items.join(', ')}</p>
                                        {order.items.length > 2 && <span className="text-xs text-gray-400">+ more items</span>}
                                    </div>
                                </div>
                                <div className="self-end md:self-auto">
                                    <span className="block text-xs text-gray-500 text-right uppercase">Total Amount</span>
                                    <span className="block text-xl font-bold text-gray-900">{order.total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};