import React, { useState } from 'react';
import { Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [tracking, setTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setTracking(true);
  };

  const trackingSteps = [
    {
      title: 'Order Placed',
      description: 'Your order has been confirmed',
      date: 'Jan 20, 2024 10:30 AM',
      completed: true,
      icon: CheckCircle,
    },
    {
      title: 'Processing',
      description: 'Your order is being prepared',
      date: 'Jan 20, 2024 2:15 PM',
      completed: true,
      icon: Package,
    },
    {
      title: 'Shipped',
      description: 'Your package is on its way',
      date: 'Jan 21, 2024 9:00 AM',
      completed: true,
      icon: Truck,
    },
    {
      title: 'Out for Delivery',
      description: 'Package will arrive today',
      date: 'Jan 23, 2024 8:45 AM',
      completed: false,
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'serif' }}>
            Track Your Order
          </h1>
          <p className="text-gray-600">
            Enter your order ID to see the current status
          </p>
        </div>

        <div className="bg-white border border-[#E8DED3] rounded-lg p-8 mb-12">
          <form onSubmit={handleTrack} className="max-w-md mx-auto">
            <div className="mb-6">
              <Label htmlFor="orderId">Order ID</Label>
              <Input
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="ORD-12345678"
                required
                className="bg-[#FAF8F5] border-[#E8DED3]"
              />
              <p className="text-xs text-gray-500 mt-2">
                You can find your order ID in your confirmation email
              </p>
            </div>
            <Button
              type="submit"
              className="w-full bg-black text-white hover:bg-[#C9A86A]"
              size="lg"
            >
              Track Order
            </Button>
          </form>
        </div>

        {tracking && (
          <div className="space-y-8">
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Order Number</p>
                  <p className="text-lg">ORD-20240120</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estimated Delivery</p>
                  <p className="text-lg">Jan 23, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                  <p className="text-lg">1234567890123</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Carrier</p>
                  <p className="text-lg">Express Delivery</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E8DED3] rounded-lg p-8">
              <h2 className="text-2xl mb-8" style={{ fontFamily: 'serif' }}>
                Tracking Timeline
              </h2>

              <div className="space-y-8">
                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            step.completed
                              ? 'bg-[#C9A86A] text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div
                            className={`w-0.5 h-16 ${
                              step.completed ? 'bg-[#C9A86A]' : 'bg-gray-200'
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3
                          className={`text-lg mb-1 ${
                            step.completed ? 'text-black' : 'text-gray-400'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-sm mb-2 ${
                            step.completed ? 'text-gray-600' : 'text-gray-400'
                          }`}
                        >
                          {step.description}
                        </p>
                        {step.completed && (
                          <p className="text-xs text-gray-500">{step.date}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <h3 className="text-lg mb-4">Shipping Address</h3>
              <p className="text-sm text-gray-600">
                John Doe
                <br />
                123 Main Street, Apt 4B
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
