import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity?: number;
    cartId: number;
    [key: string]: any;
}

interface AppState {
    user: User | null;
    isLoading: boolean;
    isAdmin: boolean;
    updateUser: (user: User | null) => void;
    // Cart State
    cartItems: CartItem[];
    addToCart: (product: any, options?: any) => void;
    removeFromCart: (cartId: number) => void;
    clearCart: () => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
            setIsLoading(false);
            if (authUser) {
                // Temporary Admin Check
                setIsAdmin(authUser.email?.includes('admin') || false);
            } else {
                setIsAdmin(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const updateUser = (u: User | null) => {
        setUser(u);
    };

    const addToCart = (product: any, options: any = {}) => {
        const { extraDrinks = [], portions = 1, totalPrice } = options;
        const cartItem = {
            ...product,
            ...options,
            cartId: Date.now(),
            totalPrice: totalPrice || (product.price + extraDrinks.reduce((sum: number, d: any) => sum + d.price * d.quantity, 0))
        };
        setCartItems(prev => [...prev, cartItem]);
    };

    const removeFromCart = (cartId: number) => {
        setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <AppContext.Provider value= {{
        user, isLoading, isAdmin, updateUser,
            cartItems, addToCart, removeFromCart, clearCart
    }
}>
    { children }
    </AppContext.Provider>
    );
};

export const useAppStore = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppStore must be used within an AppProvider");
    }
    return context;
};
