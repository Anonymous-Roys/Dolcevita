'use client'
import React from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FDF6ED] flex justify-center items-center relative overflow-hidden">
      
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 bg-[url('/choco_bg3.avif')] bg-cover bg-center "></div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-0 px-6 py-20 w-full">
        
        {/* Floating Elements (Only visible on medium screens and up) */}
        {/* <motion.img
          src="/bars.png"
          alt="Chocolate piece"
          className="absolute top-20 left-[-50px] w-40 md:w-64 hidden md:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 30, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.img
          src="/truffle.png"
          alt="Chocolate truffle"
          className="absolute top-10 right-10 w-28 md:w-44 hidden md:block"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.img
          src="/chips.png"
          alt="Chocolate chips"
          className="absolute bottom-16 right-16 w-16 md:w-24 hidden md:block"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        /> */}

        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif text-[#f0e3cb] mb-6"
          >
            Chocolates that  
            <br />  
            melt in your mouth  
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#ffffff] text-base md:text-lg mb-8"
          >
            Experience the perfect blend of tradition and innovation.  
            Our chocolates are handcrafted from the finest ingredients  
            to create an unforgettable delight.  
          </motion.p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#E8A27D] text-white px-6 md:px-8 py-3 rounded-full"
            >
              Shop Online
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#cf9678] text-[#ffffff] px-6 md:px-8 py-3 rounded-full"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
