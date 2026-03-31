import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    window.open(`mailto:iirfan1969@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">Contact Us</h1>
        <p className="text-lg text-text-light max-w-2xl mx-auto">
          Have a question about a piece, or want to discuss a custom commission? We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-serif text-2xl font-bold text-text mb-8">Get in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text text-lg mb-1">Phone / WhatsApp</h3>
                <a href="https://wa.me/923332104731" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
                  +92 333 2104731
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text text-lg mb-1">Email</h3>
                <a href="mailto:iirfan1969@gmail.com" className="text-text-light hover:text-primary transition-colors">
                  iirfan1969@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-text text-lg mb-1">Studio</h3>
                <p className="text-text-light">
                  Available for visits by appointment only. Please contact us to schedule.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-surface p-8 rounded-2xl shadow-sm border border-secondary/20"
        >
          <h2 className="font-serif text-2xl font-bold text-text mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-background transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-background transition-colors"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl border border-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary bg-background transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-4 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors shadow-md"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
