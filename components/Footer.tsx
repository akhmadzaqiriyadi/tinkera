'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Home,
  User,
  Briefcase,
  FolderOpen,
  Linkedin
} from 'lucide-react';
import { MouseEventHandler } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      if (isScrolled !== showScrollTop) {
        setShowScrollTop(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Navigation items from navbar
  const navItems = [
    { href: "/", id: "hero", label: "Home", icon: Home },
    { href: "aboutus", id: "about", label: "About Us", icon: User },
    { href: "service", id: "service", label: "Service", icon: Briefcase },
    { href: "portfolio", id: "portfolio", label: "Portfolio", icon: FolderOpen },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 pt-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={124}
                height={124}
              />
            </div>
            <p className="text-gray-300 mb-4">
            Kami menyediakan layanan dan solusi terbaik untuk membantu bisnis Anda berkembang.
            Tim kami berkomitmen untuk memberikan hasil berkualitas yang melebihi ekspektasi.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex  space-x-4 mt-6">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/tinkera.id", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/akhmadzaqiriyadi", label: "LinkedIn" },
                { Icon: Youtube, href: "https://www.youtube.com/@zaqitinkerer", label: "Youtube" },
                { Icon: Facebook, href: "https://www.facebook.com/share/161TJjetLP", label: "Facebook" }
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-blue-500 hover:text-white text-gray-300 p-2 rounded-full shadow-md transition-colors"
                  variants={socialIconVariants}
                  whileHover="hover"
                  aria-label={social.label}
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Navigation</h3>
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors hover:translate-x-1 flex items-center"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  7935+VFX Sendangadi, Kabupaten Sleman, Daerah Istimewa Yogyakarta
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">+ (62) 85292677431</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">tinkera@gmail.com</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <Link 
                href="https://wa.me/6281234567890?text=Halo%20Tinkera!%20Saya%20tertarik%20mendapatkan%20konsultasi%20gratis%20untuk%20proyek%20saya.%20Bisa%20dijadwalkan%3F" 
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center font-medium"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  Get In Touch
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Horizontal Line */}
        <motion.div 
          className="border-t border-slate-700 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright and Bottom Links */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} <span className="text-blue-400">Tinkera</span>.Space All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll to top button */}
      <AnimatedScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </footer>
  );
};

// Scroll to Top Button Component
const AnimatedScrollToTop = ({ show, onClick }: { show: boolean; onClick: MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <motion.button
      className={`fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 ${
        show ? 'flex' : 'hidden'
      }`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.5,
        y: show ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};

export default Footer;