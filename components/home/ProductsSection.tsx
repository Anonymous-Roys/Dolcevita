'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '@/lib/types';
import { products } from '@/lib/data';


const ProductsSection = () => {
  const [selectedImage, setSelectedImage] = useState<Product | null>(null);
  

  return (
    <div className="min-h-screen bg-[#FDF6ED]">
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#553C2E] text-center mb-12">
  Welcome to our small  
  <br />  
  family-run chocolate production  
</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative group">
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setSelectedImage(product)}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-auto"
                    />
                    
                    {/* Hover Description */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 p-4 flex items-center justify-center text-white opacity-0 transition-opacity"
                    >
                      <div>
                        <p className="text-sm mb-2">{product.description}</p>
                        <p className="text-xs italic">Weight: {product.weight}</p>
                        <p className="text-xs mt-2">
                          Ingredients: {product.ingredients?.join(', ')}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                <h3 className="text-[#553C2E] font-medium">{product.name}</h3>
                <p className="text-[#E8A27D]">€{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 py-10 "
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full bg-white rounded-lg p-4 max-w-[600px]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-[#553C2E] hover:text-[#E8A27D]"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.name}
                className="w-full h-[50%] rounded"
              />
              <div className="mt-4 text-left">
                <h3 className="text-xl font-serif text-[#553C2E] mb-2">{selectedImage.name}</h3>
                <p className="text-[#553C2E]/80 mb-2">{selectedImage.description}</p>
                <p className="text-[#E8A27D] font-medium">€{selectedImage.price}</p>
                <p className="text-sm text-[#553C2E]/70 mt-2">Weight: {selectedImage.weight}</p>
                <p className="text-sm text-[#553C2E]/70">
                  Ingredients: {selectedImage.ingredients?.join(', ')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsSection;