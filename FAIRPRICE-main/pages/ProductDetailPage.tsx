import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { ItemDetail } from '../components/ItemDetail';
import { useAppStore } from '../store';
import { PRODUCTS } from '../constants';

export const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { cartItems, addToCart } = useAppStore();

    const product = PRODUCTS.find(p => p.id === Number(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleNavigateToDashboard = () => navigate('/dashboard');
    const handleNavigateToCart = () => navigate('/cart');
    const handleBack = () => navigate('/');

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-100">
            <Navbar
                cartCount={cartItems.length}
                onNavigateToDashboard={handleNavigateToDashboard}
                onNavigateToCart={handleNavigateToCart}
            />
            <div className="flex-grow flex flex-col pt-16">
                <ItemDetail
                    product={product}
                    onBack={handleBack}
                    addToCart={(drinks: any) => addToCart(product, { extraDrinks: drinks })}
                />
            </div>
        </div>
    );
};
