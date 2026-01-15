import React from 'react';
import { Package, ShoppingCart, Clock, CheckCircle, ChevronRight } from 'lucide-react';

interface OverviewProps {
    onChangeTab: (tab: any) => void;
}

export const Overview: React.FC<OverviewProps> = ({ onChangeTab }) => {
    const stats = [
        { label: 'Total Orders', value: '24', icon: Package, color: 'bg-blue-100 text-blue-600' },
        { label: 'Pending Orders', value: '2', icon: Clock, color: 'bg-orange-100 text-orange-600' },
        { label: 'Delivered', value: '21', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
        { label: 'Cart Items', value: '3', icon: ShoppingCart, color: 'bg-purple-100 text-purple-600' },
    ];

    const recentOrders = [
        { id: '#ORD-3921', date: 'Oct 24, 2023', status: 'Pending', total: '₦45,000', items: 3 },
        { id: '#ORD-3920', date: 'Oct 15, 2023', status: 'Delivered', total: '₦12,500', items: 1 },
        { id: '#ORD-3919', date: 'Sep 30, 2023', status: 'Delivered', total: '₦8,200', items: 2 },
    ];

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${stat.color}`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</h4>
                        <span className="text-2xl font-bold text-gray-900 block mt-1">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Recent Orders</h3>
                    <button onClick={() => onChangeTab('orders')} className="text-primary-600 text-sm font-medium hover:underline flex items-center">
                        View All <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-500 bg-gray-50 uppercase text-xs">
                            <tr>
                                <th className="px-5 py-3 font-medium">Order ID</th>
                                <th className="px-5 py-3 font-medium">Date</th>
                                <th className="px-5 py-3 font-medium">Status</th>
                                <th className="px-5 py-3 font-medium">Total</th>
                                <th className="px-5 py-3 font-medium"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900">{order.id}</td>
                                    <td className="px-5 py-4 text-gray-500">{order.date}</td>
                                    <td className="px-5 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 
                                            order.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-5 py-4 font-medium text-gray-900">{order.total}</td>
                                    <td className="px-5 py-4 text-right">
                                        <button className="text-secondary-500 font-medium hover:text-secondary-600">Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Account Info Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Default Address</h3>
                    <address className="text-gray-600 not-italic leading-relaxed">
                        <strong>John Doe</strong><br />
                        123 Asaba Road,<br />
                        Boji Boji, Agbor,<br />
                        Delta State, Nigeria.<br />
                        <span className="text-gray-500 mt-2 block">+234 801 234 5678</span>
                    </address>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                     <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Newsletter</h3>
                     <p className="text-gray-600 mb-4 text-sm">You are currently subscribed to our newsletter.</p>
                     <div className="flex gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Subscribed
                        </span>
                     </div>
                </div>
            </div>
        </div>
    );
};