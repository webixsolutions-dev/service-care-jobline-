import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaSearch, FaBriefcase, FaRegHeart, FaPlus, FaConciergeBell } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const testimonials = [
  {
    quote:
      'ServiceCare Jobline helped us find reliable and professional staff quickly. The platform is easy to use and connects us with great talent.',
    name: 'Mark D.',
    role: 'HR Manager, Mapleview Hotels',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    quote:
      'I found my dream job in healthcare through ServiceCare Jobline. The process was simple, fast, and stress-free!',
    name: 'Priya S.',
    role: 'Registered Nurse, Toronto, ON',
    avatar: 'https://i.pravatar.cc/150?img=47'
  },
  {
    quote:
      "We've hired amazing team members through ServiceCare Jobline. It's our go-to platform for quality hires.",
    name: 'James L.',
    role: 'Owner, Coastline Restaurant',
    avatar: 'https://i.pravatar.cc/150?img=51'
  }
];

const TestimonialsCTA = () => {
  return (
    <section className="bg-slate-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-10 md:mb-12"
        >
          Trusted by <span className="text-cyan-400">Employers</span> and
          <br className="hidden sm:block" /> Job Seekers <span className="text-amber-400">Across Canada</span>
        </motion.h2>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-10"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 sm:p-7"
            >
              <div className="flex items-start justify-between mb-5">
                <FaQuoteLeft className="text-cyan-400 text-2xl sm:text-3xl" />
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <FaStar key={s} className="text-amber-400 text-sm sm:text-base" />
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shrink-0 border border-slate-600/50"
                />
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>

              <div className="mt-5 pl-[4.5rem] sm:pl-20">
                <p className="text-cyan-400 font-semibold text-sm sm:text-base">{t.name}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Icon */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
              <FaRegHeart className="absolute inset-0 w-full h-full text-cyan-400" />
              <FaPlus className="absolute top-[26%] left-1/2 -translate-x-1/2 text-cyan-400 text-lg sm:text-xl" />
              <FaConciergeBell className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-amber-400 text-2xl sm:text-3xl bg-slate-800 rounded-full p-1" />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                Ready to Explore <span className="text-amber-400">New Opportunities</span>
                <br className="hidden sm:block" /> or Hire <span className="text-amber-400">Top Talent?</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Join thousands of employers and job seekers across Canada who trust ServiceCare Jobline to
                connect and grow.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-colors text-white font-semibold px-6 py-3 rounded-xl whitespace-nowrap">
                <FaSearch className="text-sm" />
                Browse Jobs
              </button>
              <button className="flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 transition-colors text-slate-900 font-semibold px-6 py-3 rounded-xl whitespace-nowrap">
                <FaBriefcase className="text-sm" />
                Post a Job
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
