import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function FAQPage() {
  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available at checkout. Free shipping on orders over $100.',
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes, we ship to most countries worldwide. International shipping times vary by location, typically 7-14 business days.',
        },
        {
          q: 'How can I track my order?',
          a: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order from your account dashboard.',
        },
      ],
    },
    {
      category: 'Products',
      questions: [
        {
          q: 'Are your perfumes authentic?',
          a: 'Yes, all our perfumes are 100% authentic and sourced directly from authorized distributors and brands.',
        },
        {
          q: 'How long do your perfumes last?',
          a: 'Our Eau de Parfums typically last 6-8 hours, while Eau de Toilettes last 4-6 hours. Longevity can vary based on skin type and application.',
        },
        {
          q: 'What size should I choose?',
          a: 'We recommend 30ml for trying new scents, 50ml for regular use, and 100ml for your signature fragrance that you wear daily.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We accept returns within 30 days of purchase for unopened items in original packaging. Opened perfumes can be returned within 14 days if you\'re not satisfied.',
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our customer service team or initiate a return from your account dashboard. We\'ll provide a prepaid return label.',
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.',
        },
      ],
    },
    {
      category: 'Account',
      questions: [
        {
          q: 'Do I need an account to make a purchase?',
          a: 'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and manage your wishlist.',
        },
        {
          q: 'How do I reset my password?',
          a: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
        },
      ],
    },
    {
      category: 'Fragrance Guide',
      questions: [
        {
          q: 'What\'s the difference between EDP and EDT?',
          a: 'Eau de Parfum (EDP) has 15-20% fragrance concentration and lasts longer. Eau de Toilette (EDT) has 5-15% concentration and is lighter.',
        },
        {
          q: 'How should I apply perfume?',
          a: 'Apply to pulse points: wrists, neck, behind ears, and inner elbows. Don\'t rub wrists together as it breaks down the fragrance.',
        },
        {
          q: 'How should I store my perfume?',
          a: 'Store in a cool, dry place away from direct sunlight and heat. Keep the cap on when not in use to preserve the fragrance.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4" style={{ fontFamily: 'serif' }}>
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl mb-6" style={{ fontFamily: 'serif' }}>
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem
                    key={qIndex}
                    value={`${index}-${qIndex}`}
                    className="bg-[#FAF8F5] rounded-lg border border-[#E8DED3] px-6"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#FAF8F5] rounded-lg p-8 text-center border border-[#E8DED3]">
          <h2 className="text-2xl mb-4" style={{ fontFamily: 'serif' }}>
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-md hover:bg-[#C9A86A] transition-colors"
            >
              Contact Us
            </a>
            <a
              href="mailto:support@essence.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black rounded-md hover:bg-black hover:text-white transition-colors"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
