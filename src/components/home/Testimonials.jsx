import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiStar, 
  FiUser, 
  FiMapPin, 
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle,
  FiAward,
  FiHeart,
  FiUsers,
  FiTrendingUp,
  FiMessageSquare,
  FiFileText,
  FiPenTool,
  FiEdit,
  FiCopy,
  FiClipboard,
  FiBookOpen,
  FiFeather,
  FiType,
  FiAlignLeft
} from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "I found a great administrative job within a week! Office Jobline made the process so easy and helped me connect with the right employer.",
      name: "Jessica L.",
      role: "Office Administrator",
      location: "Toronto, ON",
      rating: 5,
      avatar: "JL",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      quote: "We posted a job and received excellent candidates quickly. Office Jobline is our go-to platform for hiring office talent.",
      name: "Mark D.",
      role: "HR Manager",
      location: "Vancouver, BC",
      rating: 5,
      avatar: "MD",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-400"
    },
    {
      id: 3,
      quote: "The best job board for office professionals! I found my dream executive assistant role through Office Jobline. Highly recommend!",
      name: "Sarah K.",
      role: "Executive Assistant",
      location: "Montreal, QC",
      rating: 5,
      avatar: "SK",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500"
    },
    {
      id: 4,
      quote: "As an employer, we've hired 5 team members through Office Jobline. The quality of candidates is outstanding. Highly recommended!",
      name: "David M.",
      role: "Operations Director",
      location: "Calgary, AB",
      rating: 5,
      avatar: "DM",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500"
    }
  ];

  // Statistics data
  const stats = [
    { icon: <FiUsers className="w-6 h-6" />, number: "10,000+", label: "Happy Users" },
    { icon: <FiBriefcase className="w-6 h-6" />, number: "5,000+", label: "Jobs Posted" },
    { icon: <FiStar className="w-6 h-6" />, number: "4.9/5", label: "Average Rating" },
    { icon: <FiTrendingUp className="w-6 h-6" />, number: "95%", label: "Success Rate" }
  ];

  // Navigation handlers
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Variants for animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    })
  };

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

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: i * 0.1 
        }}
      >
        <FiStar 
          className={`w-5 h-5 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'
          }`}
        />
      </motion.div>
    ));
  };

  // Get random icon for background decoration (without using Math.random)
  const quoteIcons = [
    <FiMessageSquare className="w-24 h-24" />,
    <FiFileText className="w-24 h-24" />,
    <FiPenTool className="w-24 h-24" />,
    <FiEdit className="w-24 h-24" />,
    <FiCopy className="w-24 h-24" />,
    <FiClipboard className="w-24 h-24" />,
    <FiBookOpen className="w-24 h-24" />,
    <FiFeather className="w-24 h-24" />,
    <FiType className="w-24 h-24" />,
    <FiAlignLeft className="w-24 h-24" />
  ];

  // Cycle through icons based on current index
  const getQuoteIcon = (index) => {
    return quoteIcons[index % quoteIcons.length];
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-amber-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-sky-400 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-amber-400/10"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {getQuoteIcon(0)}
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-sky-400/10"
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {getQuoteIcon(1)}
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-5 text-purple-400/10 hidden lg:block"
        animate={{
          y: [-15, 15, -15],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {getQuoteIcon(2)}
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-5 text-green-400/10 hidden lg:block"
        animate={{
          y: [15, -15, 15],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {getQuoteIcon(3)}
      </motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/20 to-sky-400/20 border border-amber-400/30 text-amber-300 text-sm font-medium">
              <FiMessageCircle className="w-4 h-4" />
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            What Our
            <span className="text-amber-400 block sm:inline"> Users Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300"
          >
            Real stories from real people who found their dream jobs through Office Jobline
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 p-8 md:p-12 overflow-hidden">
            {/* Quote Background */}
            <div className="absolute -top-10 -right-10 text-amber-400/5 select-none">
              <FiMessageSquare className="w-32 h-32" />
            </div>

            {/* Animated Testimonial */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${testimonials[currentIndex].iconBg} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {testimonials[currentIndex].avatar}
                  </motion.div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <FiBriefcase className="w-3 h-3" />
                        {testimonials[currentIndex].role}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span className="flex items-center gap-1">
                        <FiMapPin className="w-3 h-3" />
                        {testimonials[currentIndex].location}
                      </span>
                    </div>
                  </div>

                  <motion.div
                    className="hidden sm:block"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiAward className="w-8 h-8 text-amber-400" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto p-3 rounded-full bg-slate-700/50 backdrop-blur-sm text-white hover:bg-slate-600/50 transition-all border border-slate-600/50"
              >
                <FiChevronLeft className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="pointer-events-auto p-3 rounded-full bg-slate-700/50 backdrop-blur-sm text-white hover:bg-slate-600/50 transition-all border border-slate-600/50"
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-amber-400 to-sky-400' 
                    : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                animate={index === currentIndex ? { 
                  scale: [1, 1.2, 1],
                } : {}}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-amber-400/30 transition-all hover:scale-105 hover:shadow-xl"
            >
              <motion.div
                className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-400/20 to-sky-400/20 text-amber-400 mb-3"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Join thousands of satisfied users today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-xl font-semibold shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all"
            >
              Find Your Dream Job
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-sky-400 text-slate-900 rounded-xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all"
            >
              Post a Job
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials