'use client';

import { Check, Zap, Shield, Clock } from 'lucide-react';

const features = [
  'Unlimited gym access',
  'Personal training sessions',
  'Group fitness classes',
  'Nutrition coaching',
  'Progress tracking app',
  'Locker & shower facilities',
  'Guest passes (2/month)',
  'Member community access'
];

const trustBadges = [
  { icon: Shield, text: 'Secure Payment' },
  { icon: Clock, text: 'Cancel Anytime' },
  { icon: Zap, text: 'Instant Access' }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SIMPLE PRICING
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Start Your Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              For Just $29
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get full access to all our premium features. No hidden fees, no commitments.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Premium Membership</h3>
              <div className="flex items-baseline justify-center space-x-2 mb-4">
                <span className="text-6xl font-bold text-white">$29</span>
                <span className="text-2xl text-white/80">/month</span>
              </div>
              <p className="text-white/90 text-lg">Everything you need to transform your fitness</p>
            </div>

            <div className="p-8 md:p-12">
              {/* Features List */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center px-8 py-5 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-xl mb-8"
              >
                Get Started Now
              </a>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                {trustBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-orange-600" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-6 py-3">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-semibold">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Can I cancel anytime?</h4>
              <p className="text-gray-600">Yes! You can cancel your membership at any time with no penalties or fees.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">What's included in the membership?</h4>
              <p className="text-gray-600">Full access to all gym facilities, unlimited classes, personal training sessions, and nutrition coaching.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-2 text-lg">Do you offer a free trial?</h4>
              <p className="text-gray-600">We offer a 30-day money-back guarantee, so you can try us risk-free!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}