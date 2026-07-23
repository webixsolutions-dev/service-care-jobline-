import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaAccessibleIcon, 
  FaStar, 
  FaUsers,
  FaArrowRight 
} from 'react-icons/fa';

const OurMission = () => {
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
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const values = [
    {
      icon: FaShieldAlt,
      title: "Trust",
      description: "We build trust through transparency, verified employers, and a safe job search experience.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaAccessibleIcon,
      title: "Accessibility",
      description: "We make opportunities accessible to everyone, anywhere in Canada.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FaStar,
      title: "Quality Opportunities",
      description: "We connect you with quality jobs and top talent for long-term success.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: FaUsers,
      title: "Community Impact",
      description: "We support stronger communities by connecting people to careers that matter.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16"
        >
          <motion.div 
            variants={fadeInLeft}
            className="flex-1 w-full"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-sm font-semibold text-amber-600 uppercase tracking-wider mb-2"
            >
              Our Mission & Vision
            </motion.h2>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Connecting <span className="text-amber-400">Talent</span> with{' '}
              <span className="text-amber-400">Opportunity</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              At ServiceCare Jobline, our mission is to connect talented professionals 
              with meaningful opportunities across healthcare, hospitality, caregiving, 
              hotels, restaurants, and other service sectors across Canada.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeInRight}
            className="flex-1 w-full"
          >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 italic">
                "To be Canada's most trusted platform for service careers—where 
                employers find the right people and professionals build fulfilling, 
                long-term careers."
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <motion.div 
                  variants={iconVariants}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-2xl text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>

                <motion.div 
                  className="mt-4 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div 
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <FaArrowRight className="text-blue-600" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-blue-700">
              Join thousands of professionals building their careers with us
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaArrowRight className="text-blue-600" />
            </motion.span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-amber-400 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;