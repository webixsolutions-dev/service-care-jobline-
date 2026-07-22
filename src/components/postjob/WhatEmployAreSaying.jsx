// src/components/PostJob/WhatEmployAreSaying.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiStar, FiUser } from "react-icons/fi";
import { testominalsData } from "../../data/public/cardData";

const WhatEmployAreSaying = () => {
  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Employers Are Saying
          </h2>
          <p className="text-teal-400 text-lg max-w-2xl mx-auto">
            Real feedback from employers who found success with ServiceCare Jobline
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testominalsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="bg-slate-900 rounded-2xl p-8 border  shadow-sm hover:shadow-lg text-white hover:border-sky-400/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-amber-400 fill-amber-400" size={18} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-400/10 flex items-center justify-center text-sky-400">
                  <FiUser size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-white">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatEmployAreSaying;