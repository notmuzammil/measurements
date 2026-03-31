import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=2000" 
            alt="Islamic Art Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-text mb-6"
          >
            Measurements
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-text-light mb-10 font-light"
          >
            Premium Handcrafted Islamic Art & Calligraphy by Irfan Ahmed Khan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-4">Featured Artworks</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
          >
            View All Products
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Artist Highlight */}
      <section className="py-24 bg-surface border-y border-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1000" 
                alt="Artist at work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-4 border-primary/20 rounded-2xl m-4 pointer-events-none"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text mb-6">The Artist Behind the Craft</h2>
              <p className="text-text-light text-lg mb-6 leading-relaxed">
                Irfan Ahmed Khan is a master artisan dedicated to preserving and elevating traditional Islamic calligraphy and geometric art. With decades of experience, each piece is meticulously crafted to bring spiritual serenity and aesthetic brilliance to your space.
              </p>
              <p className="text-text-light text-lg mb-8 leading-relaxed">
                From intricate wood carvings to elegant canvas paintings, every creation is a testament to devotion and artistic excellence.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Read Full Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
