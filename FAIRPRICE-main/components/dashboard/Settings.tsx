import React from 'react';
import { Save } from 'lucide-react';

export const Settings: React.FC = () => {
    return (
        <div className="max-w-2xl">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Account Settings</h2>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Personal Information</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" defaultValue="John" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" defaultValue="Doe" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" defaultValue="john.doe@example.com" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" defaultValue="+234 801 234 5678" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div className="pt-2">
                        <button type="button" className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-lg shadow hover:bg-primary-700 flex items-center gap-2">
                            <Save className="w-4 h-4" /> Save Changes
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-4 pb-2 border-b">Change Password</h3>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input type="password" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input type="password" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input type="password" className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                    </div>
                    <div className="pt-2">
                        <button type="button" className="px-6 py-2.5 bg-gray-800 text-white font-bold rounded-lg shadow hover:bg-gray-900 flex items-center gap-2">
                            Update Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};