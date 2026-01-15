import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { StoreHome } from './pages/StoreHome';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { OrdersManager } from './pages/dashboard/OrdersManager';
import { ProductsManager } from './pages/dashboard/ProductsManager';
import { CustomersManager } from './pages/dashboard/CustomersManager';
import { SettingsPage } from './pages/dashboard/SettingsPage';
import { UserOrders } from './pages/dashboard/UserOrders';
import { UserProfile } from './pages/dashboard/UserProfile';
import { HelpSupport } from './pages/dashboard/HelpSupport';
import { StaffLogin } from './components/staff/StaffLogin';
import { useAppStore } from './store';

const App: React.FC = () => {
  const { user } = useAppStore();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<StoreHome />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/staff-login" element={<StaffLogin onLogin={() => { }} />} />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="orders" element={<OrdersManager />} />
        <Route path="my-orders" element={<UserOrders />} />
        <Route path="products" element={<ProductsManager />} />
        <Route path="customers" element={<CustomersManager />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="help" element={<HelpSupport />} />
        <Route path="notifications" element={<div className="p-8">Notifications Page (Coming Soon)</div>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;