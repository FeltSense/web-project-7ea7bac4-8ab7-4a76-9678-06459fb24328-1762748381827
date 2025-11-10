'use client';

import { Dumbbell, Users, Calendar, TrendingUp, Heart, Award } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description: 'One-on-one sessions with certified trainers tailored to your specific goals and fitness level.',
    color: 'orange'
  },
  {
    icon: Users,
    title: 'Group Classes',
    description: 'High-energy group workouts including HIIT, yoga, spin, and strength training for all levels.',
    color: 'red'
  },
  {
    icon: Calendar,
    title: 'Custom Programs',
    description: 'Personalized workout and nutrition plans designed to maximize your results and keep you motivated.',
    color: 'orange'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Advanced analytics and regular assessments to monitor your progress and adjust your program.',
    color: 'red'
  },
  {
    icon: Heart,
    title: 'Nutrition Coaching',
    description: 'Expert guidance on meal planning, supplements, and healthy eating habits for optimal performance.',
    color: 'orange'
  },
  {
    icon: Award,
    title: 'Achievement System',
    description: 'Milestone rewards and community challenges to keep you engaged and celebrating your wins.',
    color: 'red'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              To Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive fitness solutions designed to help you reach your goals, no matter where you're starting from.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${
                  service.color === 'orange' 
                    ? 'from-orange-500 to-red-500' 
                    : 'from-red-500 to-orange-500'
                } shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}