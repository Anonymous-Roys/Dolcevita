'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Star,ArrowRight } from 'lucide-react';
import { Product } from '@/lib/types';

// Best Selling Products Section
const BestSellers = () => {
  const bestSellers: Product[] = [
    {
      id: 1,
      name: "Dark Chocolate Truffles Box",
      price: "GHc 29.99",
      rating: 5,
      imageUrl: "/flavors.jpeg",
      sales: "2.5k+ sold"
    },
    {
      id: 2,
      name: "Assorted Pralines Collection",
      price: "GHc 34.99",
      rating: 5,
      imageUrl: "/different_flavors.jpg",
      sales: "1.8k+ sold"
    },
    {
      id: 3,
      name: "Signature Gift Box",
      price: "GHc 49.99",
      rating: 5,
      imageUrl: "/public/flavor1.jpeg",
      sales: "3k+ sold"
    }
  ];

  return (
    <section className="py-20 bg-[#FDF6ED]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif text-[#553C2E] mb-4">Best Sellers</h2>
          <p className="text-[#553C2E]/80">Our most loved creations</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-64">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm text-[#553C2E]">
                  {product.sales}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#553C2E] mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E8A27D] text-[#E8A27D]" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl text-[#E8A27D]">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#553C2E] text-white px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    Shop Now
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;