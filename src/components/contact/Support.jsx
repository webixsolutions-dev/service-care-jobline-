// src/components/Support/Support.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { 
  FiMapPin, 
  FiClock, 
  FiHeadphones, 
  FiUsers, 
  FiMail, 
  FiPhone, 
  FiGlobe,
  FiChevronDown,
  FiChevronUp
} from "react-icons/fi";

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How fast will I receive a reply?",
      answer: "We aim to respond within one business day."
    },
    {
      id: 2,
      question: "Can employers get posting support?",
      answer: "Yes! Our team can help you create and manage job postings."
    },
    {
      id: 3,
      question: "Can job seekers ask for help?",
      answer: "Absolutely. We can guide you through your job search."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            We're Here to Help & Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have a question or need assistance? Our team is here to help employers 
            and job seekers connect with confidence.
          </motion.p>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {/* Office Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sky-400/30 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-sky-400/20 p-3 text-sky-400">
                <FiMapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Office Location
                </h3>
                <p className="text-gray-300 text-sm">
                  Visit our Toronto office or reach out online.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hours of Operation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-amber-400/20 p-3 text-amber-400">
                <FiClock size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Hours of Operation
                </h3>
                <p className="text-gray-300 text-sm">
                  Monday - Friday
                </p>
                <p className="text-amber-400 text-sm font-medium">
                  8:30 AM - 5:30 PM ET
                </p>
              </div>
            </div>
          </motion.div>

          {/* Live Employer Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-sky-400/30 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-sky-400/20 p-3 text-sky-400">
                <FiHeadphones size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Live Employer Help
                </h3>
                <p className="text-gray-300 text-sm">
                  Get support for posting, managing jobs, and more.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Job Seeker Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-xl bg-amber-400/20 p-3 text-amber-400">
                <FiUsers size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Job Seeker Guidance
                </h3>
                <p className="text-gray-300 text-sm">
                  We're here to help you find the right opportunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                ServiceCare Jobline - Toronto Office
              </h3>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>425 University Avenue, Suite 200</p>
                <p>Toronto, ON M5G 1T6 Canada</p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-sky-400" size={16} />
                  (416) 555-0199
                </p>
                <p className="flex items-center gap-2">
                  <FiMail className="text-sky-400" size={16} />
                  support@servicecarejobline.ca
                </p>
                <p className="flex items-center gap-2">
                  <FiGlobe className="text-sky-400" size={16} />
                  www.servicecarejobline.ca
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">
                Nearby Locations
              </h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>Queen St W</p>
                <p>King St W</p>
                <p>Front St W</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-2">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-300 text-center mb-8">
            Quick answers to common questions.
          </p>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-sky-400/30 transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-medium text-white">
                    {faq.question}
                  </span>
                  {openFaq === faq.id ? (
                    <FiChevronUp className="text-sky-400 flex-shrink-0" size={20} />
                  ) : (
                    <FiChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Support;