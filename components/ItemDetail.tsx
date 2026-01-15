import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Shield, Truck, RotateCcw, Plus, Minus, Check } from 'lucide-react';
import { SOFT_DRINKS, PROTEINS, SOUPS } from '../constants';
import { useAppStore } from '../store';

interface ItemDetailProps {
  product: any;
  onBack: () => void;
  addToCart: (options: any) => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ product, onBack, addToCart }) => {
  const [portions, setPortions] = useState(1);
  const [addSalad, setAddSalad] = useState(false);
  const [selectedProteins, setSelectedProteins] = useState<string[]>([]);
  const [selectedSoup, setSelectedSoup] = useState<string>('');
  const [selectedDrinks, setSelectedDrinks] = useState<Record<string, number>>({});
  const [notes, setNotes] = useState('');

  if (!product) return null;

  const toggleProtein = (proteinId: string) => {
    setSelectedProteins(prev =>
      prev.includes(proteinId) ? prev.filter(id => id !== proteinId) : [...prev, proteinId]
    );
  };

  const updateDrinkQuantity = (drinkId: string, delta: number) => {
    setSelectedDrinks(prev => {
      const current = prev[drinkId] || 0;
      const newValue = Math.max(0, current + delta);
      if (newValue === 0) {
        const { [drinkId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [drinkId]: newValue };
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;
    if (product.mealType === 'regular') {
      total = (product.price * portions);
      if (addSalad) total += 500;
      selectedProteins.forEach(id => {
        const protein = PROTEINS.find(p => p.id === id);
        if (protein) total += protein.price;
      });
    } else if (product.mealType === 'swallow') {
      total = product.price;
      const soup = SOUPS.find(s => s.id === selectedSoup);
      if (soup) total += soup.price;
      selectedProteins.forEach(id => {
        const protein = PROTEINS.find(p => p.id === id);
        if (protein) total += protein.price;
      });
    } else {
      total = product.price as number;
    }

    // Add drinks cost (common for all meal types now)
    Object.entries(selectedDrinks).forEach(([id, qty]) => {
      const drink = SOFT_DRINKS.find(d => d.id === id);
      if (drink) total += (drink.price as number) * (qty as number);
    });

    return total;
  };

  const isFormValid = () => {
    if (product.category !== 'meals') return true;
    if (product.mealType === 'regular') {
      return selectedProteins.length > 0;
    }
    if (product.mealType === 'swallow') {
      return selectedSoup !== '' && selectedProteins.length > 0;
    }
    return true;
  };

  const { user } = useAppStore();

  const handleAddToCart = () => {
    // Restriction: Non-registered users cannot order from Supermarket/Mall
    if (product.category !== 'meals' && !user) {
      alert("Please Login or Register to order from the Supermarket/Mall section. Meals are available to everyone!");
      return;
    }

    const extraDrinks = Object.entries(selectedDrinks).map(([id, quantity]) => {
      const drink = SOFT_DRINKS.find(d => d.id === id);
      return { ...drink, quantity };
    });

    const proteins = selectedProteins.map(id => PROTEINS.find(p => p.id === id));
    const soup = SOUPS.find(s => s.id === selectedSoup);

    addToCart({
      portions: product.mealType === 'regular' ? portions : 1,
      addSalad: product.mealType === 'regular' ? addSalad : false,
      proteins,
      soup,
      extraDrinks,
      notes,
      totalPrice: calculateTotalPrice()
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-primary-600 mb-6 transition-colors font-medium group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </button>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[400px] lg:min-h-[600px]">
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[80vh]">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.mealType || product.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="ml-1 text-gray-900 font-bold">{product.rating}.0</span>
                </div>
              </div>

              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">{product.name}</h1>

              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-4xl font-black text-primary-600">₦{calculateTotalPrice().toLocaleString()}</span>
              </div>

              <div className="space-y-8">
                {product.mealType === 'regular' && (
                  <>
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                        1. Select Portions <span className="text-red-500">*</span>
                      </h3>
                      <div className="flex items-center gap-6 bg-white p-3 rounded-xl border border-gray-200 w-fit">
                        <button onClick={() => setPortions(Math.max(1, portions - 1))} className="p-2 hover:bg-gray-100 rounded-lg text-primary-600"><Minus className="w-5 h-5" /></button>
                        <span className="text-xl font-black min-w-[2rem] text-center">{portions}</span>
                        <button onClick={() => setPortions(portions + 1)} className="p-2 hover:bg-gray-100 rounded-lg text-primary-600"><Plus className="w-5 h-5" /></button>
                      </div>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">2. Salad Option</h3>
                      <label className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 cursor-pointer hover:border-primary-500 transition-all">
                        <input type="checkbox" checked={addSalad} onChange={(e) => setAddSalad(e.target.checked)} className="w-5 h-5 text-primary-600 rounded" />
                        <span className="flex-grow font-bold text-gray-700">Add Fresh Salad</span>
                        <span className="text-primary-600 font-black">+₦500</span>
                      </label>
                    </div>
                  </>
                )}

                {product.mealType === 'swallow' && (
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                      1. Choose Soup <span className="text-red-500">*</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {SOUPS.map(soup => (
                        <label key={soup.id} className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${selectedSoup === soup.id ? 'bg-primary-50 border-primary-500' : 'bg-white border-gray-200 hover:border-primary-300'}`}>
                          <input type="radio" name="soup" checked={selectedSoup === soup.id} onChange={() => setSelectedSoup(soup.id)} className="w-5 h-5 text-primary-600" />
                          <span className="flex-grow font-bold text-gray-700">{soup.name}</span>
                          <span className="text-primary-600 font-black">₦{soup.price.toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {product.category === 'meals' && (
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest flex items-center gap-2">
                      {product.mealType === 'regular' ? '3.' : '2.'} Select Protein <span className="text-red-500">*</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {PROTEINS.map(protein => (
                        <label key={protein.id} className={`flex items-center gap-3 p-4 rounded-xl border transition-all cursor-pointer ${selectedProteins.includes(protein.id) ? 'bg-primary-50 border-primary-500' : 'bg-white border-gray-200 hover:border-primary-300'}`}>
                          <input type="checkbox" checked={selectedProteins.includes(protein.id)} onChange={() => toggleProtein(protein.id)} className="w-5 h-5 text-primary-600 rounded" />
                          <span className="flex-grow font-bold text-gray-700">{protein.name}</span>
                          <span className="text-primary-600 font-black">+₦{protein.price.toLocaleString()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Drinks Section - Now available for ALL meals, not just swallow */}
                {product.category === 'meals' && (
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">
                      {product.mealType === 'regular' ? '3. ' : '3. '} Add Drinks
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {SOFT_DRINKS.map(drink => {
                        const qty = selectedDrinks[drink.id] || 0;
                        return (
                          <div key={drink.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center justify-between">
                            <div className="flex-grow">
                              <p className="font-bold text-gray-900">{drink.name}</p>
                              <p className="text-primary-600 font-bold text-sm">₦{drink.price}</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button onClick={() => updateDrinkQuantity(drink.id, -1)} disabled={qty === 0} className={`p-1 rounded-lg border ${qty > 0 ? 'border-primary-500 text-primary-600 hover:bg-primary-50' : 'border-gray-200 text-gray-300'}`}><Minus className="w-4 h-4" /></button>
                              <span className="font-black text-lg w-4 text-center">{qty}</span>
                              <button onClick={() => updateDrinkQuantity(drink.id, 1)} className="p-1 rounded-lg border border-primary-500 text-primary-600 hover:bg-primary-50"><Plus className="w-4 h-4" /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Special Notes</h3>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Extra pepper, no salt, etc."
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                    rows={3}
                  />
                </div>
              </div>

              <div className="mt-10 sticky bottom-0 bg-white pt-4 border-t border-gray-100">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || !isFormValid()}
                  className="w-full py-5 bg-secondary-500 text-white rounded-2xl font-black shadow-xl shadow-secondary-500/30 hover:bg-secondary-600 disabled:bg-gray-200 disabled:shadow-none transition-all flex items-center justify-center gap-3 uppercase tracking-widest"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {isFormValid() ? (product.inStock ? 'Add to Cart' : 'Out of Stock') : 'Please select required options'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};