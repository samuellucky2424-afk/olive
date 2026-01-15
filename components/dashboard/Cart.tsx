import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';

interface CartItem {
  cartId: number;
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  extraDrinks: { id: string, name: string, price: number, quantity: number }[];
  totalPrice: number;
}

interface CartProps {
  items: CartItem[];
  onRemove: (cartId: number) => void;
  onClearCart: () => void;
  onNavigateToStore: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onClearCart, onNavigateToStore }) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'details'>('cart');
  const [deliveryOption, setDeliveryOption] = useState<'table' | 'delivery'>('table');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    tableNumber: '',
    address: ''
  });

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-3xl shadow-xl border border-gray-100 min-h-[500px]">
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
          <ShoppingCart className="w-12 h-12 text-gray-300" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Cart is Empty</h3>
        <p className="text-gray-500 mb-8 max-w-xs">Looks like you haven't added anything to your cart yet.</p>
        <button
          onClick={onNavigateToStore}
          className="px-8 py-4 bg-primary-600 text-white rounded-2xl font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all active:scale-95"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-gray-900">Your Cart ({items.length})</h2>
        <button onClick={onNavigateToStore} className="text-primary-600 font-bold text-sm hover:underline">Continue Shopping</button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items List */}
        <div className="flex-1 space-y-4">
          {items.map((item) => (
            <div key={item.cartId} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 flex gap-6 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-gray-50 rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight">{item.name}</h3>
                    <button
                      onClick={() => onRemove(item.cartId)}
                      className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-all"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-2 py-0.5 rounded uppercase tracking-wider">{item.category}</span>

                  <div className="mt-2 space-y-1">
                    {item.portions > 1 && (
                      <p className="text-xs text-gray-500 font-bold">Portions: {item.portions}</p>
                    )}
                    {item.addSalad && (
                      <p className="text-xs text-green-600 font-bold">+ Fresh Salad</p>
                    )}
                    {item.soup && (
                      <p className="text-xs text-gray-700 font-bold">Soup: {item.soup.name}</p>
                    )}
                    {item.proteins && item.proteins.length > 0 && (
                      <p className="text-xs text-gray-700">
                        <span className="font-bold">Protein:</span> {item.proteins.map((p: any) => p.name).join(', ')}
                      </p>
                    )}
                    {item.extraDrinks && item.extraDrinks.length > 0 && (
                      <div className="pt-1">
                        {item.extraDrinks.map((drink, idx) => (
                          <p key={idx} className="text-[10px] text-gray-500 flex items-center gap-1">
                            <span className="font-bold text-gray-700">{drink.quantity}x</span> {drink.name}
                          </p>
                        ))}
                      </div>
                    )}
                    {item.notes && (
                      <p className="text-[10px] text-orange-600 italic mt-1 border-l-2 border-orange-200 pl-2">"{item.notes}"</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-end mt-4">
                  <span className="font-black text-xl text-gray-900">₦{item.totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>

            {checkoutStep === 'cart' ? (
              <>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-600 font-medium">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 font-medium">
                    <span>Delivery</span>
                    <span className="text-green-600 font-bold uppercase text-xs">Calculated at Checkout</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black text-gray-900 border-t border-gray-100 pt-4">
                    <span>Total</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => setCheckoutStep('details')}
                  className="w-full py-4 bg-secondary-500 text-white rounded-2xl font-bold shadow-lg shadow-secondary-500/30 hover:bg-secondary-600 transition-all active:scale-95 uppercase tracking-widest"
                >
                  Proceed to Checkout
                </button>
              </>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="090 0000 0000"
                    className="w-full p-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 transition-all"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  />
                </div>

                <div className="flex gap-2 p-1.5 bg-gray-100 rounded-2xl">
                  <button
                    onClick={() => setDeliveryOption('table')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${deliveryOption === 'table' ? 'bg-white shadow-md text-primary-600' : 'text-gray-500'}`}
                  >
                    At Mall (Table)
                  </button>
                  <button
                    onClick={() => setDeliveryOption('delivery')}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${deliveryOption === 'delivery' ? 'bg-white shadow-md text-primary-600' : 'text-gray-500'}`}
                  >
                    Home Delivery
                  </button>
                </div>

                {deliveryOption === 'table' ? (
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Table Number</label>
                    <input
                      type="text"
                      placeholder="e.g. Table 5"
                      className="w-full p-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 transition-all"
                      value={formData.tableNumber}
                      onChange={(e) => setFormData({ ...formData, tableNumber: e.target.value })}
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2 ml-1">House Address</label>
                    <textarea
                      placeholder="Street name, landmark..."
                      className="w-full p-4 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary-500 transition-all"
                      rows={2}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                )}

                <div className="border-t border-gray-100 pt-6 mt-6">
                  <div className="flex justify-between text-2xl font-black text-gray-900 mb-6">
                    <span>Total</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>

                  {/* Paystack Button (Locked) */}
                  <button
                    disabled
                    className="w-full py-4 bg-gray-100 text-gray-400 rounded-2xl font-bold border-2 border-dashed border-gray-300 cursor-not-allowed mb-2 flex items-center justify-center gap-2"
                  >
                    Pay with Paystack (Coming Soon)
                  </button>

                  <button
                    onClick={() => {
                      if (!formData.fullName || !formData.phoneNumber) {
                        alert('Please fill in your name and phone number.');
                        return;
                      }
                      alert(`Order Placed Successfully! (Cash/Transfer)\n\nOrder ID: #ORD-${Math.floor(Math.random() * 100000)}\nCustomer: ${formData.fullName}\nTotal: ₦${subtotal.toLocaleString()}`);
                      onClearCart();
                      setCheckoutStep('cart');
                      onNavigateToStore();
                    }}
                    className="w-full py-4 bg-primary-600 text-white rounded-2xl font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all active:scale-95 uppercase tracking-widest"
                  >
                    Place Order (Pay on Delivery)
                  </button>

                  <button
                    onClick={() => setCheckoutStep('cart')}
                    className="w-full mt-4 py-2 text-sm font-bold text-gray-400 hover:text-primary-600 transition-colors"
                  >
                    Back to Cart Review
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={onNavigateToStore}
              className="w-full mt-4 py-4 bg-gray-50 text-gray-500 rounded-2xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 border border-gray-100"
            >
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};