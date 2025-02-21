'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex flex-col justify-center items-center text-center px-6">
      
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-serif text-[#553C2E] mb-6"
      >
        Get in Touch
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[#553C2E] text-lg md:text-xl mb-8 max-w-2xl"
      >
        Have questions or want to place an order?  
        Reach out to us directly on WhatsApp and get your favorite chocolates delivered!
      </motion.p>

      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/+233249201201" // Replace YOUR_NUMBER_HERE with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-[#E8A27D] text-white px-8 py-3 rounded-full text-lg md:text-xl font-medium shadow-lg"
      >
        <MessageCircle/>
        Order Now on WhatsApp
      </motion.a>

      {/* Floating Chocolate Elements */}
      <motion.img
        src="/bars.png"
        alt="Chocolate bar"
        className="absolute top-10 left-[-60px] w-40 md:w-64 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/truffle.png"
        alt="Chocolate truffle"
        className="absolute bottom-16 right-10 w-28 md:w-44 hidden md:block"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src="/chips.png"
        alt="Chocolate chips"
        className="absolute bottom-8 left-20 w-16 md:w-24 hidden md:block"
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
    </div>
  );
};

export default ContactPage;
