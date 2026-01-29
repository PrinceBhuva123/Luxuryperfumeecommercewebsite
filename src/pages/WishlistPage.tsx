import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';
import { products } from '../data/products';

export function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    const product = products.find((p) => p.id === item.id);
    if (product) {
      addToCart({
        productId: item.id,
        name: item.name,
        brand: item.brand,
        price: item.price,
        size: product.sizes[0],
        quantity: 1,
        image: item.image,
      });
      removeFromWishlist(item.id);
      toast.success('Moved to cart!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-[#C9A86A]" />
          <h1 className="text-4xl" style={{ fontFamily: 'serif' }}>
            My Wishlist
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Start adding your favorite fragrances to your wishlist
            </p>
            <Button asChild className="bg-black text-white hover:bg-[#C9A86A]">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-8">{items.length} items</p>
            
            <div className="grid grid-cols-1 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-[#E8DED3] p-6 flex gap-6 hover:shadow-md transition-shadow"
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="w-32 h-32 flex-shrink-0 bg-[#FAF8F5] rounded-lg overflow-hidden"
                  >
                    <ImageWithFallback
                      src={`https://source.unsplash.com/300x300/?${encodeURIComponent(item.image)}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                        {item.brand}
                      </p>
                      <h3 className="text-xl mb-2 hover:text-[#C9A86A] transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? 'fill-[#C9A86A] text-[#C9A86A]'
                              : 'text-gray-300'
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-2xl text-black mb-4">${item.price}</p>

                    <div className="flex gap-3">
                      <Button
                        onClick={() => handleMoveToCart(item)}
                        className="bg-black text-white hover:bg-[#C9A86A]"
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          removeFromWishlist(item.id);
                          toast.success('Removed from wishlist');
                        }}
                        className="border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
