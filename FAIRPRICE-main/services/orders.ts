import {
    collection,
    addDoc,
    updateDoc,
    doc,
    getDocs,
    orderBy,
    query,
    serverTimestamp
} from 'firebase/firestore';
import { db } from '../lib/firebase';

const COLLECTION_NAME = 'orders';

export interface Order {
    id?: string;
    customerId: string;
    customerName: string;
    items: any[];
    totalAmount: number;
    status: 'Pending' | 'Processing' | 'Delivered' | 'Cancelled';
    createdAt?: any;
}

export const OrderService = {
    // Create new order
    createOrder: async (order: Order): Promise<string> => {
        try {
            const docRef = await addDoc(collection(db, COLLECTION_NAME), {
                ...order,
                createdAt: serverTimestamp()
            });
            return docRef.id;
        } catch (error) {
            console.error("Error creating order:", error);
            throw error;
        }
    },

    // Get all orders (for admin)
    getAllOrders: async (): Promise<Order[]> => {
        try {
            const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Order));
        } catch (error) {
            console.error("Error getting orders:", error);
            return [];
        }
    },

    // Update order status
    updateStatus: async (id: string, status: Order['status']): Promise<void> => {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await updateDoc(docRef, { status });
        } catch (error) {
            console.error("Error updating order status:", error);
            throw error;
        }
    }
};
