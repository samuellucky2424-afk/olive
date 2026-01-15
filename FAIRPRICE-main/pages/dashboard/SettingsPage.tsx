import React from 'react';
import { User, Bell, Lock, Shield } from 'lucide-react';
import { useAppStore } from '../../store';

export const SettingsPage: React.FC = () => {
    const { isAdmin } = useAppStore();

    if (!isAdmin) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-center">
                <Shield className="w-12 h-12 text-gray-300 mb-4" />
                <h3 className="text-lg font-bold text-gray-900">Access Restricted</h3>
                <p className="text-gray-500">You do not have permission to view this page.</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Settings</h2>

            <div className="space-y-6">
                {/* Profile Settings */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <User className="w-5 h-5 text-primary-600" />
                        <h3 className="font-bold text-gray-900">Profile Information</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" defaultValue="Admin User" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-primary-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" defaultValue="admin@fairprice.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-1 focus:ring-primary-500 outline-none" />
                        </div>
                    </div>
                </section>

                {/* Notifications */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Bell className="w-5 h-5 text-primary-600" />
                        <h3 className="font-bold text-gray-900">Notifications</h3>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500" />
                            <span className="text-sm text-gray-700">Receive new order alerts</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500" />
                            <span className="text-sm text-gray-700">Receive low stock warnings</span>
                        </label>
                    </div>
                </section>

                {/* Security */}
                <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <Lock className="w-5 h-5 text-primary-600" />
                        <h3 className="font-bold text-gray-900">Security</h3>
                    </div>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Change Password
                    </button>
                </section>
            </div>
        </div>
    );
};
