import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Heart, MapPin, Settings, LogOut, User, Menu, X, Home, Users, Bell, Search } from 'lucide-react';
import { useAppStore } from '../../store';

export const DashboardLayout: React.FC = () => {
    const { user, isAdmin, updateUser } = useAppStore();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        // TODO: Implement Firebase logout
        updateUser(null);
        navigate('/');
    };

    const userMenuItems = [
        { path: '/dashboard', label: 'My Overview', icon: LayoutDashboard },
        { path: '/dashboard/my-orders', label: 'My Orders', icon: Package },
        { path: '/dashboard/profile', label: 'My Profile', icon: User },
        { path: '/dashboard/notifications', label: 'Notifications', icon: Bell },
        { path: '/dashboard/help', label: 'Help & Support', icon: Heart }, // Using Heart as generic help icon or import HelpCircle
    ];

    const adminMenuItems = [
        { path: '/dashboard', label: 'Store Overview', icon: LayoutDashboard },
        { path: '/dashboard/orders', label: 'All Orders', icon: Package },
        { path: '/dashboard/products', label: 'Products', icon: ShoppingCart },
        { path: '/dashboard/customers', label: CustomersLabel, icon: Users },
        { path: '/dashboard/settings', label: 'Settings', icon: Settings },
    ];

    const menuItems = isAdmin ? adminMenuItems : userMenuItems;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
            {/* Mobile Header */}
            <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-30">
                <div className="flex items-center gap-2">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600">
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-bold text-lg text-gray-800">FairPrice</span>
                </div>
            </div>

            {/* Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:relative md:translate-x-0 md:shadow-none md:border-r md:border-gray-200
            `}>
                <div className="h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <Link to="/" className="cursor-pointer">
                            <span className="font-extrabold text-2xl tracking-tighter text-gray-900 leading-none">FAIR<span className="text-primary-600">PRICE</span></span>
                        </Link>
                        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        <Link
                            to="/"
                            className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-primary-600 transition-colors mb-4 border border-dashed border-gray-200"
                        >
                            <Home className="w-5 h-5 mr-3" />
                            Back to Store
                        </Link>

                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${location.pathname === item.path
                                    ? 'bg-primary-50 text-primary-600'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile & Logout */}
                    <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                        <div className="flex items-center gap-3 mb-3 px-2">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-xs">
                                {user?.email?.charAt(0).toUpperCase() || 'U'}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-gray-900 truncate">{user?.email || 'Guest'}</p>
                                <p className="text-xs text-gray-500">{isAdmin ? 'Admin' : 'Customer'}</p>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                            <LogOut className="w-4 h-4 mr-3" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto h-[calc(100vh-60px)] md:h-screen w-full">
                <div className="max-w-7xl mx-auto p-4 md:p-8">
                    {/* Top Header for Desktop */}
                    <header className="hidden md:flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">
                                {isAdmin ? 'Admin Dashboard' : 'My Dashboard'}
                            </h1>
                            <p className="text-sm text-gray-500">
                                {isAdmin ? 'Manage your store efficiently' : 'Welcome back, manage your orders'}
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary-500 w-64" />
                            </div>
                            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                        </div>
                    </header>

                    <div className="animate-in fade-in duration-300">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

// Start Helper
const CustomersLabel = 'Customers';
