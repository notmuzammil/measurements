import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, MessageCircle, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "923332104731";
    let message = "Hello Irfan Ahmed Khan, I would like to place an order from Measurements:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    message += `\n*Total Price: Rs. ${totalPrice.toLocaleString()}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleEmailCheckout = () => {
    const email = "iirfan1969@gmail.com";
    const subject = "New Order from Measurements";
    let body = "Hello Irfan Ahmed Khan,\n\nI would like to place an order:\n\n";
    
    cart.forEach((item, index) => {
      body += `${index + 1}. ${item.name} - Qty: ${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    body += `\nTotal Price: Rs. ${totalPrice.toLocaleString()}\n\nPlease let me know the next steps for payment and delivery.\n\nThank you.`;
    
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <ShoppingBag className="w-12 h-12" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-text mb-4">Your cart is empty</h2>
          <p className="text-text-light mb-8">Looks like you haven't added any artwork to your cart yet.</p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-4xl font-bold text-text mb-12"
      >
        Shopping Cart
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-surface rounded-2xl shadow-sm border border-secondary/20"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden bg-secondary/10 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1584285405624-b184281f621e?auto=format&fit=crop&q=80&w=400`;
                  }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="font-serif text-xl font-semibold text-text mb-2">{item.name}</h3>
                <p className="text-primary font-medium mb-4">Rs. {item.price.toLocaleString()}</p>
                
                <div className="flex items-center justify-center sm:justify-start space-x-4">
                  <div className="flex items-center border border-secondary/40 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-text-light hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-text-light hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="text-right hidden sm:block">
                <p className="font-semibold text-lg text-text">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-surface p-8 rounded-2xl shadow-sm border border-secondary/20 sticky top-28">
            <h2 className="font-serif text-2xl font-bold text-text mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-text-light">
                <span>Subtotal</span>
                <span>Rs. {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-text-light">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="h-px bg-secondary/30 my-4"></div>
              <div className="flex justify-between text-xl font-bold text-text">
                <span>Total</span>
                <span className="text-primary">Rs. {totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-text-light mb-4 text-center">
                Complete your order by sending us a message. We will confirm availability and arrange delivery.
              </p>
              
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 px-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order via WhatsApp</span>
              </button>
              
              <button
                onClick={handleEmailCheckout}
                className="w-full py-4 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors shadow-md"
              >
                <Mail className="w-5 h-5" />
                <span>Order via Email</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
