// src/components/PostJob/WhyPostWithUs.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiShield, FiUsers, FiEye, FiHeadphones, FiLock } from "react-icons/fi";

const WhyPostWithUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    jobCategory: '',
    location: '',
    employmentType: '',
    salaryRange: '',
    contactEmail: '',
    jobSummary: ''
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

  const features = [
    {
      id: 1,
      icon: FiShield,
      title: "Trusted by employers",
      description: "ServiceCare Jobline is Canada's trusted platform for hospitality and healthcare hiring.",
    },
    {
      id: 2,
      icon: FiUsers,
      title: "Target hospitality and healthcare talent",
      description: "Reach qualified candidates actively seeking roles in your industry.",
    },
    {
      id: 3,
      icon: FiEye,
      title: "Increase your visibility",
      description: "Stand out with your job posting and attract the right candidates faster.",
    },
    {
      id: 4,
      icon: FiHeadphones,
      title: "Simple employer support",
      description: "Our team is here to help you every step of the way.",
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why post with us?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Post your job with confidence and reach the right talent
          </p>
        </div>

        {/* Form and Features Grid - Flex Row */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-start">
          {/* Form - Post a Job */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex-1 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Post a Job</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company Name <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Job Category */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Category <span className="text-amber-500">*</span>
                </label>
                <select
                  name="jobCategory"
                  value={formData.jobCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="support">Support Worker</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter city, province or postal code"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Employment Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Employment Type <span className="text-amber-500">*</span>
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                >
                  <option value="">Select employment type</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                  <option value="internship">Internship</option>
                </select>
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Salary Range (CAD)
                </label>
                <select
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                >
                  <option value="">Select salary range</option>
                  <option value="30k-40k">$30,000 - $40,000</option>
                  <option value="40k-50k">$40,000 - $50,000</option>
                  <option value="50k-60k">$50,000 - $60,000</option>
                  <option value="60k-70k">$60,000 - $70,000</option>
                  <option value="70k-80k">$70,000 - $80,000</option>
                  <option value="80k+">$80,000+</option>
                </select>
              </div>

              {/* Contact Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Email <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  placeholder="Enter contact email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-gray-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-colors"
                  required
                />
              </div>

              {/* Job Summary */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Summary <span className="text-amber-500">*</span>
                </label>
                <textarea
                  name="jobSummary"
                  value={formData.jobSummary}
                  onChange={handleChange}
                  placeholder="Write a short summary of the role, key responsibilities, and qualifications..."
                  rows="3"
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
                Continue / Submit Job Details →
              </motion.button>
            </form>

            {/* Security Note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <FiLock size={14} />
              <span>Your job details are secure and will only be used to post your job.</span>
            </div>
          </motion.div>

          {/* Features Grid - Sticky */}
          <div className="flex-1 lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-sky-400/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-lg bg-sky-400/10 p-3 text-sky-400">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyPostWithUs;