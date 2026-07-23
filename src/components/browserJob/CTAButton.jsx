import React from 'react'
import { motion } from "framer-motion";
import { 
  FiBell, 
  FiUpload, 
  FiArrowRight,
  FiZap
} from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-sky-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-400 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
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
              <FiZap className="w-4 h-4" />
              Don't Miss Out
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Don't Miss Your
            <span className="text-amber-400 block sm:inline"> Next Opportunity</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Create job alerts and be the first to know about new office jobs that match your skills and experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Create Job Alert Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 rounded-xl font-semibold shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all overflow-hidden min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiBell className="w-5 h-5" />
                Create Job Alert
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Upload Resume Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 rounded-xl font-semibold shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all overflow-hidden min-w-[200px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiUpload className="w-5 h-5" />
                Upload Your Resume
                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-sm text-gray-400"
          >
            Trusted by 10,000+ professionals across Canada
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection