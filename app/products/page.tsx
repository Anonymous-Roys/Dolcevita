'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/lib/types';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'truffles', 'bars', 'gift boxes', 'seasonal'];

  const products: Product[] = [
    {
      id: 1,
      name: "Dark Chocolate Truffle",
      category: "truffles",
      price: "GHc 3.99",
      description: "72% dark chocolate with a smooth ganache filling"
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen bg-[#FDF6ED]">
      {/* Hero Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-[40vh] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/800"
            alt="Chocolate collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/30" />
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative h-full flex items-center justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-white text-center">
            Our Collections
          </h1>
        </motion.div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-[#553C2E] text-white'
                    : 'bg-white text-[#553C2E] border border-[#553C2E]'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            <AnimatePresence>
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src="/api/placeholder/400/300"
                      alt="Chocolate product"
                      className="w-full h-64 object-cover"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center"
                    >
                      <button className="bg-white text-[#553C2E] px-6 py-2 rounded-full">
                        Quick View
                      </button>
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#553C2E] mb-2">
                      Premium Dark Chocolate
                    </h3>
                    <p className="text-[#553C2E]/70 mb-4">
                      Handcrafted with 72% cocoa
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl text-[#E8A27D]">€24.99</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#553C2E] text-white px-4 py-2 rounded-full"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;