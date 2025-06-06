'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    { name: 'Frontend Development', icon: '🎨', description: 'React, Next.js, Modern UI/UX' },
    { name: 'Backend Development', icon: '⚙️', description: 'Scalable Systems & APIs' },
    { name: 'AI/ML Engineering', icon: '🤖', description: 'Intelligent Solutions' },
    { name: 'SEO Optimization', icon: '📈', description: 'Digital Visibility' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-300 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Tentang Kami</span>
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Di Balik Layar
            </span>
            <br />
            <span className="text-slate-300">tinkera.id</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Kami percaya bahwa setiap ide brilian berhak mendapatkan realisasi digital terbaik. 
            Di balik semangat inovasi dan solusi kreatif yang kami tawarkan, ada cerita seorang innovator muda.
          </motion.p>
        </div>
      </motion.section>

      {/* Profile Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  AZ
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Akhmad Zaqi Riyadi</h3>
                  <p className="text-blue-400 font-medium mb-2">Fullstack Engineer & AI Engineer</p>
                  <p className="text-slate-400 text-sm">Mahasiswa TI Semester 6</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-slate-500/20 rounded-full blur-xl"
              />
            </motion.div>

            {/* Profile Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Perjalanan Seorang <span className="text-blue-400">Inovator Muda</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Akhmad Zaqi Riyadi, seorang mahasiswa Teknik Informatika semester 6 yang dinamis, 
                  telah mendedikasikan dirinya untuk mendalami dunia teknologi. Dengan fondasi yang kuat 
                  di berbagai aspek pengembangan perangkat lunak dan kecerdasan buatan, Zaqi membawa 
                  perpaduan unik antara keahlian teknis mendalam dan visi kreatif.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">6</div>
                  <div className="text-slate-300 text-sm">Semester TI</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                  <div className="text-2xl font-bold text-blue-400">4+</div>
                  <div className="text-slate-300 text-sm">Keahlian Utama</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-600/50"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              <span className="text-blue-400">Misi</span> tinkera.id
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Dengan latar belakang dan keahlian Akhmad Zaqi Riyadi, tinkera.id berkomitmen untuk 
              menjadi partner digital tepercaya Anda. Kami menggabungkan semangat inovasi seorang 
              engineer muda dengan pemahaman mendalam akan teknologi terkini untuk menghadirkan 
              solusi yang tidak hanya memenuhi, tetapi melampaui ekspektasi Anda.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link href="aboutus">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300">
                  Mari Berkolaborasi!
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;