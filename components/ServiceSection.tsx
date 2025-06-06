'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const ServiceSection = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web & Mobile Development',
      description: 'Aplikasi web responsif dan mobile app modern dengan teknologi terkini',
      features: ['React & Next.js', 'Mobile-First Design', 'Progressive Web Apps', 'API Integration']
    },
    {
      icon: '🎨',
      title: 'Graphic Design',
      description: 'Identitas visual memukau yang mencerminkan karakter brand Anda',
      features: ['Logo & Branding', 'UI/UX Design', 'Print Design', 'Social Media Graphics']
    },
    {
      icon: '🎬',
      title: 'Video Editing',
      description: 'Konten video profesional untuk meningkatkan engagement audiens',
      features: ['Corporate Videos', 'Social Media Content', 'Motion Graphics', 'Color Grading']
    },
    {
      icon: '🤖',
      title: 'AI Solutions',
      description: 'Implementasi kecerdasan buatan untuk otomatisasi dan efisiensi bisnis',
      features: ['Custom AI Models', 'Automation Tools', 'Data Analysis', 'Smart Integrations']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-32 left-16 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-16 w-96 h-96 bg-slate-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 pt-20 pb-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-300 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Layanan Kami</span>
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Solusi Digital
            </span>
            <br />
            <span className="text-slate-300">untuk Setiap Kebutuhan</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Selamat datang di pusat layanan <span className="text-blue-400 font-semibold">tinkera.id</span>! 
            Di sini, kami mendedikasikan keahlian dan semangat inovasi untuk membantu Anda mencapai 
            tujuan digital. Kami memahami bahwa setiap bisnis memiliki kebutuhan unik, dan itulah 
            mengapa kami menawarkan solusi komprehensif yang dirancang memberikan dampak nyata.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Jelajahi <span className="text-blue-400">Layanan Profesional</span> Kami
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Temukan bagaimana tinkera.id dapat membantu mewujudkan visi digital Anda 
              dengan rangkaian solusi inovatif berikut:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:bg-slate-800/60"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-slate-400 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-600/50"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Siap Memulai <span className="text-blue-400">Proyek Digital</span> Anda?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Kami percaya pada kekuatan kolaborasi dan solusi yang disesuaikan. 
              Jika Anda memiliki pertanyaan atau ingin mendiskusikan kebutuhan spesifik 
              proyek Anda, jangan ragu untuk menghubungi kami.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href='https://wa.me/628?text=Mulai%20Proyek%20Anda'
              target="blank"
              rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300"
              >
                Diskusikan Proyek Anda (Gratis!)
              </motion.button>
            </a>
              
              <Link href='portfolio'>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 text-slate-200 font-semibold rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  Lihat Portfolio Kami
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-12 w-1 h-1 bg-slate-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-slate-300 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default ServiceSection;