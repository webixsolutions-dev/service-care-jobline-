import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, 
  FiMapPin, 
  FiBriefcase, 
  FiClock, 
  FiDollarSign,
  FiFilter,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiHeart,
  FiShare2,
  FiBookmark,
  FiUser,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiServer,
  FiTool,
  FiArchive,
  FiBox,
  FiGrid,
  FiHardDrive,
  FiDatabase
} from "react-icons/fi";

const FilterJobsSection = () => {
  const [filters, setFilters] = useState({
    jobType: [],
    workMode: [],
    experienceLevel: [],
    province: '',
    category: '',
    salaryMin: '',
    salaryMax: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [showFilters, setShowFilters] = useState(true);
  const [savedJobs, setSavedJobs] = useState([]);
  const [expandedSections, setExpandedSections] = useState({
    jobType: true,
    workMode: true,
    experienceLevel: true,
    province: true,
    salaryRange: true,
    category: true
  });

  // Filter options
  const filterOptions = {
    jobType: [
      { id: 'full-time', label: 'Full-time', count: 6234 },
      { id: 'part-time', label: 'Part-time', count: 1842 },
      { id: 'contract', label: 'Contract', count: 1256 },
      { id: 'temporary', label: 'Temporary', count: 668 },
      { id: 'internship', label: 'Internship', count: 312 }
    ],
    workMode: [
      { id: 'on-site', label: 'On-site', count: 6078 },
      { id: 'hybrid', label: 'Hybrid', count: 1876 },
      { id: 'remote', label: 'Remote', count: 1102 }
    ],
    experienceLevel: [
      { id: 'entry', label: 'Entry Level', count: 2356 },
      { id: '1-3', label: '1-3 Years', count: 3412 },
      { id: '3-5', label: '3-5 Years', count: 2648 },
      { id: '5+', label: '5+ Years', count: 1596 }
    ],
    provinces: [
      'Select province', 'Ontario', 'British Columbia', 'Quebec', 'Alberta', 
      'Manitoba', 'Nova Scotia', 'Saskatchewan', 'New Brunswick', 
      'Newfoundland and Labrador', 'Prince Edward Island'
    ],
    categories: [
      'Select category', 'Administrative', 'Office Management', 'Customer Service', 
      'Data Entry', 'Executive Assistant', 'Receptionist', 'HR Support'
    ]
  };

  // Job listings data
  const allJobs = [
    {
      id: 1,
      title: 'Administrative Assistant',
      company: 'Maple Ridge Solutions',
      location: 'Toronto, ON',
      type: 'Full-time',
      mode: 'On-site',
      salaryMin: 45000,
      salaryMax: 55000,
      description: 'Provide administrative support to ensure efficient daily office operations. Manage schedules, correspondence, and documentation with professionalism and attention to detail.',
      category: 'Administrative',
      experience: '1-3 Years',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Office Coordinator',
      company: 'Summit Business Group',
      location: 'Calgary, AB',
      type: 'Full-time',
      mode: 'Hybrid',
      salaryMin: 50000,
      salaryMax: 60000,
      description: 'Coordinate office activities, manage calendars, and support team members. Ensure efficient workflows and a well-organized office environment.',
      category: 'Office Management',
      experience: '3-5 Years',
      posted: '3 days ago'
    },
    {
      id: 3,
      title: 'Receptionist',
      company: 'Greenfield Offices',
      location: 'Vancouver, BC',
      type: 'Full-time',
      mode: 'On-site',
      salaryMin: 40000,
      salaryMax: 48000,
      description: 'Greet visitors, answer calls, and provide general administrative support. Maintain a welcoming front desk and ensure smooth office operations.',
      category: 'Receptionist',
      experience: 'Entry Level',
      posted: '1 day ago'
    },
    {
      id: 4,
      title: 'Executive Assistant',
      company: 'NorthPoint Consulting',
      location: 'Ottawa, ON',
      type: 'Full-time',
      mode: 'Hybrid',
      salaryMin: 60000,
      salaryMax: 75000,
      description: 'Provide high-level administrative support to executives. Manage schedules, travel arrangements, and confidential documents with discretion.',
      category: 'Executive Assistant',
      experience: '5+ Years',
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Data Entry Clerk',
      company: 'ProData Services',
      location: 'Montreal, QC',
      type: 'Part-time',
      mode: 'On-site',
      salaryMin: 38000,
      salaryMax: 45000,
      description: 'Accurately input and maintain data in databases and systems. Ensure data quality and support reporting requirements.',
      category: 'Data Entry',
      experience: 'Entry Level',
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Customer Service Representative',
      company: 'Bright Customer Care',
      location: 'Halifax, NS',
      type: 'Full-time',
      mode: 'Hybrid',
      salaryMin: 42000,
      salaryMax: 52000,
      description: 'Assist customers via phone, email, and chat. Resolve inquiries and provide excellent service to ensure customer satisfaction.',
      category: 'Customer Service',
      experience: '1-3 Years',
      posted: '4 days ago'
    },
    {
      id: 7,
      title: 'HR Assistant',
      company: 'People First HR',
      location: 'Edmonton, AB',
      type: 'Full-time',
      mode: 'On-site',
      salaryMin: 45000,
      salaryMax: 55000,
      description: 'Support HR functions including recruitment, onboarding, and employee records management. Help foster a positive workplace.',
      category: 'HR Support',
      experience: '1-3 Years',
      posted: '6 days ago'
    },
    {
      id: 8,
      title: 'Office Manager',
      company: 'Alpine Corporate Services',
      location: 'Winnipeg, MB',
      type: 'Full-time',
      mode: 'On-site',
      salaryMin: 65000,
      salaryMax: 80000,
      description: 'Oversee daily office operations, manage budgets, and lead administrative staff. Ensure efficiency and a productive work environment.',
      category: 'Office Management',
      experience: '5+ Years',
      posted: '2 weeks ago'
    }
  ];

  // Toggle section
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      if (type === 'jobType' || type === 'workMode' || type === 'experienceLevel') {
        const current = prev[type] || [];
        return {
          ...prev,
          [type]: current.includes(value) 
            ? current.filter(v => v !== value)
            : [...current, value]
        };
      }
      return {
        ...prev,
        [type]: value
      };
    });
  };

  // Toggle save job
  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) 
        ? prev.filter(id => id !== jobId)
        : [...prev, jobId]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      jobType: [],
      workMode: [],
      experienceLevel: [],
      province: '',
      category: '',
      salaryMin: '',
      salaryMax: ''
    });
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Filter jobs
  const filteredJobs = allJobs.filter(job => {
    // Search filter
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !job.company.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Job type filter
    if (filters.jobType.length > 0 && !filters.jobType.some(type => 
      job.type.toLowerCase().includes(type.replace('-', ' '))
    )) {
      return false;
    }

    // Work mode filter
    if (filters.workMode.length > 0 && !filters.workMode.some(mode => 
      job.mode.toLowerCase().includes(mode.replace('-', ' '))
    )) {
      return false;
    }

    // Experience level filter
    if (filters.experienceLevel.length > 0 && !filters.experienceLevel.some(level => {
      if (level === 'entry') return job.experience === 'Entry Level';
      if (level === '1-3') return job.experience === '1-3 Years';
      if (level === '3-5') return job.experience === '3-5 Years';
      if (level === '5+') return job.experience === '5+ Years';
      return false;
    })) {
      return false;
    }

    // Province filter
    if (filters.province && filters.province !== 'Select province' && 
        !job.location.includes(filters.province)) {
      return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'Select category' && 
        job.category !== filters.category) {
      return false;
    }

    // Salary filter
    if (filters.salaryMin && job.salaryMax < parseInt(filters.salaryMin)) {
      return false;
    }
    if (filters.salaryMax && job.salaryMin > parseInt(filters.salaryMax)) {
      return false;
    }

    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

  // Format salary
  const formatSalary = (min, max) => {
    return `$${min.toLocaleString()} - $${max.toLocaleString()} / year`;
  };

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-sky-400 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
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
                className="inline-block mb-2"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 to-amber-400/20 border border-sky-400/30 text-sky-300 text-sm font-medium">
                  <FiFilter className="w-4 h-4" />
                  Filter Jobs
                </span>
              </motion.div>
              <h2 className="text-3xl font-bold text-white">
                Find Your Perfect <span className="text-amber-400">Office Job</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-400">
                {filteredJobs.length} jobs found
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-700/50 text-white hover:bg-slate-600/50 transition-all"
              >
                <FiFilter />
                Filters
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Sticky with full page scroll */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="sticky top-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
              {/* Search - No scroll */}
              <div className="relative mb-6">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-700/50 text-white placeholder-gray-400 rounded-xl pl-10 pr-4 py-2.5 border border-slate-600/50 focus:border-sky-400 focus:outline-none transition-all"
                />
              </div>

              {/* Filter Sections - No scroll on inputs */}
              <div className="space-y-4">
                {Object.entries(filterOptions).map(([key, options]) => {
                  if (key === 'provinces' || key === 'categories') {
                    const isProvince = key === 'provinces';
                    const label = isProvince ? 'Province' : 'Category';
                    const value = isProvince ? filters.province : filters.category;
                    const sectionKey = isProvince ? 'province' : 'category';
                    
                    return (
                      <motion.div
                        key={key}
                        className="border-b border-slate-700/50 pb-4 last:border-0"
                        variants={itemVariants}
                      >
                        <button
                          onClick={() => toggleSection(sectionKey)}
                          className="flex items-center justify-between w-full text-white font-medium mb-2 hover:text-amber-400 transition-colors"
                        >
                          <span>{label}</span>
                          {expandedSections[sectionKey] ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        <AnimatePresence>
                          {expandedSections[sectionKey] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <select
                                value={value}
                                onChange={(e) => handleFilterChange(sectionKey, e.target.value)}
                                className="w-full bg-slate-700/50 text-white rounded-xl px-4 py-2.5 border border-slate-600/50 focus:border-sky-400 focus:outline-none transition-all"
                              >
                                {options.map((option, idx) => (
                                  <option key={idx} value={option} className="bg-slate-800">
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  // For jobType, workMode, experienceLevel
                  const sectionKey = key;
                  const label = key === 'jobType' ? 'Job Type' : 
                              key === 'workMode' ? 'Work Mode' : 'Experience Level';
                  const selected = filters[key] || [];

                  return (
                    <motion.div
                      key={key}
                      className="border-b border-slate-700/50 pb-4 last:border-0"
                      variants={itemVariants}
                    >
                      <button
                        onClick={() => toggleSection(sectionKey)}
                        className="flex items-center justify-between w-full text-white font-medium mb-2 hover:text-amber-400 transition-colors"
                      >
                        <span>{label}</span>
                        {expandedSections[sectionKey] ? <FiChevronUp /> : <FiChevronDown />}
                      </button>
                      <AnimatePresence>
                        {expandedSections[sectionKey] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {options.map((option) => (
                              <motion.label
                                key={option.id}
                                whileHover={{ x: 5 }}
                                className="flex items-center justify-between py-1.5 cursor-pointer group"
                              >
                                <div className="flex items-center gap-2">
                                  <input
                                    type="checkbox"
                                    checked={selected.includes(option.id)}
                                    onChange={() => handleFilterChange(key, option.id)}
                                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-sky-400 focus:ring-sky-400 focus:ring-offset-0"
                                  />
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    {option.label}
                                  </span>
                                </div>
                                <span className="text-xs text-gray-500">({option.count})</span>
                              </motion.label>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Salary Range */}
                <motion.div
                  className="border-b border-slate-700/50 pb-4 last:border-0"
                  variants={itemVariants}
                >
                  <button
                    onClick={() => toggleSection('salaryRange')}
                    className="flex items-center justify-between w-full text-white font-medium mb-2 hover:text-amber-400 transition-colors"
                  >
                    <span>Salary Range</span>
                    {expandedSections.salaryRange ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  <AnimatePresence>
                    {expandedSections.salaryRange && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex-1">
                            <label className="text-xs text-gray-400">Min</label>
                            <input
                              type="number"
                              placeholder="Min"
                              value={filters.salaryMin}
                              onChange={(e) => handleFilterChange('salaryMin', e.target.value)}
                              className="w-full bg-slate-700/50 text-white rounded-xl px-3 py-2 border border-slate-600/50 focus:border-sky-400 focus:outline-none transition-all text-sm"
                            />
                          </div>
                          <span className="text-gray-400">to</span>
                          <div className="flex-1">
                            <label className="text-xs text-gray-400">Max</label>
                            <input
                              type="number"
                              placeholder="Max"
                              value={filters.salaryMax}
                              onChange={(e) => handleFilterChange('salaryMax', e.target.value)}
                              className="w-full bg-slate-700/50 text-white rounded-xl px-3 py-2 border border-slate-600/50 focus:border-sky-400 focus:outline-none transition-all text-sm"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-3 mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetFilters}
                  className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all"
                >
                  Show Results ({filteredJobs.length})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetFilters}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-600/50 text-gray-300 hover:text-white hover:border-slate-400 transition-all"
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="flex-1">
            {/* Results Header - Sticky at top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center justify-between gap-4 mb-6 sticky top-0 bg-slate-900/80 backdrop-blur-sm py-3 z-10 -mt-3 px-2 rounded-xl"
            >
              <div className="text-gray-300">
                Showing <span className="text-white font-semibold">{startIndex + 1}</span> to{' '}
                <span className="text-white font-semibold">
                  {Math.min(startIndex + itemsPerPage, filteredJobs.length)}
                </span>{' '}
                of <span className="text-white font-semibold">{filteredJobs.length}</span> jobs
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">Show:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-slate-700/50 text-white rounded-xl px-3 py-1.5 border border-slate-600/50 focus:border-sky-400 focus:outline-none transition-all text-sm"
                >
                  <option value={12}>12 per page</option>
                  <option value={24}>24 per page</option>
                  <option value={48}>48 per page</option>
                </select>
              </div>
            </motion.div>

            {/* Job Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <AnimatePresence>
                {currentJobs.length > 0 ? (
                  currentJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={cardVariants}
                      layout
                      className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-sky-400/30 transition-all p-6 hover:shadow-xl hover:shadow-sky-400/5"
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        {/* Job Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <motion.h3 
                                whileHover={{ color: '#fbbf24' }}
                                className="text-xl font-bold text-white mb-1 cursor-pointer"
                              >
                                {job.title}
                              </motion.h3>
                              <p className="text-amber-400 font-medium mb-2">
                                {job.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => toggleSaveJob(job.id)}
                                className={`p-2 rounded-xl transition-all ${
                                  savedJobs.includes(job.id)
                                    ? 'bg-amber-400/20 text-amber-400'
                                    : 'bg-slate-700/50 text-gray-400 hover:text-white'
                                }`}
                              >
                                <FiBookmark className="w-5 h-5" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 rounded-xl bg-slate-700/50 text-gray-400 hover:text-white transition-all"
                              >
                                <FiShare2 className="w-5 h-5" />
                              </motion.button>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 text-xs">
                              <FiMapPin className="w-3 h-3" />
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300 text-xs">
                              <FiBriefcase className="w-3 h-3" />
                              {job.type}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-300 text-xs">
                              <FiGlobe className="w-3 h-3" />
                              {job.mode}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs">
                              <FiDollarSign className="w-3 h-3" />
                              {formatSalary(job.salaryMin, job.salaryMax)}
                            </span>
                          </div>

                          <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{job.experience}</span>
                            <span>•</span>
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex md:flex-col gap-2 md:self-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold text-sm shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 transition-all"
                          >
                            Apply Now
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-xl border border-slate-600/50 text-gray-300 hover:text-white hover:border-slate-400 transition-all text-sm"
                          >
                            Save Job
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold text-white mb-2">No jobs found</h3>
                    <p className="text-gray-400">Try adjusting your filters or search terms</p>
                    <button
                      onClick={resetFilters}
                      className="mt-4 px-6 py-2 bg-sky-400 text-slate-900 rounded-xl hover:bg-sky-300 transition-all"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center justify-center gap-2 mt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-xl border transition-all ${
                    currentPage === 1 
                      ? 'border-slate-700/50 text-gray-600 cursor-not-allowed'
                      : 'border-slate-600/50 text-gray-300 hover:border-sky-400/50 hover:text-white'
                  }`}
                >
                  <FiChevronLeft />
                </motion.button>

                {[...Array(Math.min(totalPages, 7))].map((_, i) => {
                  let pageNum;
                  if (totalPages <= 7) {
                    pageNum = i + 1;
                  } else if (currentPage <= 4) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i;
                  } else {
                    pageNum = currentPage - 3 + i;
                  }

                  if (pageNum >= 1 && pageNum <= totalPages) {
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-10 h-10 rounded-xl transition-all ${
                          pageNum === currentPage
                            ? 'bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold shadow-lg shadow-sky-400/30'
                            : 'border border-slate-600/50 text-gray-300 hover:border-sky-400/50 hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </motion.button>
                    );
                  }
                  return null;
                })}

                {totalPages > 7 && currentPage < totalPages - 3 && (
                  <span className="text-gray-500">...</span>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-xl border transition-all ${
                    currentPage === totalPages
                      ? 'border-slate-700/50 text-gray-600 cursor-not-allowed'
                      : 'border-slate-600/50 text-gray-300 hover:border-sky-400/50 hover:text-white'
                  }`}
                >
                  <FiChevronRight />
                </motion.button>
              </motion.div>
            )}

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-8 text-sm text-gray-400"
            >
              Browse office and administrative jobs across Canada. New opportunities added daily.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterJobsSection