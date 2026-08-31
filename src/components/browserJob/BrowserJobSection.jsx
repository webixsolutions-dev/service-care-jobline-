import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiMapPin, 
  FiBriefcase, 
  FiUsers, 
  FiTrendingUp,
  FiShield,
  FiClock,
  FiAward,
  FiCheckCircle,
  FiStar,
  FiGlobe,
  FiLayers,
  FiFilter,
  FiX,
  FiChevronDown
} from "react-icons/fi";

const BrowseJobsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  // Filter options
  const filterOptions = [
    { id: 'full-time', label: 'Full-Time', icon: <FiBriefcase className="w-4 h-4" /> },
    { id: 'part-time', label: 'Part-Time', icon: <FiClock className="w-4 h-4" /> },
    { id: 'remote', label: 'Remote', icon: <FiGlobe className="w-4 h-4" /> },
    { id: 'hybrid', label: 'Hybrid', icon: <FiLayers className="w-4 h-4" /> },
    { id: 'entry-level', label: 'Entry Level', icon: <FiTrendingUp className="w-4 h-4" /> },
    { id: 'contract', label: 'Contract', icon: <FiClock className="w-4 h-4" /> },
  ];

  // Statistics data
  const stats = [
    {
      number: "10,248+",
      label: "Active Office Jobs",
      description: "New office & administrative jobs posted every day.",
      icon: <FiBriefcase className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      number: "2,350+",
      label: "Employers Hiring",
      description: "Trusted companies actively hiring across Canada.",
      icon: <FiUsers className="w-8 h-8" />,
      color: "from-purple-500 to-pink-400"
    }
  ];

  // Features data
  const features = [
    {
      icon: <FiGlobe className="w-6 h-6" />,
      title: "Canada-Wide Opportunities",
      description: "Find the right job wherever you are in Canada.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "100% Free for Job Seekers",
      description: "Browse and apply to jobs at no cost.",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "Your data is safe and never shared.",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Trusted by Thousands",
      description: "Thousands of professionals find jobs every month.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  // Toggle filter
  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  // Clear filters
  const clearFilters = () => {
    setSelectedFilters([]);
    setSearchTerm('');
  };

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const statsNumberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sky-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/20 rounded-full"
            style={{
              top: `${(i * 7) % 100}%`,
              left: `${(i * 13) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-24 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 to-amber-400/20 border border-sky-400/30 text-sky-300 text-sm font-medium">
              <FiSearch className="w-4 h-4" />
              Find Your Dream Job
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Browse Jobs
            <span className="text-amber-400 block sm:inline"> Across Canada</span>
          </motion.h2>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-6"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Job title, keyword or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800/50 backdrop-blur-sm text-white placeholder-gray-400 rounded-2xl pl-12 pr-4 py-4 border border-slate-700/50 focus:border-sky-400 focus:outline-none transition-all text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiFilter className="w-5 h-5" />
              <span>Filter by:</span>
              {selectedFilters.length > 0 && (
                <span className="bg-sky-400 text-slate-900 text-xs px-2 py-0.5 rounded-full">
                  {selectedFilters.length}
                </span>
              )}
              <FiChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-3 pb-4">
                  {filterOptions.map((filter) => (
                    <motion.button
                      key={filter.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFilter(filter.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                        selectedFilters.includes(filter.id)
                          ? 'bg-sky-400/20 border-sky-400 text-sky-300'
                          : 'bg-slate-800/50 border-slate-700/50 text-gray-400 hover:text-white hover:border-slate-500'
                      }`}
                    >
                      {filter.icon}
                      <span className="text-sm font-medium">{filter.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 pb-4"
            >
              {selectedFilters.map((filterId) => {
                const filter = filterOptions.find(f => f.id === filterId);
                return (
                  <motion.span
                    key={filterId}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="inline-flex items-center gap-2 bg-sky-400/10 border border-sky-400/30 text-sky-300 px-3 py-1 rounded-full text-sm"
                  >
                    {filter?.icon}
                    {filter?.label}
                    <button
                      onClick={() => toggleFilter(filterId)}
                      className="hover:text-white transition-colors"
                    >
                      <FiX className="w-3 h-3" />
                    </button>
                  </motion.span>
                );
              })}
            </motion.div>
          )}
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${stat.color}/10 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-${stat.color.split(' ')[1]}/50 transition-all hover:shadow-xl hover:scale-105`}>
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.div
                      variants={statsNumberVariants}
                      className="text-3xl md:text-4xl font-bold text-white mb-1"
                    >
                      {stat.number}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {stat.description}
                    </p>
                  </div>
                </div>
                {/* Animated border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  style={{ filter: 'blur(20px)' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-amber-400/30 transition-all h-full hover:shadow-xl hover:shadow-amber-400/5">
                <motion.div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-4`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
                {/* Decorative line */}
                <motion.div
                  className="mt-4 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-sky-400/10 to-amber-400/10 border border-sky-400/20 mb-6"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FiStar className="text-amber-400" />
            <span className="text-gray-300">Ready to start your career journey?</span>
          </motion.div>
          
       
        </motion.div>
      </div>
    </section>
  )
}

export default BrowseJobsSection