import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Package, MapPin, LogOut, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import { Badge } from '../components/ui/badge';

export function AccountPage() {
  const { user, orders, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const statusColors = {
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-yellow-100 text-yellow-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl mb-2" style={{ fontFamily: 'serif' }}>
              My Account
            </h1>
            <p className="text-gray-600">Welcome back, {user?.name}!</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-gray-300"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Account Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center text-white text-2xl">
                  {user?.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg">{user?.name}</h3>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/account/profile"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-gray-600" />
                    <span>Profile Settings</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <Link
                  to="/account/addresses"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span>Saved Addresses</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>

                <Link
                  to="/wishlist"
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Wishlist</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl mb-6" style={{ fontFamily: 'serif' }}>
              Order History
            </h2>

            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white rounded-lg border border-[#E8DED3] p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg mb-1">Order #{order.id}</h3>
                      <p className="text-sm text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge className={statusColors[order.status]}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E8DED3] pt-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                      <p className="text-lg">${order.total}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-300"
                      >
                        <Link to={`/track-order?id=${order.id}`}>Track Order</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-gray-300"
                      >
                        <Link to={`/order/${order.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {orders.length === 0 && (
                <div className="text-center py-12 bg-[#FAF8F5] rounded-lg">
                  <Package className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl mb-2">No orders yet</h3>
                  <p className="text-gray-600 mb-6">
                    Start shopping to see your orders here
                  </p>
                  <Button asChild className="bg-black text-white hover:bg-[#C9A86A]">
                    <Link to="/shop">Start Shopping</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
