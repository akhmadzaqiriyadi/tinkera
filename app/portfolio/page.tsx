'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Proyek', icon: '🎯' },
    { id: 'web', name: 'Web & Mobile', icon: '💻' },
    { id: 'design', name: 'Desain Grafis', icon: '🎨' },
    { id: 'video', name: 'Video Editing', icon: '🎬' },
    { id: 'ai', name: 'AI Solutions', icon: '🤖' }
  ];

  const projects = [
    // Web & Mobile Development
    {
      id: 1,
      category: 'web',
      title: 'NusantaraHarvest',
      subtitle: 'Platform E-commerce Hasil Bumi Lokal',
      client: 'Koperasi Petani Maju Bersama',
      description: 'Platform e-commerce responsif untuk membantu petani lokal memasarkan produk hasil bumi dengan jangkauan yang lebih luas.',
      tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
      results: ['300% peningkatan jangkauan pasar', '40% peningkatan pendapatan petani', 'Sistem pembayaran terintegrasi'],
      image: '🌾',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 2,
      category: 'web',
      title: 'JelajahIndo',
      subtitle: 'Aplikasi Mobile Pemandu Wisata Interaktif',
      client: 'IndoAdventures Startup',
      description: 'Aplikasi mobile dengan fitur AR untuk memberikan pengalaman wisata yang lebih menarik dan informatif.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'AR Kit'],
      results: ['10.000+ downloads dalam 3 bulan', '4.8⭐ rating di app store', 'Fitur AR interaktif'],
      image: '🗺️',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      category: 'web',
      title: 'SuaraHarapan',
      subtitle: 'Website Donasi & Kampanye Sosial',
      client: 'Yayasan Bantu Sesama',
      description: 'Platform donasi online yang aman dan transparan dengan sistem pelaporan real-time.',
      tech: ['Next.js', 'Stripe API', 'Firebase', 'Chart.js'],
      results: ['60% peningkatan donasi online', 'Sistem transparansi lengkap', 'SEO optimized'],
      image: '❤️',
      color: 'from-red-500 to-pink-600'
    },
    // Graphic Design
    {
      id: 4,
      category: 'design',
      title: 'AromaPagi',
      subtitle: 'Identitas Visual Kopi Spesialti',
      client: 'AromaPagi Roastery',
      description: 'Paket identitas visual lengkap untuk usaha kopi spesialti dengan konsep hangat dan premium.',
      tech: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma'],
      results: ['Brand recognition meningkat', 'Desain kemasan premium', 'Panduan brand lengkap'],
      image: '☕',
      color: 'from-amber-600 to-orange-600'
    },
    {
      id: 5,
      category: 'design',
      title: 'NutriBoost',
      subtitle: 'Kampanye Media Sosial Minuman Sehat',
      client: 'NutriBoost Smoothies',
      description: 'Konten visual media sosial yang menarik untuk meningkatkan engagement dan brand awareness.',
      tech: ['Adobe Creative Suite', 'Canva Pro', 'After Effects'],
      results: ['75% peningkatan engagement', '30% pertumbuhan followers', 'Brand recall meningkat'],
      image: '🥤',
      color: 'from-lime-500 to-green-600'
    },
    {
      id: 6,
      category: 'design',
      title: 'FitPal UI/UX',
      subtitle: 'Redesign Aplikasi Kebugaran',
      client: 'FitPal App Startup',
      description: 'Redesign antarmuka aplikasi kebugaran dengan fokus pada user experience dan modern design.',
      tech: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      results: ['40% penurunan bounce rate', 'User satisfaction meningkat', 'Prototype interaktif'],
      image: '💪',
      color: 'from-purple-500 to-indigo-600'
    },
    // Video Editing
    {
      id: 7,
      category: 'video',
      title: 'GadgetX Pro',
      subtitle: 'Video Promosi Peluncuran Produk',
      client: 'InnovaTech Company',
      description: 'Video promosi dinamis dengan motion graphics dan voice-over profesional untuk peluncuran gadget.',
      tech: ['Adobe Premiere Pro', 'After Effects', 'Audition', 'Cinema 4D'],
      results: ['1 juta+ views', '25% peningkatan pre-order', 'Viral di media sosial'],
      image: '📱',
      color: 'from-slate-500 to-gray-600'
    },
    {
      id: 8,
      category: 'video',
      title: 'SimpleInvest',
      subtitle: 'Animasi Eksplanasi Platform Investasi',
      client: 'SimpleInvest Fintech',
      description: 'Video animasi 2D untuk menjelaskan konsep investasi reksa dana dengan cara yang mudah dipahami.',
      tech: ['Adobe After Effects', 'Illustrator', 'Audition', 'Character Animator'],
      results: ['80% peningkatan pemahaman user', 'Konversi registrasi meningkat', 'Narasi yang engaging'],
      image: '📈',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 9,
      category: 'video',
      title: 'Tech Summit 2025',
      subtitle: 'Highlight Reel Konferensi Teknologi',
      client: 'Global Tech Events',
      description: 'Video highlight energik dari konferensi teknologi dengan testimoni dan momen-momen penting.',
      tech: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics'],
      results: ['35% peningkatan pendaftaran', 'Dokumentasi profesional', 'Engagement tinggi'],
      image: '🎤',
      color: 'from-violet-500 to-purple-600'
    },
    // AI Solutions
    {
      id: 10,
      category: 'ai',
      title: 'BookNook AI',
      subtitle: 'Mesin Rekomendasi Cerdas',
      client: 'BookNook Online Store',
      description: 'Sistem rekomendasi berbasis AI yang menganalisis preferensi pengguna untuk rekomendasi buku personal.',
      tech: ['Python', 'TensorFlow', 'scikit-learn', 'PostgreSQL'],
      results: ['50% peningkatan CTR', 'Nilai transaksi naik', 'Loyalitas pelanggan meningkat'],
      image: '📚',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 11,
      category: 'ai',
      title: 'ConnectSphere Bot',
      subtitle: 'Chatbot Layanan Pelanggan AI',
      client: 'ConnectSphere Telecom',
      description: 'Chatbot AI 24/7 yang memahami bahasa alami untuk menangani pertanyaan pelanggan secara efisien.',
      tech: ['Python', 'NLP', 'DialogFlow', 'TensorFlow'],
      results: ['40% reduksi panggilan agen', 'Respons 24/7', 'Kepuasan pelanggan naik'],
      image: '🤖',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 12,
      category: 'ai',
      title: 'AgriFuture Vision',
      subtitle: 'Sistem Deteksi Kualitas Produk',
      client: 'AgriFuture Tech',
      description: 'Sistem visi komputer untuk menyortir hasil panen berdasarkan kualitas dan ukuran secara otomatis.',
      tech: ['Python', 'OpenCV', 'YOLO', 'TensorFlow'],
      results: ['95% akurasi penyortiran', 'Efisiensi produksi naik', 'Waste reduction'],
      image: '🌱',
      color: 'from-green-500 to-lime-600'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
        className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-300 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Portfolio Kami</span>
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Karya Digital
            </span>
            <br />
            <span className="text-slate-300">yang Menginspirasi</span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed"
          >
            Jelajahi koleksi proyek-proyek inovatif yang telah kami kerjakan. 
            Setiap karya mencerminkan dedikasi kami dalam menghadirkan solusi digital 
            yang memberikan dampak nyata dan hasil yang terukur bagi klien.
          </motion.p>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 backdrop-blur-sm text-slate-300 border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-700/50'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        key={activeCategory}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
              >
                {/* Project Header */}
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl opacity-80">{project.image}</div>
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 font-medium text-sm mb-1">
                      {project.subtitle}
                    </p>
                    <p className="text-slate-500 text-sm">
                      Klien: {project.client}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                      Teknologi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
              Siap Menjadi <span className="text-blue-400">Proyek Berikutnya</span>?
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
              Setiap proyek di atas dimulai dari diskusi sederhana tentang visi dan kebutuhan. 
              Mari kita wujudkan ide digital Anda menjadi kenyataan yang memberikan dampak nyata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/6285292677431?text=Hai%20Tinkera%2C%20aku%20punya%20ide%20proyek%20yang%20mau%20didiskusikan.%20Bisa%20bantu%3F"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300"
                >
                  Mulai Proyek Anda
                </motion.button>
              </Link>

              <Link href="https://wa.me/6285292677431?text=Halo%20Tinkera!%20Saya%20tertarik%20untuk%20Diskusikan%20Proyek%20Saya%20(Gratis!).%20Boleh%20dibantu%3F">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80 text-slate-200 font-semibold rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                >
                  Diskusi Kebutuhan Anda
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

export default PortfolioPage;