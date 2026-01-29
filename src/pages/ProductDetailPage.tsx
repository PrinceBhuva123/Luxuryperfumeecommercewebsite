import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/products';
import { toast } from 'sonner@2.0.3';

export function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    addToCart({
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      size: selectedSize,
      quantity,
      image: product.image,
    });

    toast.success('Added to cart!');
  };

  const handleWishlistToggle = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      rating: product.rating,
    });
    toast.success(inWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-black">
            Shop
          </Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>

        <Button
          asChild
          variant="ghost"
          className="mb-6 -ml-4"
        >
          <Link to="/shop">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </Button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="aspect-square bg-[#FAF8F5] rounded-lg overflow-hidden mb-4">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x800/?${encodeURIComponent(
                  product.images[selectedImage]
                )}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-[#FAF8F5] rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[#C9A86A]'
                      : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={`https://source.unsplash.com/300x300/?${encodeURIComponent(image)}`}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {product.brand}
                </p>
                <h1 className="text-4xl mb-2" style={{ fontFamily: 'serif' }}>
                  {product.name}
                </h1>
              </div>
              <div className="flex gap-2">
                {product.isBestSeller && (
                  <Badge className="bg-[#C9A86A] text-white">Best Seller</Badge>
                )}
                {product.isNew && <Badge className="bg-black text-white">New</Badge>}
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#C9A86A] text-[#C9A86A]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl text-black">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <Badge variant="destructive">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-8">{product.description}</p>

            {/* Fragrance Notes */}
            <div className="bg-[#FAF8F5] rounded-lg p-6 mb-8">
              <h3 className="text-lg mb-4">Fragrance Notes</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Top Notes</p>
                  <p className="text-sm">{product.notes.top.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Middle Notes</p>
                  <p className="text-sm">{product.notes.middle.join(', ')}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Base Notes</p>
                  <p className="text-sm">{product.notes.base.join(', ')}</p>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm mb-3">Select Size</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 rounded-md transition-all ${
                      selectedSize === size
                        ? 'border-[#C9A86A] bg-[#C9A86A] text-white'
                        : 'border-gray-300 hover:border-[#C9A86A]'
                    }`}
                  >
                    {size}ml
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-sm mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                size="lg"
                className="flex-1 bg-black text-white hover:bg-[#C9A86A]"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black"
                onClick={handleWishlistToggle}
              >
                <Heart
                  className={`w-5 h-5 ${
                    inWishlist ? 'fill-red-500 text-red-500' : ''
                  }`}
                />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-2 text-sm text-gray-600">
              <p>✓ Free shipping on orders over $100</p>
              <p>✓ Easy returns within 30 days</p>
              <p>✓ Authentic products guaranteed</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl mb-8" style={{ fontFamily: 'serif' }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
