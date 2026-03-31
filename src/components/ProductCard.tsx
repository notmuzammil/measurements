import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleImageError = () => {
    // Fallback to a placeholder if the image is missing
    setImgSrc(`https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=800&h=800`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-secondary/20 flex flex-col h-full"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square overflow-hidden bg-secondary/10 block">
        <img
          src={imgSrc}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="flex justify-between items-start mb-2 group-hover:text-primary transition-colors">
          <h3 className="font-serif text-xl font-semibold text-text line-clamp-2">{product.name}</h3>
        </Link>
        <p className="text-primary font-medium text-lg mb-3">Rs. {product.price.toLocaleString()}</p>
        <p className="text-text-light text-sm mb-6 line-clamp-3 flex-grow">{product.description}</p>
        
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 ${
            isAdded 
              ? 'bg-green-600 text-white' 
              : 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
