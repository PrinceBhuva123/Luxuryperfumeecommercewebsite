import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const shipping = totalPrice > 100 ? 0 : 10;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax - discount;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setDiscount(totalPrice * 0.1);
      toast.success('Coupon applied! 10% off');
    } else if (couponCode) {
      toast.error('Invalid coupon code');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="w-8 h-8 text-[#C9A86A]" />
          <h1 className="text-4xl" style={{ fontFamily: 'serif' }}>
            Shopping Cart
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Add some fragrances to get started
            </p>
            <Button asChild className="bg-black text-white hover:bg-[#C9A86A]">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-[#E8DED3] p-6 flex gap-6"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-[#FAF8F5] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={`https://source.unsplash.com/300x300/?${encodeURIComponent(item.image)}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          {item.brand}
                        </p>
                        <h3 className="text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-600">Size: {item.size}ml</p>
                      </div>
                      <p className="text-lg">${item.price}</p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.success('Removed from cart');
                        }}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#FAF8F5] rounded-lg p-6 sticky top-24">
                <h2 className="text-xl mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t border-[#E8DED3] pt-3">
                    <div className="flex justify-between">
                      <span>Total</span>
                      <span className="text-xl">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <label className="text-sm mb-2 block">Have a coupon?</label>
                  <div className="flex gap-2">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter code"
                      className="bg-white border-[#E8DED3]"
                    />
                    <Button
                      onClick={applyCoupon}
                      variant="outline"
                      className="whitespace-nowrap"
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Try: SAVE10</p>
                </div>

                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-[#C9A86A] mb-4"
                  size="lg"
                >
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-black"
                >
                  <Link to="/shop">Continue Shopping</Link>
                </Button>

                {shipping > 0 && (
                  <p className="text-xs text-center text-gray-600 mt-4">
                    Add ${(100 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
