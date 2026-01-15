import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Cart } from '../components/dashboard/Cart';
import { useAppStore } from '../store';

export const CartPage: React.FC = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, clearCart } = useAppStore();

    const handleNavigateToStore = () => navigate('/');
    const handleNavigateToDashboard = () => navigate('/dashboard');
    const handleNavigateToCart = () => { }; // Already here

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-100">
            <Navbar
                cartCount={cartItems.length}
                onNavigateToDashboard={handleNavigateToDashboard}
                onNavigateToCart={handleNavigateToCart}
            />
            <main className="flex-grow pt-24 pb-8 px-4 max-w-7xl mx-auto w-full">
                <Cart
                    items={cartItems}
                    onRemove={removeFromCart}
                    onClearCart={clearCart}
                    onNavigateToStore={handleNavigateToStore}
                />
            </main>
        </div>
    );
};
