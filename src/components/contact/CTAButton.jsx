// src/components/CTA/LetConnect.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiSend, FiBriefcase } from "react-icons/fi";

const LetConnect = () => {
  return (
    <section className="py-16 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-8"
          >
            ServiceCare Jobline connects hospitality and healthcare employers 
            with qualified talent across Canada. Contact us for support, 
            questions, or hiring assistance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-3.5 bg-sky-400 text-slate-900 font-semibold rounded-xl shadow-lg shadow-sky-400/30 hover:bg-sky-300 hover:shadow-sky-400/50 transition-all hover:scale-105 flex items-center gap-2">
              <FiSend size={18} />
              Send a Message
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 text-slate-900 font-semibold rounded-xl shadow-lg shadow-amber-400/30 hover:bg-amber-300 hover:shadow-amber-400/50 transition-all hover:scale-105 flex items-center gap-2">
              <FiBriefcase size={18} />
              Post a Job
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LetConnect;