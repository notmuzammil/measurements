import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-secondary/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">Measurements</h3>
            <p className="text-text-light mb-4 max-w-sm">
              Premium handcrafted Islamic art and calligraphy by Irfan Ahmed Khan. Bringing spiritual beauty to your spaces.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-light hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-light hover:text-primary transition-colors">About the Artist</Link></li>
              <li><Link to="/shop" className="text-text-light hover:text-primary transition-colors">Shop Collection</Link></li>
              <li><Link to="/contact" className="text-text-light hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-text mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="https://wa.me/923332104731" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors">
                  +92 333 2104731
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="mailto:iirfan1969@gmail.com" className="text-text-light hover:text-primary transition-colors">
                  iirfan1969@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-light text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Measurements by Irfan Ahmed Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
