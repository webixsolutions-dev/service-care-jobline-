// src/components/Contact/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiClock, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Submit logic here
  };

  const contactInfo = [
    {
      id: 1,
      title: "General Inquiries",
      description: "Questions about our platform, partnerships, or general information.",
      email: "info@servicecarejobline.ca",
      phone: "1-888-123-4567",
      hours: "Mon - Fri, 8:30 AM - 5:00 PM EST",
      icon: FiMail,
      color: "text-sky-400",
      bgColor: "bg-sky-400/10"
    },
    {
      id: 2,
      title: "Employer Support",
      description: "Get support with job postings, account access, or hiring solutions.",
      email: "employers@servicecarejobline.ca",
      phone: "1-866-234-5678",
      hours: "Mon - Fri, 8:30 AM - 5:00 PM EST",
      icon: FiUser,
      color: "text-amber-400",
      bgColor: "bg-amber-400/10"
    },
    {
      id: 3,
      title: "Job Seeker Support",
      description: "Need help with your application, profile, or job search?",
      email: "support@servicecarejobline.ca",
      phone: "1-877-345-6789",
      hours: "Mon - Fri, 8:30 AM - 5:00 PM EST",
      icon: FiMessageSquare,
      color: "text-sky-400",
      bgColor: "bg-sky-400/10"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Reach our team for hiring support, job posting assistance, candidate questions, 
            and platform guidance across Canada.
          </motion.p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject <span className="text-amber-500">*</span>
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="employer">Employer Support</option>
                  <option value="jobseeker">Job Seeker Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-3.5 bg-sky-400 text-slate-900 font-semibold rounded-xl shadow-lg shadow-sky-400/30 hover:bg-sky-300 hover:shadow-sky-400/50 transition-all hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <FiSend size={18} />
                  Submit Inquiry
                </div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex-1 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-sky-400/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 rounded-xl ${info.bgColor} p-3 ${info.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {info.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <FiMail className="text-sky-400 flex-shrink-0" size={16} />
                          <a href={`mailto:${info.email}`} className="text-sky-400 hover:underline">
                            {info.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FiPhone className="text-sky-400 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{info.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FiClock className="text-sky-400 flex-shrink-0" size={16} />
                          <span className="text-gray-500">{info.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;