import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1920",
    title: "Fresh Groceries Daily",
    subtitle: "Get the best rice, grains, and pantry essentials.",
    color: "bg-green-600"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&q=80&w=1920",
    title: "Chilled Drinks & Juices",
    subtitle: "Beat the Agbor heat with our cold beverages.",
    color: "bg-orange-500"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=1920",
    title: "Household Essentials",
    subtitle: "Cleaning supplies and toiletries at fair prices.",
    color: "bg-blue-600"
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="relative pt-[116px] md:pt-[128px] bg-gray-100 pb-4">
      <div className="w-full px-2 sm:px-4 md:px-6">
        <div className="relative rounded-xl overflow-hidden shadow-lg h-[200px] sm:h-[300px] md:h-[400px]">

          {/* Slides */}
          <div className="absolute inset-0 transition-transform duration-500 ease-out h-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <div className="flex h-full">
              {SLIDES.map((slide) => (
                <div key={slide.id} className="min-w-full h-full relative">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center pl-8 md:pl-20">
                    <div className="max-w-xl text-white">
                      <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-md">{slide.title}</h2>
                      <p className="text-lg md:text-xl mb-6 drop-shadow-md opacity-90 hidden sm:block">{slide.subtitle}</p>
                      <button className={`${slide.color} text-white px-6 py-2 md:px-8 md:py-3 rounded shadow-md font-bold hover:brightness-110 transition-all text-sm md:text-base`}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white backdrop-blur-sm transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};