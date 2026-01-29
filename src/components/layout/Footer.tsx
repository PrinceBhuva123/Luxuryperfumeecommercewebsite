import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E8DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl tracking-wider mb-4" style={{ fontFamily: 'serif' }}>
              <span className="text-black">ESSENCE</span>
              <span className="text-[#C9A86A]">.</span>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Discover luxury fragrances that capture your essence. Premium perfumes crafted with the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#E8DED3] flex items-center justify-center hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#E8DED3] flex items-center justify-center hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#E8DED3] flex items-center justify-center hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-[#E8DED3] flex items-center justify-center hover:bg-[#C9A86A] hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#C9A86A] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#C9A86A] transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-[#C9A86A] transition-colors">FAQ</Link></li>
              <li><Link to="/track-order" className="hover:text-[#C9A86A] transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/category/men" className="hover:text-[#C9A86A] transition-colors">Men's Fragrances</Link></li>
              <li><Link to="/category/women" className="hover:text-[#C9A86A] transition-colors">Women's Fragrances</Link></li>
              <li><Link to="/category/unisex" className="hover:text-[#C9A86A] transition-colors">Unisex Collection</Link></li>
              <li><Link to="/gifts" className="hover:text-[#C9A86A] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-4">Policies</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/privacy" className="hover:text-[#C9A86A] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#C9A86A] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/returns" className="hover:text-[#C9A86A] transition-colors">Return & Refund</Link></li>
              <li><Link to="/shipping" className="hover:text-[#C9A86A] transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-[#E8DED3]">
          <div className="max-w-md">
            <h4 className="mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Get exclusive offers and updates on new arrivals.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-[#E8DED3]"
              />
              <Button className="bg-black text-white hover:bg-[#C9A86A] whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[#E8DED3] flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2024 Essence Perfumes. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-xs">We Accept:</span>
            <div className="flex space-x-2">
              <div className="px-3 py-1 border border-[#E8DED3] rounded text-xs">VISA</div>
              <div className="px-3 py-1 border border-[#E8DED3] rounded text-xs">MC</div>
              <div className="px-3 py-1 border border-[#E8DED3] rounded text-xs">AMEX</div>
              <div className="px-3 py-1 border border-[#E8DED3] rounded text-xs">UPI</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
