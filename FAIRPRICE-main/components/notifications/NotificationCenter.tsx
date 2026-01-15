import React from 'react';
import { Bell } from 'lucide-react';

export const NotificationCenter: React.FC = () => {
    return (
        <div className="relative">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-all">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            {/* Dropdown would go here */}
        </div>
    );
};
