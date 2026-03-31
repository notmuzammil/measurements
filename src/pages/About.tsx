import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text mb-6">About the Artist</h1>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-50 mb-8"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-lg prose-brown mx-auto text-text-light"
      >
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=1600" 
            alt="Irfan Ahmed Khan Studio" 
            className="w-full h-auto object-cover aspect-[21/9]"
            referrerPolicy="no-referrer"
          />
        </div>

        <h2 className="font-serif text-2xl font-bold text-text mb-4">Irfan Ahmed Khan</h2>
        <p className="mb-6 leading-relaxed">
          Welcome to Measurements. I am Irfan Ahmed Khan, an artist with a profound passion for Islamic calligraphy and traditional art forms. For many years, I have dedicated myself to the meticulous craft of creating handmade pieces that reflect the beauty, spirituality, and rich heritage of Islamic culture.
        </p>
        
        <p className="mb-6 leading-relaxed">
          My journey began with a deep appreciation for the written word of the Quran and the intricate geometric patterns that have adorned mosques and palaces for centuries. I believe that art is not just visual; it is a spiritual experience that brings peace and remembrance into our daily lives.
        </p>

        <h3 className="font-serif text-xl font-bold text-text mt-10 mb-4">The Craftsmanship</h3>
        <p className="mb-6 leading-relaxed">
          Every piece you see in the Measurements collection is handcrafted with precision and love. Whether it is a delicate Kalma carved into rich walnut wood, or Ayat-ul-Kursi painted with golden accents on a premium canvas, I ensure that the highest quality materials are used.
        </p>

        <p className="mb-6 leading-relaxed">
          My work spans various mediums including wood carving, canvas painting, and metal engraving. Each medium offers a unique way to express the timeless beauty of Islamic verses and motifs.
        </p>

        <h3 className="font-serif text-xl font-bold text-text mt-10 mb-4">Custom Commissions</h3>
        <p className="mb-6 leading-relaxed">
          While I offer a curated collection of ready-to-purchase items, I also take great joy in creating custom pieces. If you have a specific verse, name, or design in mind, I would be honored to bring your vision to life. Please feel free to reach out via the Contact page to discuss your custom artwork.
        </p>
      </motion.div>
    </div>
  );
}
