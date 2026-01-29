import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Heart, Leaf, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-96 bg-[#FAF8F5] overflow-hidden">
        <ImageWithFallback
          src="https://source.unsplash.com/1600x600/?perfume,luxury,ingredients"
          alt="About Us"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl mb-4 text-black" style={{ fontFamily: 'serif' }}>
              Our Story
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Crafting luxury fragrances since 1985
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            Essence was founded with a simple mission: to create exceptional fragrances
            that capture the essence of luxury and individuality.
          </p>
          <p className="text-gray-600 mb-6">
            For over three decades, we've been sourcing the finest ingredients from around
            the world, working with master perfumers to craft scents that tell stories and
            evoke emotions. Each fragrance in our collection is a testament to our
            commitment to quality, artistry, and timeless elegance.
          </p>
          <p className="text-gray-600">
            Our perfumes are more than just scents—they're expressions of personality,
            memories captured in a bottle, and companions on life's journey. We believe
            that everyone deserves to find their signature fragrance, a scent that makes
            them feel confident, beautiful, and uniquely themselves.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12" style={{ fontFamily: 'serif' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">Quality</h3>
              <p className="text-sm text-gray-600">
                Only the finest ingredients and craftsmanship in every bottle
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">
                Committed to ethical sourcing and eco-friendly practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">Passion</h3>
              <p className="text-sm text-gray-600">
                Every fragrance is created with love and dedication
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg mb-2">Global</h3>
              <p className="text-sm text-gray-600">
                Inspired by cultures and traditions from around the world
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Craftsmanship */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl mb-6" style={{ fontFamily: 'serif' }}>
              Master Craftsmanship
            </h2>
            <p className="text-gray-600 mb-4">
              Each of our fragrances is developed over months, sometimes years, by our
              team of expert perfumers. We believe in the art of slow perfumery, taking
              the time to perfect each note, each accord, each nuance.
            </p>
            <p className="text-gray-600">
              From the initial concept to the final blend, every step is carefully
              considered to ensure that our fragrances not only smell exceptional but
              also last throughout the day and evolve beautifully on the skin.
            </p>
          </div>
          <div className="aspect-square bg-[#FAF8F5] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://source.unsplash.com/800x800/?perfume,making,craftsmanship"
              alt="Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
