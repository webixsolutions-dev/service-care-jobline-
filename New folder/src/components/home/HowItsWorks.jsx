import React, { useState } from 'react'
import { motion } from "framer-motion";
import { 
  FiSearch, 
  FiMousePointer, 
  FiUserPlus, 
  FiBriefcase,
  FiChevronRight,
  FiArrowRight,
  FiStar,
  FiTarget,
  FiTrendingUp,
  FiAward,
  FiSmile,
  FiThumbsUp,
  FiZap,
  FiCompass,
  FiMapPin
} from "react-icons/fi";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Steps data
  const steps = [
    {
      id: 0,
      icon: <FiSearch className="w-8 h-8" />,
      title: "Search Jobs",
      description: "Find office and administrative jobs that match your skills and location.",
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400"
    },
    {
      id: 1,
      icon: <FiMousePointer className="w-8 h-8" />,
      title: "Apply Easily",
      description: "Apply to jobs in just a few clicks. It's fast, simple, and secure.",
      color: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-400"
    },
    {
      id: 2,
      icon: <FiUserPlus className="w-8 h-8" />,
      title: "Create Profile",
      description: "Build your profile, add your experience, and let employers find you.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500"
    },
    {
      id: 3,
      icon: <FiBriefcase className="w-8 h-8" />,
      title: "Get Hired",
      description: "Connect with employers and land the right opportunity for your career.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      iconBg: "bg-gradient-to-br from-green-400 to-emerald-500"
    }
  ];

  // Floating icons data with fixed positions
  const floatingIcons = [
    { icon: <FiStar className="w-12 h-12" />, top: "10%", left: "5%", delay: 0 },
    { icon: <FiTarget className="w-12 h-12" />, top: "85%", left: "8%", delay: 1 },
    { icon: <FiTrendingUp className="w-12 h-12" />, top: "15%", right: "5%", delay: 0.5 },
    { icon: <FiAward className="w-12 h-12" />, bottom: "10%", right: "8%", delay: 1.5 },
    { icon: <FiSmile className="w-12 h-12" />, top: "50%", left: "2%", delay: 0.8 },
    { icon: <FiThumbsUp className="w-12 h-12" />, top: "45%", right: "2%", delay: 1.2 },
    { icon: <FiMapPin className="w-12 h-12" />, top: "75%", left: "12%", delay: 0.3 },
    { icon: <FiCompass className="w-12 h-12" />, top: "25%", right: "12%", delay: 0.7 },
  ];

  // Background particle positions with fixed coordinates
  const particles = [
    { top: "10%", left: "20%", delay: 0 },
    { top: "30%", left: "80%", delay: 0.5 },
    { top: "50%", left: "10%", delay: 1 },
    { top: "70%", left: "90%", delay: 1.5 },
    { top: "20%", left: "50%", delay: 0.3 },
    { top: "80%", left: "30%", delay: 0.8 },
    { top: "40%", left: "60%", delay: 1.2 },
    { top: "60%", left: "40%", delay: 0.6 },
    { top: "15%", left: "75%", delay: 1.3 },
    { top: "85%", left: "15%", delay: 0.4 },
    { top: "45%", left: "95%", delay: 0.9 },
    { top: "55%", left: "5%", delay: 1.1 },
    { top: "25%", left: "35%", delay: 0.7 },
    { top: "75%", left: "65%", delay: 0.2 },
    { top: "35%", left: "45%", delay: 1.4 },
    { top: "65%", left: "55%", delay: 0.5 },
    { top: "5%", left: "90%", delay: 0.8 },
    { top: "95%", left: "25%", delay: 1.0 },
    { top: "12%", left: "65%", delay: 0.6 },
    { top: "88%", left: "75%", delay: 1.2 },
  ];

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0, opacity: 0.1 },
    animate: {
      y: [-10, 10, -10],
      opacity: 0.1,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/20 rounded-full"
            style={{
              top: particle.top,
              left: particle.left,
            }}
            initial={{ scale: 0 }}
            animate={{
              y: [null, -100, -200],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-500 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-amber-500 blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Animated Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: item.delay }}
          className="absolute text-sky-400/10 select-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Animated Badge */}
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
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 to-amber-400/20 border border-sky-400/30 text-sky-300 text-sm font-medium">
              <FiZap className="w-4 h-4" />
              Simple 4-Step Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-6 mb-4"
          >
            How It
            <span className="text-amber-400 block sm:inline"> Works</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300"
          >
            Get discovered. Get hired. Build your office career.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(0)}
            >
              {/* Step Number Background */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/5 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Card */}
              <motion.div
                className={`relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border ${step.borderColor} 
                  hover:bg-slate-800/60 transition-all duration-500 h-full
                  ${activeStep === index ? 'shadow-2xl shadow-sky-400/10' : ''}`}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Icon Container with Animation */}
                <motion.div
                  className={`relative w-20 h-20 rounded-2xl ${step.iconBg} flex items-center justify-center text-white shadow-lg mb-5
                    ${activeStep === index ? 'shadow-xl shadow-sky-400/30' : ''}`}
                  animate={
                    activeStep === index
                      ? { 
                          rotate: [0, -10, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {step.icon}
                  {/* Pulsing Ring */}
                  {activeStep === index && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-sky-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>

                {/* Step Number */}
                <div className="absolute top-4 right-4 text-sm font-bold text-sky-400/40">
                  Step {index + 1}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold text-white mb-3 transition-colors duration-300
                  ${activeStep === index ? 'text-amber-400' : ''}`}>
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Animated Arrow on Hover */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sky-400 text-sm font-medium"
                  initial={{ opacity: 0.5, x: 0 }}
                  animate={activeStep === index ? { opacity: 1, x: 5 } : { opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-b-2xl"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={activeStep === index ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-[12.5%] right-[12.5%] top-1/2 -translate-y-1/2 h-[2px]">
            <motion.div
              className="h-full bg-gradient-to-r from-sky-400 via-amber-400 to-green-400"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
          </div>
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400"
              style={{ left: `${12.5 + (index * 25)}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + (index * 0.2) }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-sky-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-400 to-amber-400 text-slate-900 rounded-2xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all duration-300"
          >
            <FiZap className="w-5 h-5" />
            Start Your Journey Today
            <FiChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks