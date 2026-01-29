import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export function OrderSuccessPage() {
  const orderId = 'ORD-' + Date.now().toString().slice(-8);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-4xl mb-4" style={{ fontFamily: 'serif' }}>
          Order Placed Successfully!
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>

        <div className="bg-[#FAF8F5] rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="text-lg">{orderId}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Date</p>
              <p className="text-lg">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-[#E8DED3] rounded-lg p-6">
            <Mail className="w-10 h-10 text-[#C9A86A] mx-auto mb-3" />
            <h3 className="text-lg mb-2">Confirmation Email</h3>
            <p className="text-sm text-gray-600">
              A confirmation email has been sent to your registered email address
            </p>
          </div>
          <div className="bg-white border border-[#E8DED3] rounded-lg p-6">
            <Package className="w-10 h-10 text-[#C9A86A] mx-auto mb-3" />
            <h3 className="text-lg mb-2">Track Your Order</h3>
            <p className="text-sm text-gray-600">
              You can track your order status anytime from your account
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-[#C9A86A]"
          >
            <Link to="/track-order">Track Order</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-black"
          >
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Need help? <Link to="/contact" className="text-[#C9A86A] hover:underline">Contact our support team</Link>
        </p>
      </div>
    </div>
  );
}
