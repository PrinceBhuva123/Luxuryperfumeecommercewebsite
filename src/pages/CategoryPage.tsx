import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products } from '../data/products';

export function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  
  const categoryProducts = products.filter((p) => p.category === category);

  const categoryInfo = {
    men: {
      title: "Men's Collection",
      description: 'Bold, sophisticated fragrances for the modern gentleman',
      image: 'luxury mens cologne bottles dark',
    },
    women: {
      title: "Women's Collection",
      description: 'Elegant, timeless scents for the confident woman',
      image: 'elegant womens perfume bottles pink',
    },
    unisex: {
      title: 'Unisex Collection',
      description: 'Contemporary fragrances that transcend boundaries',
      image: 'modern minimalist perfume bottles',
    },
  };

  const info = categoryInfo[category as keyof typeof categoryInfo] || {
    title: 'Collection',
    description: 'Discover our curated selection',
    image: 'luxury perfume collection',
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-80 bg-[#FAF8F5] overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/1600x600/?${encodeURIComponent(info.image)}`}
          alt={info.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl mb-4 text-black" style={{ fontFamily: 'serif' }}>
              {info.title}
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {info.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-gray-600">
            {categoryProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No products found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
