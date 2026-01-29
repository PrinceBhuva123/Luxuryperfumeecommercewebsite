import React from 'react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl mb-8" style={{ fontFamily: 'serif' }}>
          Privacy Policy
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p className="text-lg">Last updated: January 29, 2024</p>
          
          <section>
            <h2 className="text-2xl text-black mb-4">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account,
              place an order, or contact customer service. This may include your name, email address,
              shipping address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and account</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with service
              providers who help us operate our business, such as payment processors and shipping
              companies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">4. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You can
              manage your account settings or contact us for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              privacy@essence.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl mb-8" style={{ fontFamily: 'serif' }}>
          Terms & Conditions
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p className="text-lg">Last updated: January 29, 2024</p>
          
          <section>
            <h2 className="text-2xl text-black mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms
              and Conditions and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">2. Product Information</h2>
            <p>
              We strive to provide accurate product information. However, we do not warrant that
              product descriptions or other content is accurate, complete, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">3. Pricing and Availability</h2>
            <p>
              All prices are in USD and are subject to change without notice. We reserve the right
              to limit quantities and to discontinue products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">4. Orders and Payment</h2>
            <p>
              By placing an order, you represent that you are authorized to use the payment method
              provided. We reserve the right to refuse or cancel any order.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">5. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the
              property of Essence and is protected by copyright laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl mb-8" style={{ fontFamily: 'serif' }}>
          Return & Refund Policy
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <p className="text-lg">We want you to love your fragrance!</p>
          
          <section>
            <h2 className="text-2xl text-black mb-4">Return Window</h2>
            <p>
              You may return unopened items within 30 days of purchase for a full refund. Opened
              perfumes can be returned within 14 days if you're not completely satisfied.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">How to Return</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contact our customer service team or initiate a return from your account</li>
              <li>Pack the item securely in its original packaging</li>
              <li>Use the prepaid return label we provide</li>
              <li>Drop off at any authorized shipping location</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">Refund Process</h2>
            <p>
              Once we receive your return, we'll inspect it and process your refund within 5-7
              business days. The refund will be credited to your original payment method.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">Exceptions</h2>
            <p>The following items cannot be returned:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gift sets (unless unopened)</li>
              <li>Sale or clearance items</li>
              <li>Items without original packaging</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl mb-8" style={{ fontFamily: 'serif' }}>
          Shipping Policy
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-2xl text-black mb-4">Shipping Methods</h2>
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3] mb-4">
              <h3 className="text-lg text-black mb-2">Standard Shipping</h3>
              <p className="mb-1">Delivery: 3-5 business days</p>
              <p>Cost: $10 (Free on orders over $100)</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3] mb-4">
              <h3 className="text-lg text-black mb-2">Express Shipping</h3>
              <p className="mb-1">Delivery: 1-2 business days</p>
              <p>Cost: $25</p>
            </div>
            <div className="bg-[#FAF8F5] rounded-lg p-6 border border-[#E8DED3]">
              <h3 className="text-lg text-black mb-2">International Shipping</h3>
              <p className="mb-1">Delivery: 7-14 business days</p>
              <p>Cost: Calculated at checkout</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">Processing Time</h2>
            <p>
              Orders are processed within 1-2 business days. You'll receive a tracking number once
              your order ships.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">International Orders</h2>
            <p>
              International customers are responsible for any customs duties or import taxes. These
              fees are not included in our shipping costs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-black mb-4">Shipping Restrictions</h2>
            <p>
              We currently do not ship to PO boxes. Please provide a physical address for delivery.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
