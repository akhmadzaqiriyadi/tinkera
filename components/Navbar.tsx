'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if current path matches nav item
  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.includes(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Only track sections on homepage
      if (pathname === "/") {
        const sections = ['hero', 'about', 'service', 'portfolio', 'contact'];
        const sectionElements = sections.map(id => document.getElementById(id));
        
        const currentPosition = window.scrollY + (window.innerHeight / 2);
        
        for (let i = sectionElements.length - 1; i >= 0; i--) {
          const section = sectionElements[i];
          if (section && section.offsetTop <= currentPosition) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeSection, pathname]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      height: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      x: -20,
      transition: { duration: 0.2 }
    }
  };

  const navItems = [
    { href: "/", id: "hero", label: "Home" },
    { href: "/aboutus", id: "about", label: "About Us" },
    { href: "/portfolio", id: "portfolio", label: "Portfolio" },
    { href: "/service", id: "service", label: "Service" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-screen">
      <motion.nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/60 backdrop-blur-md mx-4 md:mx-12 mt-9 rounded-full shadow-lg'
            : 'bg-slate-800 shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 0.8 
        }}
      >
        <div className={`container mx-auto px-4 ${scrolled ? 'px-6 -my-2' : ''}`}>
          <div className="flex justify-between items-center h-18 md:h-16 lg:h-20">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/#hero" className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                    <Image 
                      src="/logo.svg"
                      alt="Logo" 
                      width={124} 
                      height={124} 
                      className="mr-2"
                    />
                </motion.div>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8 md:space-x-2 lg:space-x-4">
              {navItems.map((item, i) => {
                const isActive = pathname === "/" 
                  ? activeSection === item.id 
                  : isActivePath(item.href);
                
                return (
                  <motion.div
                    key={item.href}
                    custom={i}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative"
                  >
                    <Link 
                      href={item.href} 
                      className={`text-white text-sm font-medium hover:text-blue-200 transition-all duration-300 px-3 py-2 rounded-lg relative ${
                        isActive 
                          ? 'text-blue-400 font-semibold bg-blue-500/10' 
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.label}
                      </motion.span>
                      
                      {/* Animated underline indicator */}
                      <motion.div
                        className="absolute bottom-0 left-1/2 h-0.5 bg-blue-400 rounded-full"
                        initial={{ width: 0, x: "-50%" }}
                        animate={{ 
                          width: isActive ? "80%" : 0,
                          x: "-50%"
                        }}
                        transition={{ 
                          duration: 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="hidden md:flex space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link 
                href="https://wa.me/6285292677431?text=Halo%20Tinkera!%20Saya%20ingin%20konsultasi%20tentang%20proyek%20digital%20saya.%20Kapan%20waktu%20yang%20tepat%20untuk%20diskusi%3F"
                className={`border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-colors flex items-center ${
                  scrolled ? 'py-1.5 text-xs' : 'py-2 text-sm'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Phone size={16} className="mr-2" />
                  Contact
                </motion.div>
              </Link>
            </motion.div>

            <motion.div 
              className="md:hidden flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.button
                className="outline-none mobile-menu-button text-white"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-20 pt-6 w-screen left-0 right-0 z-40"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className={`mx-4 bg-slate-900/85 backdrop-blur-md shadow-lg rounded-2xl border border-slate-800`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, i) => {
                  const isActive = pathname === "/" 
                    ? activeSection === item.id 
                    : isActivePath(item.href);
                  
                  return (
                    <motion.div
                      key={item.href}
                      variants={menuItemVariants}
                      custom={i}
                      className="relative"
                    >
                      <Link 
                        href={item.href} 
                        className={`block px-4 py-3 text-white font-medium hover:bg-slate-800 rounded-lg transition-all duration-300 relative ${
                          isActive 
                            ? 'bg-slate-700 text-blue-400 border-l-4 border-blue-400' 
                            : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                        
                        {/* Active indicator for mobile */}
                        {isActive && (
                          <motion.div
                            className="absolute right-3 top-1/2 w-2 h-2 bg-blue-400 rounded-full"
                            initial={{ scale: 0, y: "-50%" }}
                            animate={{ scale: 1, y: "-50%" }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <motion.div variants={menuItemVariants} className="space-y-3 pt-4 border-t border-slate-700">
                  <Link 
                    href="https://wa.me/6285292677431?text=Halo%20Tinkera!%20Saya%20ingin%20konsultasi%20tentang%20proyek%20digital%20saya.%20Kapan%20waktu%20yang%20tepat%20untuk%20diskusi%3F"
                    className="flex items-center justify-center px-4 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone size={18} className="mr-2" />
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;