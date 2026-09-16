import React from 'react'
import { motion } from "framer-motion";
import { 
  FiCheckCircle, 
  FiUsers, 
  FiBriefcase, 
  FiMapPin, 
  FiClock, 
  FiAward,
  FiTrendingUp,
  FiShield
} from "react-icons/fi";

const WhyChooseJobline = () => {
  // Features data
  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Trusted by Employers",
      description: "Connect with quality employers hiring across Canada"
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      title: "Diverse Job Roles",
      description: "Receptionist, executive assistant, office coordinator, HR support & more"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Nationwide Opportunities",
      description: "Find jobs across all provinces and territories in Canada"
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Quick Apply Process",
      description: "Streamlined application process to save your time"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Quality Employers",
      description: "Verified companies offering legitimate opportunities"
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Secure Platform",
      description: "Safe and trusted job board for professionals"
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Easy Matchmaking",
      description: "Smart algorithms to match you with the right opportunities"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-amber-400 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-sky-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose
            <span className="text-amber-400 block mt-2">Office Jobline</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Office Jobline is Canada's trusted job board for office and administrative professionals. 
            Whether you're looking for receptionist jobs, executive assistant roles, office coordinator 
            jobs, HR support jobs, customer service office roles, or data entry opportunities, we connect 
            you with quality employers hiring across Canada.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-sky-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-sky-400/10"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400/20 to-amber-400/20 flex items-center justify-center text-amber-400 group-hover:text-sky-400 transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-6">
            Ready to find your dream office job in Canada?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-sky-400 text-slate-900 rounded-xl font-semibold hover:bg-sky-300 transition-all hover:scale-105 shadow-lg shadow-sky-400/30">
              Browse Jobs
            </button>
            <button className="px-8 py-3.5 bg-amber-400 text-slate-900 rounded-xl font-semibold hover:bg-amber-300 transition-all hover:scale-105 shadow-lg shadow-amber-400/30">
              Post a Job
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseJobline;