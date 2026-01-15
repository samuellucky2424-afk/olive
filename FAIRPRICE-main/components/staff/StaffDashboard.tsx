import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Edit2,
  Save,
  X
} from 'lucide-react';
import { SOFT_DRINKS } from '../../constants';

interface StaffDashboardProps {
  onLogout: () => void;
}

export const StaffDashboard: React.FC<StaffDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [drinks, setDrinks] = useState(SOFT_DRINKS);
  const [editingDrinkId, setEditingDrinkId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<string>('');

  const handleEditPrice = (id: string, currentPrice: number) => {
    setEditingDrinkId(id);
    setEditPrice(currentPrice.toString());
  };

  const handleSavePrice = (id: string) => {
    const newPrice = parseInt(editPrice);
    if (!isNaN(newPrice)) {
      setDrinks(prev => prev.map(d => d.id === id ? { ...d, price: newPrice } : d));
      // In a real app, you would also update the global constant or a backend
      (SOFT_DRINKS.find(d => d.id === id) as any).price = newPrice;
    }
    setEditingDrinkId(null);
  };

  const stats = [
    { label: 'Total Sales', value: '₦1,284,500', change: '+12.5%', trendingUp: true },
    { label: 'Active Orders', value: '42', change: '+3.2%', trendingUp: true },
    { label: 'New Customers', value: '18', change: '-2.4%', trendingUp: false },
    { label: 'Stock Alerts', value: '5', change: 'Critical', trendingUp: false },
  ];

  const recentOrders = [
    { id: '#ORD-1234', customer: 'John Doe', amount: '₦12,500', status: 'Delivered', date: '2 mins ago' },
    { id: '#ORD-1235', customer: 'Jane Smith', amount: '₦8,200', status: 'Processing', date: '15 mins ago' },
    { id: '#ORD-1236', customer: 'Robert Johnson', amount: '₦24,000', status: 'Pending', date: '1 hour ago' },
    { id: '#ORD-1237', customer: 'Emily Brown', amount: '₦5,400', status: 'Delivered', date: '3 hours ago' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Staff Admin</span>
          </div>
        </div>

        <nav className="flex-grow p-4 space-y-2">
          {[
            { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
            { id: 'products', icon: Package, label: 'Products' },
            { id: 'orders', icon: ShoppingCart, label: 'Orders' },
            { id: 'customers', icon: Users, label: 'Customers' },
            { id: 'prices', icon: TrendingUp, label: 'Manage Prices' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-primary-50 text-primary-600 font-semibold' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-all">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Admin Staff</p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                AS
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-grow overflow-y-auto p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab} Dashboard</h1>
              <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 shadow-lg shadow-primary-500/20 transition-all">
              <Plus className="w-5 h-5" />
              Add New Product
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-medium mb-2">{stat.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <div className={`flex items-center gap-1 text-sm font-semibold ${stat.trendingUp ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trendingUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {activeTab === 'prices' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-bold text-gray-900">Soft Drink Prices</h3>
                <p className="text-sm text-gray-500">Update prices for all meals globally</p>
              </div>
              <div className="p-6 space-y-4">
                {drinks.map(drink => (
                  <div key={drink.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="font-bold text-gray-900">{drink.name}</p>
                      <p className="text-sm text-gray-500">Current: ₦{drink.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {editingDrinkId === drink.id ? (
                        <>
                          <input 
                            type="number" 
                            value={editPrice}
                            onChange={(e) => setEditPrice(e.target.value)}
                            className="w-24 p-2 border rounded-lg text-sm font-bold"
                          />
                          <button onClick={() => handleSavePrice(drink.id)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg"><Save className="w-5 h-5" /></button>
                          <button onClick={() => setEditingDrinkId(null)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><X className="w-5 h-5" /></button>
                        </>
                      ) : (
                        <button onClick={() => handleEditPrice(drink.id, drink.price)} className="flex items-center gap-2 px-4 py-2 text-primary-600 font-bold hover:bg-primary-50 rounded-lg transition-all">
                          <Edit2 className="w-4 h-4" /> Edit Price
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab !== 'prices' && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Recent Orders</h3>
                <button className="text-primary-600 font-semibold text-sm hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-all">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};