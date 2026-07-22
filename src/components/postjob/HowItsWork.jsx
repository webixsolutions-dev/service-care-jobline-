// src/components/PostJob/HowItsWork.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiFileText, FiUsers, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const HowItsWork = () => {
  const steps = [
    {
      id: 1,
      icon: FiFileText,
      title: "Create Your Listing",
      description: "Add your job details, requirements, and preferences in just a few simple steps.",
      stepNumber: "1"
    },
    {
      id: 2,
      icon: FiUsers,
      title: "Reach Qualified Candidates",
      description: "Your job will be seen by motivated professionals actively looking for healthcare and hospitality jobs.",
      stepNumber: "2"
    },
    {
      id: 3,
      icon: FiCheckCircle,
      title: "Hire with Confidence",
      description: "Review applications, connect with candidates, and hire the right fit for your team.",
      stepNumber: "3"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 py-12 px-6 md:px-12 rounded-2xl border border-slate-700 shadow-xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-amber-400 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Posting a job on ServiceCare Jobline is quick and easy. Connect with qualified talent 
              in healthcare, hospitality, and the service industry across Canada.
            </motion.p>
          </div>

          {/* Steps - Flex Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-start justify-center gap-8 max-w-5xl mx-auto"
          >
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <React.Fragment key={step.id}>
                  {/* Step Item */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex-1 text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-400/20 to-amber-400/20 mb-5 mx-auto group-hover:scale-110 transition-transform">
                      <div className="absolute inset-0 rounded-full border-2 border-sky-400/20"></div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sky-400 text-white text-sm font-bold flex items-center justify-center">
                        {step.stepNumber}
                      </div>
                      <IconComponent className="w-8 h-8 text-sky-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow between steps - Hide on mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center flex-shrink-0">
                      <FiArrowRight className="w-6 h-6 text-gray-500" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm">
              Start posting today and find the right talent for your team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItsWork;