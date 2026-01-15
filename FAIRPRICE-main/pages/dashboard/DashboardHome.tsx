import React, { useEffect, useState } from 'react';
import { Package, ShoppingCart, Clock, CheckCircle, ChevronRight, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../../store';
import { db } from '../../lib/firebase'; // Prepared for real data

export const DashboardHome: React.FC = () => {
    const { isAdmin, user } = useAppStore();

    // User-specific stats
    const userStats = [
        { label: 'My Orders', value: '5', icon: Package, color: 'bg-blue-100 text-blue-600' },
        { label: 'Pending', value: '1', icon: Clock, color: 'bg-orange-100 text-orange-600' },
        { label: 'Delivered', value: '4', icon: CheckCircle, color: 'bg-green-100 text-green-600' },
    ];

    // Admin-specific stats
    const adminStats = [
        { label: 'Total Orders', value: '24', icon: Package, color: 'bg-blue-100 text-blue-600' },
        { label: 'Pending Orders', value: '2', icon: Clock, color: 'bg-orange-100 text-orange-600' },
        { label: 'Total Sales', value: '₦1,284,500', icon: TrendingUp, color: 'bg-green-100 text-green-700' },
        { label: 'Active Customers', value: '154', icon: Users, color: 'bg-blue-100 text-blue-700' },
    ];

    const displayStats = isAdmin ? adminStats : userStats;

    return (
        <div className="space-y-6">
            {/* User Welcome Section */}
            {!isAdmin && (
                <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-6 text-white shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-1">Welcome back, {user?.email?.split('@')[0] || 'User'}!</h2>
                            <p className="text-primary-100 text-sm">Hungry? Order your favorite meal now.</p>
                        </div>
                        <Link to="/" className="bg-white text-primary-700 px-6 py-2.5 rounded-full font-bold hover:bg-gray-50 transition shadow-sm whitespace-nowrap">
                            Order Now
                        </Link>
                    </div>
                </div>
            )}

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 md:grid-cols-${isAdmin ? '4' : '3'} gap-4`}>
                {displayStats.map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${stat.color}`}>
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</h4>
                        <span className="text-2xl font-bold text-gray-900 block mt-1">{stat.value}</span>
                    </div>
                ))}
            </div>

            {/* Recent Orders Section (Different links for Admin vs User) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-gray-800">Recent Activity</h3>
                    <Link to={isAdmin ? "/dashboard/orders" : "/dashboard/my-orders"} className="text-primary-600 text-sm font-medium hover:underline flex items-center">
                        View All <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="p-8 text-center text-gray-400 text-sm italic">
                    (Order history table would load here)
                </div>
            </div>
        </div>
    );
};
