import { ShoppingBasket, Coffee, Home, Apple, Star, Smartphone, Shirt, Gift, Truck, Tag, ShieldCheck, Headphones, Utensils } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "OLIVE MEGA MALL",
  tagline: "Best Supermarket in Agbor",
  address: "7634+M74, Asaba Rd, Boji Boji, Agbor 321103, Delta",
  phone: "0913 396 9780",
  hours: "8:00 AM – 9:30 PM",
  rating: 5.0,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5786377742663!2d6.246479674034872!3d6.229158226630132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043f5a02e536289%3A0x66c8f65405c74381!2sAgbor%2C%20Delta!5e0!3m2!1sen!2sng!4v1709400000000!5m2!1sen!2sng",
};

export const FEATURES = [
    { title: "Fast Delivery", description: "Within Agbor metropolis", icon: Truck },
    { title: "Best Prices", description: "We beat market prices", icon: Tag },
    { title: "Secure Payment", description: "100% secure checkout", icon: ShieldCheck },
    { title: "24/7 Support", description: "Dedicated support team", icon: Headphones },
];

export const CATEGORIES = [
  { id: 'meals', title: "Meals", icon: Utensils, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400" },
  { id: 'groceries', title: "Groceries", icon: ShoppingBasket, image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
  { id: 'beverages', title: "Beverages", icon: Coffee, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400" },
  { id: 'household', title: "Household", icon: Home, image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400" },
  { id: 'fresh', title: "Fresh Food", icon: Apple, image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400" },
  { id: 'toiletries', title: "Toiletries", icon: Gift, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400" },
  { id: 'snacks', title: "Snacks", icon: Star, image: "https://images.unsplash.com/photo-1621939514649-28b12e81658e?auto=format&fit=crop&q=80&w=400" },
];

export const PROTEINS = [
  { id: 'p1', name: 'Fish', price: 800 },
  { id: 'p2', name: 'Chicken', price: 1200 },
  { id: 'p3', name: 'Turkey', price: 1500 },
  { id: 'p4', name: 'Beef', price: 700 },
  { id: 'p5', name: 'Goat meat', price: 1800 },
];

export const SOUPS = [
  { id: 's1', name: 'Egusi', price: 1500 },
  { id: 's2', name: 'Ogbono', price: 1400 },
  { id: 's3', name: 'Okra', price: 1200 },
  { id: 's4', name: 'Vegetable', price: 1300 },
  { id: 's5', name: 'Banga', price: 1600 },
];

export const SOFT_DRINKS = [
  { id: 'sd1', name: 'Coke', price: 300 },
  { id: 'sd2', name: 'Fanta', price: 300 },
  { id: 'sd3', name: 'Sprite', price: 300 },
  { id: 'sd4', name: 'Pepsi', price: 250 },
  { id: 'sd5', name: 'Bottle Water', price: 200 },
  { id: 'sd6', name: 'Malt', price: 500 },
  { id: 'sd7', name: 'Juice', price: 600 },
];

export const PRODUCTS = [
  {
    id: 101,
    name: "Jollof Rice",
    category: "meals",
    mealType: "regular",
    price: 1500,
    oldPrice: 1800,
    rating: 5,
    image: "https://images.unsplash.com/photo-1567027757540-7b572280fa22?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 15,
    discount: "",
    description: "Classic Nigerian Jollof Rice. Smokey and delicious."
  },
  {
    id: 102,
    name: "Fried Rice",
    category: "meals",
    mealType: "regular",
    price: 1500,
    oldPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 10,
    discount: "",
    description: "Savory Fried Rice cooked with fresh vegetables."
  },
  {
    id: 103,
    name: "White Rice & Beans",
    category: "meals",
    mealType: "regular",
    price: 1500,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 5,
    discount: "",
    description: "Classic white rice and beans combination."
  },
  {
    id: 105,
    name: "Eba",
    category: "meals",
    mealType: "swallow",
    price: 1000,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 20,
    discount: "",
    description: "Traditional Nigerian swallow made from cassava flakes."
  },
  {
    id: 106,
    name: "Fufu",
    category: "meals",
    mealType: "swallow",
    price: 1000,
    oldPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 20,
    discount: "",
    description: "Smooth and soft cassava swallow."
  },
  {
    id: 107,
    name: "Semo",
    category: "meals",
    mealType: "swallow",
    price: 1200,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 20,
    discount: "",
    description: "Premium semolina swallow."
  },
  {
    id: 108,
    name: "Pounded Yam",
    category: "meals",
    mealType: "swallow",
    price: 1500,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    inventory: 20,
    discount: "",
    description: "Freshly pounded yam swallow."
  },
  {
    id: 1,
    name: "Mama Gold Parboiled Rice 50kg",
    category: "groceries",
    price: 65000,
    oldPrice: 72000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "-10%",
    description: "Premium quality Nigerian parboiled rice. Stone-free, clean, and expands well when cooked."
  },
  {
    id: 2,
    name: "Golden Penny Semovita 10kg",
    category: "groceries",
    price: 12500,
    oldPrice: 13500,
    rating: 4,
    image: "https://images.unsplash.com/photo-1649234988365-d6c5982d61a0?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "",
    description: "Fortified with Vitamin A, Golden Penny Semovita is easy to prepare and goes well with any soup of your choice."
  },
  {
    id: 3,
    name: "Kings Vegetable Oil 5L",
    category: "groceries",
    price: 18000,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1474979266404-7caddbed77a5?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "",
    description: "Heart-friendly pure vegetable oil. Cholesterol free and perfect for all your frying and cooking needs."
  },
  {
    id: 4,
    name: "Coca-Cola 50cl x 12 Pack",
    category: "beverages",
    price: 4500,
    oldPrice: 5000,
    rating: 5,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "-10%",
    description: "Classic refreshing taste of Coca-Cola. Pack of 12 plastic bottles, best served chilled."
  },
  {
    id: 5,
    name: "Eva Water 75cl Carton",
    category: "beverages",
    price: 2200,
    oldPrice: null,
    rating: 4,
    image: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "",
    description: "Pure, crisp, and refreshing Eva water. Trusted for quality and hydration."
  },
  {
    id: 6,
    name: "Ariel Detergent 2kg",
    category: "household",
    price: 3500,
    oldPrice: 3800,
    rating: 5,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "Sale",
    description: "Tough on stains, gentle on clothes. Ariel provides brilliant cleaning power in one wash."
  },
  {
    id: 7,
    name: "Fresh Tomatoes Basket",
    category: "fresh",
    price: 15000,
    oldPrice: 18000,
    rating: 4,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "-15%",
    description: "Farm fresh red tomatoes. Juicy and perfect for stews, salads, and sauces. Sourced locally."
  },
  {
    id: 8,
    name: "Whole Chicken 1kg",
    category: "fresh",
    price: 4500,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&q=80&w=500",
    inStock: false,
    discount: "",
    description: "Cleaned and frozen whole chicken. Tender meat suitable for grilling, frying, or boiling."
  },
  {
    id: 9,
    name: "Hollandia Yoghurt 1L",
    category: "beverages",
    price: 3200,
    oldPrice: 3500,
    rating: 5,
    image: "https://images.unsplash.com/photo-1563503767-f40d6eb132de?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "",
    description: "Creamy and nourishing drinking yoghurt. Delicious strawberry flavor."
  },
  {
    id: 10,
    name: "Peak Milk Powder 400g",
    category: "groceries",
    price: 4800,
    oldPrice: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=500",
    inStock: true,
    discount: "",
    description: "Rich and creamy instant full cream milk powder. Contains 28 vitamins and minerals."
  }
];