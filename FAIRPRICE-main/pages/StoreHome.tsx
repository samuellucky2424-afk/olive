import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductListing } from '../components/Products';
import { FloatingButton } from '../components/FloatingButton';
import { useAppStore } from '../store';

export const StoreHome: React.FC = () => {
    const navigate = useNavigate();
    const { cartItems, addToCart } = useAppStore();

    const handleNavigateToDashboard = () => navigate('/dashboard');
    const handleNavigateToCart = () => navigate('/cart');

    // Adapted to match ProductListing signature if needed, or ProductListing expects (product, drinks)
    const handleAddToCart = (product: any, drinks?: any) => {
        addToCart(product, { extraDrinks: drinks });
    };

    const handleOpenDetail = (product: any) => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-100">
            <Navbar
                cartCount={cartItems.length}
                onNavigateToDashboard={handleNavigateToDashboard}
                onNavigateToCart={handleNavigateToCart}
            />
            <main className="flex-grow pt-16"> {/* Add padding for fixed navbar if needed */}
                <Hero />
                <CategoryGrid />
                <ProductListing addToCart={handleAddToCart} onOpenDetail={handleOpenDetail} />
            </main>
            <FloatingButton />
        </div>
    );
};
