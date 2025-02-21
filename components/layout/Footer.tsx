'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-[#2A1E17] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Dolcevita</h3>
              <p className="text-white/80 mb-6">
                Crafting moments of pure chocolate bliss since 1995.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 p-2 rounded-full"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Products'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-serif mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#E8A27D]" />
                  <span className="text-white/80">+233 24 920 1201</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#E8A27D]" />
                  <span className="text-white/80">info@dolcevita.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#E8A27D]" />
                  <span className="text-white/80">Circle west ring road , Oksart place 6th floor</span>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-serif mb-6">Newsletter</h4>
              <p className="text-white/80 mb-4">
                Subscribe to receive updates about new collections and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 rounded-full px-4 py-2 flex-grow"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E8A27D] text-white px-4 py-2 rounded-full"
                >
                 <Send className='w-4'/>
                </motion.button>
              </div>
            </div>
          </div>
  
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
            <p>© 2025 Dolcevita. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;