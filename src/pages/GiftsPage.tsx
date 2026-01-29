import React from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { giftSets } from '../data/products';
import { Gift } from 'lucide-react';

export function GiftsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-96 bg-gradient-to-r from-[#C9A86A] to-[#B8955A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://source.unsplash.com/1600x600/?gift,luxury,perfume"
            alt="Gift Sets"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="text-white">
            <Gift className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl mb-4" style={{ fontFamily: 'serif' }}>
              Luxury Gift Sets
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Thoughtfully curated collections perfect for any occasion
            </p>
          </div>
        </div>
      </div>

      {/* Gift Sets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {giftSets.map((set) => (
            <div
              key={set.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-[#E8DED3]"
            >
              <div className="aspect-video bg-[#FAF8F5]">
                <ImageWithFallback
                  src={`https://source.unsplash.com/800x450/?${encodeURIComponent(set.image)}`}
                  alt={set.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl" style={{ fontFamily: 'serif' }}>
                    {set.name}
                  </h3>
                  {set.originalPrice && (
                    <Badge variant="destructive">
                      Save ${set.originalPrice - set.price}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{set.description}</p>
                
                <div className="bg-[#FAF8F5] rounded-lg p-4 mb-4">
                  <p className="text-sm mb-2">Includes:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {set.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl text-black">${set.price}</span>
                    {set.originalPrice && (
                      <span className="ml-2 text-lg text-gray-400 line-through">
                        ${set.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button className="bg-black text-white hover:bg-[#C9A86A]">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Gift Sets */}
        <div className="mt-20 bg-[#FAF8F5] rounded-lg p-12 text-center">
          <h2 className="text-3xl mb-6" style={{ fontFamily: 'serif' }}>
            Why Choose Our Gift Sets?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">Beautiful Packaging</h3>
              <p className="text-sm text-gray-600">
                Elegantly presented in luxury gift boxes
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">✓</span>
              </div>
              <h3 className="text-lg mb-2">Curated Selection</h3>
              <p className="text-sm text-gray-600">
                Expertly paired fragrances and accessories
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">$</span>
              </div>
              <h3 className="text-lg mb-2">Better Value</h3>
              <p className="text-sm text-gray-600">
                Save up to 25% compared to individual items
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
