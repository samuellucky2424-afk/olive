import {
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
    DocumentData
} from 'firebase/firestore';
import { db, storage } from '../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const COLLECTION_NAME = 'products';

export interface Product {
    id?: string;
    name: string;
    price: number;
    category: string;
    image?: string;
    inventory: number;
    description?: string;
    createdAt?: Date;
}

export const ProductService = {
    // Fetch all products, optionally filtered by category
    getProducts: async (category?: string): Promise<Product[]> => {
        try {
            let q = collection(db, COLLECTION_NAME);
            if (category && category !== 'all') {
                // @ts-ignore - query type mismatch in some firestore versions, simplified for now
                q = query(collection(db, COLLECTION_NAME), where('category', '==', category));
            }

            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Product));
        } catch (error) {
            console.error("Error fetching products:", error);
            // Fallback for demo if DB is empty or fails
            return [];
        }
    },

    // Add a new product
    addProduct: async (product: Product, imageFile?: File): Promise<string> => {
        try {
            let imageUrl = product.image;

            if (imageFile) {
                const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
                const uploadResult = await uploadBytes(storageRef, imageFile);
                imageUrl = await getDownloadURL(uploadResult.ref);
            }

            const docRef = await addDoc(collection(db, COLLECTION_NAME), {
                ...product,
                image: imageUrl,
                createdAt: new Date()
            });
            return docRef.id;
        } catch (error) {
            console.error("Error adding product:", error);
            throw error;
        }
    },

    // Update an existing product
    updateProduct: async (id: string, updates: Partial<Product>): Promise<void> => {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await updateDoc(docRef, updates);
        } catch (error) {
            console.error("Error updating product:", error);
            throw error;
        }
    },

    // Delete a product
    deleteProduct: async (id: string): Promise<void> => {
        try {
            const docRef = doc(db, COLLECTION_NAME, id);
            await deleteDoc(docRef);
        } catch (error) {
            console.error("Error deleting product:", error);
            throw error;
        }
    }
};
