import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif mb-4">Product not found</h2>
        <button onClick={() => navigate('/shop')} className="text-primary hover:underline">Return to Shop</button>
      </div>
    );
  }

  const gallery = product.gallery || [product.image];

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=800&h=800';
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link to="/shop" className="inline-flex items-center text-text-light hover:text-primary mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/10 border border-secondary/20 shadow-sm">
            <img 
              src={mainImage} 
              alt={product.name} 
              onError={handleImageError} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {gallery.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setMainImage(img)} 
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${mainImage === img ? 'border-primary shadow-md' : 'border-transparent hover:border-primary/50'}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${idx + 1}`} 
                    onError={handleImageError} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">{product.name}</h1>
          <p className="text-2xl md:text-3xl text-primary font-medium mb-8">Rs. {product.price.toLocaleString()}</p>
          
          <div className="prose prose-brown text-text-light mb-10 text-lg leading-relaxed">
            <p>{product.longDescription || product.description}</p>
          </div>

          <div className="mt-auto pt-8 border-t border-secondary/30">
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full md:w-auto px-10 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all duration-300 text-lg font-medium ${
                isAdded 
                  ? 'bg-green-600 text-white' 
                  : 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-6 h-6" />
                  <span>Added to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
            <p className="text-sm text-text-light mt-4 flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
              Made to order. Ships worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
