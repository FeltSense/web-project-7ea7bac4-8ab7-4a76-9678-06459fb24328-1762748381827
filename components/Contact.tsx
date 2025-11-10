'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          founder_id: 'FOUNDER_ID_PLACEHOLDER',
          project_id: 'PROJECT_ID_PLACEHOLDER'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Start?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Let&apos;s Talk
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions? Want to schedule a tour? We&apos;re here to help you begin your fitness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Phone</div>
                    <div className="text-white font-semibold text-lg">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Email</div>
                    <div className="text-white font-semibold text-lg">hello@fitpro.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Location</div>
                    <div className="text-white font-semibold text-lg">123 Fitness Street<br />New York, NY 10001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">Opening Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-white">5:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold text-white">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Holidays</span>
                  <span className="font-semibold text-white">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>

                <input type="hidden" name="founder_id" value="FOUNDER_ID_PLACEHOLDER" />
                <input type="hidden" name="project_id" value="PROJECT_ID_PLACEHOLDER" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}