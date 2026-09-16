import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaMapMarkerAlt,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaSearch
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

/* ---------------------------------- */
/* Section 1: Stats                    */
/* ---------------------------------- */
const StatsSection = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    {
      icon: FaBriefcase,
      target: 8750,
      suffix: '+',
      label: 'Active Job Listings',
      description: 'Fresh opportunities updated daily across hospitality & healthcare.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FaBuilding,
      target: 2300,
      suffix: '+',
      label: 'Employers Served',
      description: 'From local businesses to national brands trust our platform.',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: FaUsers,
      target: 156000,
      suffix: '+',
      label: 'Candidate Applications',
      description: 'Skilled professionals connecting with the right opportunities.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: FaMapMarkerAlt,
      target: 0,
      suffix: '',
      label: 'Nationwide Reach',
      description: 'Jobs in every province and territory, coast to coast to coast.',
      color: 'from-amber-500 to-amber-600',
      isText: true,
      text: 'All Across Canada'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  const animateNumbers = () => {
    const targets = [8750, 2300, 156000];
    const duration = 2000;
    const interval = 40;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const newCounts = targets.map((target) => Math.min(Math.floor(target * progress), target));
      setCounts(newCounts);
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div ref={sectionRef} className="mb-12 md:mb-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mb-10 md:mb-16"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <motion.div variants={fadeInLeft} className="w-full lg:w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Why ServiceCare
              <br />
              Jobline <span className="text-cyan-500">Matters</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInRight} className="w-full lg:w-1/3">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              We connect people with purpose to the employers who keep Canada moving.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02, transition: { type: 'spring', stiffness: 300 } }}
              className="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 group relative overflow-hidden border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Icon className="text-xl text-white" />
              </div>

              {stat.isText ? (
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">{stat.text}</h3>
              ) : (
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  {formatNumber(counts[index] || 0)}
                  {stat.suffix}
                </h3>
              )}

              <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">{stat.label}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>

              <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

/* ---------------------------------- */
/* Section 2: Journey timeline         */
/* ---------------------------------- */
const JourneySection = () => {
  const milestones = [
    {
      icon: FaRocket,
      year: '2021',
      accent: 'text-cyan-400',
      ring: 'border-cyan-500/60',
      title: 'Launch',
      description:
        'ServiceCare Jobline was founded with a mission to connect care and service professionals with meaningful work.'
    },
    {
      icon: FaChartLine,
      year: '2022',
      accent: 'text-amber-400',
      ring: 'border-amber-500/60',
      title: 'Employer Growth',
      description:
        'Hundreds of employers joined, finding reliable talent faster and building stronger teams.'
    },
    {
      icon: FaUsers,
      year: '2023',
      accent: 'text-cyan-400',
      ring: 'border-cyan-500/60',
      title: 'Candidate Network',
      description:
        'Our candidate community grew across Canada, empowering more people to find rewarding careers.'
    },
    {
      icon: FaMapMarkerAlt,
      year: '2024+',
      accent: 'text-amber-400',
      ring: 'border-amber-500/60',
      title: 'Nationwide Expansion',
      description:
        'Expanding our reach and features to serve even more communities from coast to coast.'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="mb-12 md:mb-16 bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 rounded-3xl p-6 sm:p-8 md:p-10"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div variants={fadeInLeft} className="w-full lg:w-1/4 shrink-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Our Journey,
            <br />
            <span className="text-cyan-500">Our Mission</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Building stronger communities through better connections.
          </p>
        </motion.div>

        <div className="w-full lg:w-3/4">
          {/* Desktop / tablet: horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-6 left-6 right-6 h-px bg-slate-600/50" />
            <div className="grid grid-cols-4 gap-6">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative">
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full bg-slate-800 border-2 ${m.ring} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`text-lg ${m.accent}`} />
                    </div>
                    <span className={`block text-sm font-semibold mb-1 ${m.accent}`}>{m.year}</span>
                    <h4 className="text-white font-bold mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{m.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative pl-6">
            <div className="absolute top-2 bottom-2 left-[23px] w-px bg-slate-600/50" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative pl-8">
                    <div
                      className={`absolute -left-0.5 top-0 w-11 h-11 rounded-full bg-slate-800 border-2 ${m.ring} flex items-center justify-center z-10`}
                    >
                      <Icon className={`text-base ${m.accent}`} />
                    </div>
                    <span className={`block text-sm font-semibold mb-1 ${m.accent}`}>{m.year}</span>
                    <h4 className="text-white font-bold mb-2">{m.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{m.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------------------------- */
/* Section 3: Hospitality & Healthcare */
/* ---------------------------------- */
const HospitalitySection = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Trusted by Employers',
      description: 'We verify employers and job postings to ensure quality, safety, and peace of mind for every job seeker.'
    },
    {
      icon: FaSearch,
      title: 'Simple for Job Seekers',
      description: 'Find jobs that fit your skills, schedule, and goals with an easy and intuitive search experience.'
    },
    {
      icon: FaBriefcase,
      title: 'Easy for Employers',
      description: 'Post jobs, screen candidates, and hire faster with tools designed for busy teams.'
    }
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center"
    >
      <motion.div variants={fadeInLeft} className="w-full">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
          alt="Hospitality and healthcare team collaborating"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-2xl border border-slate-600/30"
        />
      </motion.div>

      <motion.div variants={fadeInRight} className="w-full">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
          Built for <span className="text-cyan-500">Hospitality</span> and{' '}
          <span className="text-cyan-500">Healthcare</span> Hiring
        </h3>

        <div className="flex flex-col gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center">
                  <Icon className="text-cyan-400 text-lg" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{f.title}</h4>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------------------------------- */
/* Main export                         */
/* ---------------------------------- */
const WhyServiceCare = () => {
  return (
    <section className="bg-slate-800 min-h-screen py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <StatsSection />
        <JourneySection />
        <HospitalitySection />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-700/30 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-600/30">
            <span className="text-sm text-gray-400">Trusted by employers and professionals across Canada</span>
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyServiceCare;
