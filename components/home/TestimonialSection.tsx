// Testimonials Section
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Chocolate Enthusiast",
        quote: "The most exquisite chocolates I've ever tasted. Each piece is a masterpiece!",
        rating: 5
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Food Critic",
        quote: "Dolcevita's attention to detail and quality is unmatched in the industry.",
        rating: 5
      },
      {
        id: 3,
        name: "Emma Williams",
        role: "Regular Customer",
        quote: "Their seasonal collections never fail to surprise and delight me.",
        rating: 5
      }
    ];
  
    return (
      <section className="py-20 bg-[#553C2E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-white mb-4">What Our Customers Say</h2>
            <p className="text-white/80">Real reviews from chocolate lovers</p>
          </motion.div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg p-6 relative"
              >
                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="inline-block w-5 h-5 fill-[#E8A27D] text-[#E8A27D]" />
                  ))}
                </div>
                <p className="text-[#553C2E] mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-serif text-lg text-[#553C2E]">{testimonial.name}</p>
                  <p className="text-[#553C2E]/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Testimonials;