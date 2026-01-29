import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { products } from '../data/products';

export function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  const categories = [
    {
      name: "Men's Collection",
      path: '/category/men',
      image: 'luxury mens cologne bottle dark',
      description: 'Bold & sophisticated fragrances',
    },
    {
      name: "Women's Collection",
      path: '/category/women',
      image: 'elegant womens perfume bottle',
      description: 'Elegant & timeless scents',
    },
    {
      name: 'Unisex Collection',
      path: '/category/unisex',
      image: 'modern unisex perfume bottle',
      description: 'Contemporary & versatile',
    },
  ];

  const testimonials = [
    {
      name: 'Sophie Anderson',
      rating: 5,
      text: 'The quality is exceptional! My new signature scent.',
      product: 'Velvet Noir',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Long-lasting and sophisticated. Perfect for evenings.',
      product: 'Midnight Oud',
    },
    {
      name: 'Emma Williams',
      rating: 5,
      text: 'Beautiful packaging and amazing fragrance. Highly recommend!',
      product: 'Rose Impériale',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://source.unsplash.com/1600x900/?luxury,perfume,bottle"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <p className="text-sm tracking-widest text-gray-600 mb-4 uppercase">
              New Collection 2024
            </p>
            <h1
              className="text-5xl md:text-7xl mb-6 text-black"
              style={{ fontFamily: 'serif', lineHeight: '1.1' }}
            >
              Discover Your
              <br />
              Signature Scent
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Explore our curated collection of luxury fragrances crafted with
              the finest ingredients from around the world.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-black text-white hover:bg-[#C9A86A]"
              >
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'serif' }}>
              Explore Collections
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect fragrance for every occasion and personality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <ImageWithFallback
                  src={`https://source.unsplash.com/600x800/?${encodeURIComponent(category.image)}`}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm mb-2 opacity-90">{category.description}</p>
                  <h3 className="text-2xl mb-3" style={{ fontFamily: 'serif' }}>
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center text-sm border-b border-white pb-1">
                    Discover More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'serif' }}>
              Best Sellers
            </h2>
            <p className="text-gray-600">Our most loved fragrances</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="relative h-96 bg-[#C9A86A] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://source.unsplash.com/1600x600/?perfume,ingredients"
            alt="Ingredients"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'serif' }}>
              Limited Edition Gift Sets
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Perfect presents for your loved ones
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#C9A86A] hover:bg-gray-100"
            >
              <Link to="/gifts">Shop Gift Sets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: 'serif' }}>
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Join thousands of satisfied fragrance lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#FAF8F5] p-8 rounded-lg border border-[#E8DED3]"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C9A86A] text-[#C9A86A]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">
                    Purchased {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4" style={{ fontFamily: 'serif' }}>
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive exclusive offers and new arrival notifications
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]"
            />
            <Button className="bg-[#C9A86A] text-white hover:bg-[#B8955A]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
