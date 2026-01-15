import React, { useState } from 'react';
import { LayoutDashboard, Package, ShoppingCart, Heart, MapPin, Settings, LogOut, User, Menu, X, Home } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Overview } from './dashboard/Overview';
import { Orders } from './dashboard/Orders';
import { Cart } from './dashboard/Cart';
import { Wishlist } from './dashboard/Wishlist';
import { Addresses } from './dashboard/Addresses';
import { Settings as SettingsView } from './dashboard/Settings';

interface DashboardProps {
    onNavigateToStore: () => void;
}

type DashboardTab = 'overview' | 'orders' | 'cart' | 'wishlist' | 'addresses' | 'settings';

export const Dashboard: React.FC<DashboardProps> = ({ onNavigateToStore }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('overview');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'orders', label: 'My Orders', icon: Package },
        { id: 'cart', label: 'Cart', icon: ShoppingCart },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'addresses', label: 'Saved Addresses', icon: MapPin },
        { id: 'settings', label: 'Account Settings', icon: Settings },
    ];

    if (isAdmin) {
        menuItems.push({ id: 'admin', label: 'Admin Dashboard', icon: Settings });
    }

    const renderContent = () => {
        if (activeTab === 'admin' && isAdmin) {
            return (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-xl font-bold mb-4">Admin: Manage Menu & Orders</h2>
                        <p className="text-sm text-gray-500 mb-6">Real-time order notifications and inventory control.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 bg-primary-50 rounded-lg border border-primary-100">
                                <span className="block text-xs font-bold text-primary-600 uppercase mb-1">New Orders</span>
                                <span className="text-2xl font-bold">0</span>
                            </div>
                            <div className="p-4 bg-secondary-50 rounded-lg border border-secondary-100">
                                <span className="block text-xs font-bold text-secondary-600 uppercase mb-1">Total Sales</span>
                                <span className="text-2xl font-bold">₦0</span>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                                <span className="block text-xs font-bold text-orange-600 uppercase mb-1">Low Stock Items</span>
                                <span className="text-2xl font-bold">1</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold mb-4">Inventory Management</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-2">Item</th>
                                        <th className="py-2">Stock</th>
                                        <th className="py-2">Price</th>
                                        <th className="py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PRODUCTS.filter(p => p.category === 'meals').map(p => (
                                        <tr key={p.id} className="border-b">
                                            <td className="py-2">{p.name}</td>
                                            <td className="py-2">{(p as any).inventory}</td>
                                            <td className="py-2">₦{p.price.toLocaleString()}</td>
                                            <td className="py-2">
                                                <button className="text-primary-600 hover:underline">Edit</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            );
        }
        switch (activeTab) {
            case 'overview': return <Overview onChangeTab={setActiveTab} />;
            case 'orders': return <Orders />;
            case 'cart': return <Cart onNavigateToStore={onNavigateToStore} />;
            case 'wishlist': return <Wishlist onMoveToCart={() => setActiveTab('cart')} />;
            case 'addresses': return <Addresses />;
            case 'settings': return <SettingsView />;
            default: return <Overview onChangeTab={setActiveTab} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
            {/* Mobile Header */}
            <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-30">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-bold text-lg text-gray-800">My Account</span>
                </div>
                <div className="flex items-center gap-2">
                     <button onClick={onNavigateToStore} className="text-primary-600 font-medium text-sm">
                        Back to Shop
                     </button>
                </div>
            </div>

            {/* Sidebar (Desktop & Mobile Drawer) */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:shadow-none md:border-r md:border-gray-200
            `}>
                <div className="h-full flex flex-col">
                    {/* Sidebar Header */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                         <div onClick={onNavigateToStore} className="cursor-pointer">
                            <span className="font-extrabold text-2xl tracking-tighter text-gray-900 leading-none">FAIR<span className="text-primary-600">PRICE</span></span>
                         </div>
                         <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400">
                            <X className="w-6 h-6" />
                         </button>
                    </div>

                    {/* User Profile Summary */}
                    <div className="p-6 bg-gray-50 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">John Doe</h3>
                                    <p className="text-xs text-gray-500">john.doe@example.com</p>
                                    <button 
                                        onClick={() => {
                                            setIsAdmin(!isAdmin);
                                            setActiveTab('overview');
                                        }}
                                        className="text-[10px] bg-gray-200 px-2 py-0.5 rounded mt-1 hover:bg-gray-300 transition-colors"
                                    >
                                        Toggle Admin Mode ({isAdmin ? 'ON' : 'OFF'})
                                    </button>
                                </div>
                            </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        <button 
                            onClick={onNavigateToStore}
                            className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-primary-600 transition-colors mb-4 border border-dashed border-gray-200"
                        >
                            <Home className="w-5 h-5 mr-3" />
                            Back to Store
                        </button>
                        
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveTab(item.id as DashboardTab); setIsSidebarOpen(false); }}
                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                                    activeTab === item.id 
                                    ? 'bg-primary-50 text-primary-600' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t border-gray-200">
                        <button onClick={onNavigateToStore} className="w-full flex items-center px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            <LogOut className="w-5 h-5 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay for Mobile Sidebar */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto h-[calc(100vh-60px)] md:h-screen pb-16 md:pb-0">
                <div className="max-w-5xl mx-auto p-4 md:p-8">
                    {/* Header for Desktop */}
                    <div className="hidden md:flex justify-between items-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {menuItems.find(i => i.id === activeTab)?.label}
                        </h1>
                        <span className="text-sm text-gray-500">
                             Welcome back, John!
                        </span>
                    </div>

                    {/* Content Area */}
                    <div className="animate-in fade-in duration-300">
                        {renderContent()}
                    </div>
                </div>
            </main>

            {/* Mobile Bottom Navigation (Sticky) */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-30 pb-safe">
                <div className="grid grid-cols-4 h-16">
                    <button 
                        onClick={() => setActiveTab('overview')} 
                        className={`flex flex-col items-center justify-center ${activeTab === 'overview' ? 'text-primary-600' : 'text-gray-400'}`}
                    >
                        <LayoutDashboard className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-medium">Home</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('orders')} 
                        className={`flex flex-col items-center justify-center ${activeTab === 'orders' ? 'text-primary-600' : 'text-gray-400'}`}
                    >
                        <Package className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-medium">Orders</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('cart')} 
                        className={`flex flex-col items-center justify-center ${activeTab === 'cart' ? 'text-primary-600' : 'text-gray-400'}`}
                    >
                        <ShoppingCart className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-medium">Cart</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('settings')} 
                        className={`flex flex-col items-center justify-center ${activeTab === 'settings' ? 'text-primary-600' : 'text-gray-400'}`}
                    >
                        <User className="w-6 h-6 mb-1" />
                        <span className="text-[10px] font-medium">Profile</span>
                    </button>
                </div>
            </div>
        </div>
    );
};