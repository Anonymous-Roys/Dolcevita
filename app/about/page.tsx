'use client'
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FDF6ED]">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/about-us.jpeg"
            alt="Chocolate making process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown-900/40" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Story</h1>
            <p className="text-xl text-white/90">Crafting moments of pure chocolate bliss since 1995</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Journey Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-serif text-[#553C2E] mb-6">Our Journey</h2>
              <p className="text-lg text-[#553C2E]/80 mb-4">
                What started as a small family passion in a tiny kitchen has grown into 
                a beloved chocolate atelier, crafting exquisite confections that bring 
                joy to chocolate lovers worldwide.
              </p>
              <p className="text-lg text-[#553C2E]/80">
                Every piece of Dolcevita chocolate tells a story of dedication, 
                craftsmanship, and the finest ingredients sourced from across the globe.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="/workshop.jpeg"
                alt="Our chocolate workshop"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#553C2E] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif text-center mb-16"
          >
            Our Chocolate Making Process
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Selection",
                description: "We source the finest cacao beans from sustainable farms worldwide"
              },
              {
                title: "Crafting",
                description: "Each piece is handcrafted with precision and care by our master chocolatiers"
              },
              {
                title: "Perfection",
                description: "Only the finest creations make it into our signature collections"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full bg-[#E8A27D] mx-auto mb-6 flex items-center justify-center"
                >
                  <span className="text-3xl font-serif">{index + 1}</span>
                </motion.div>
                <h3 className="text-2xl font-serif mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-[#553C2E] mb-6">Our Values</h2>
            <p className="text-lg text-[#553C2E]/80 max-w-2xl mx-auto">
              Every decision we make is guided by our commitment to quality, 
              sustainability, and the joy of chocolate making.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Quality First",
              "Sustainable Sourcing",
              "Artisanal Craft",
              "Innovation"
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-serif text-[#553C2E] mb-4">{value}</h3>
                <div className="w-16 h-1 bg-[#E8A27D] mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;