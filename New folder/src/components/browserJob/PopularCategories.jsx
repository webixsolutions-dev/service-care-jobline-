import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {
    FiBriefcase,
    FiUsers,
    FiUserCheck,
    FiUserPlus,
    FiDatabase,
    FiHeadphones,
    FiDollarSign,
    FiUsers as FiUsersIcon,
    FiArrowRight,
    FiTrendingUp,
    FiStar,
    FiGrid,
    FiList,
    FiSearch,
    FiMapPin,
    FiClock
} from "react-icons/fi";

const PopularCategories = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Categories data
    const categories = [
        {
            id: 1,
            title: "Administrative Assistant",
            jobs: 3245,
            icon: <FiBriefcase className="w-7 h-7" />,
            color: "from-blue-500 to-cyan-400",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
            description: "Manage office operations and support teams",
            growth: "+12%",
            popular: true
        },
        {
            id: 2,
            title: "Receptionist",
            jobs: 1892,
            icon: <FiUsers className="w-7 h-7" />,
            color: "from-purple-500 to-pink-400",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/30",
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-400",
            description: "Front desk management and visitor coordination",
            growth: "+8%",
            popular: false
        },
        {
            id: 3,
            title: "Executive Assistant",
            jobs: 1567,
            icon: <FiUserCheck className="w-7 h-7" />,
            color: "from-amber-400 to-orange-500",
            bgColor: "bg-amber-500/10",
            borderColor: "border-amber-500/30",
            iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
            description: "High-level support for executives",
            growth: "+15%",
            popular: true
        },
        {
            id: 4,
            title: "Office Manager",
            jobs: 1234,
            icon: <FiUserPlus className="w-7 h-7" />,
            color: "from-green-400 to-emerald-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
            description: "Oversee daily office operations and staff",
            growth: "+10%",
            popular: false
        },
        {
            id: 5,
            title: "Data Entry",
            jobs: 2345,
            icon: <FiDatabase className="w-7 h-7" />,
            color: "from-rose-400 to-red-500",
            bgColor: "bg-rose-500/10",
            borderColor: "border-rose-500/30",
            iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
            description: "Accurate data management and entry",
            growth: "+18%",
            popular: true
        },
        {
            id: 6,
            title: "Customer Service",
            jobs: 2789,
            icon: <FiHeadphones className="w-7 h-7" />,
            color: "from-indigo-400 to-purple-500",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/30",
            iconBg: "bg-gradient-to-br from-indigo-400 to-purple-500",
            description: "Customer support and client relations",
            growth: "+20%",
            popular: true
        },
        {
            id: 7,
            title: "Payroll Clerk",
            jobs: 987,
            icon: <FiDollarSign className="w-7 h-7" />,
            color: "from-teal-400 to-cyan-500",
            bgColor: "bg-teal-500/10",
            borderColor: "border-teal-500/30",
            iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
            description: "Payroll processing and financial records",
            growth: "+6%",
            popular: false
        },
        {
            id: 8,
            title: "HR Support",
            jobs: 1114,
            icon: <FiUsersIcon className="w-7 h-7" />,
            color: "from-pink-400 to-rose-500",
            bgColor: "bg-pink-500/10",
            borderColor: "border-pink-500/30",
            iconBg: "bg-gradient-to-br from-pink-400 to-rose-500",
            description: "Human resources assistance and recruitment",
            growth: "+14%",
            popular: true
        }
    ];

    // Calculate total jobs
    const totalJobs = categories.reduce((sum, cat) => sum + cat.jobs, 0);
    const popularCount = categories.filter(cat => cat.popular).length;

    // Container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const floatingVariants = {
        initial: { y: 0, opacity: 0.05 },
        animate: {
            y: [-10, 10, -10],
            opacity: 0.05,
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const numberVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.5
            }
        }
    };

    // Format number
    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-sky-400 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-amber-400 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-purple-400 blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Icons */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    variants={floatingVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: i * 0.5 }}
                    className="absolute text-sky-400/5 select-none"
                    style={{
                        top: `${15 + i * 20}%`,
                        left: `${5 + i * 25}%`,
                    }}
                >
                    <FiBriefcase className="w-16 h-16" />
                </motion.div>
            ))}

            <div className="container mx-auto px-4 relative">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-12"
                >
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
                        className="inline-block mb-4"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-400/20 to-amber-400/20 border border-sky-400/30 text-sky-300 text-sm font-medium">
                            <FiGrid className="w-4 h-4" />
                            Categories
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Popular Office
                        <span className="text-amber-400 block sm:inline"> Job Categories</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-300"
                    >
                        Explore the most in-demand office and administrative jobs across Canada.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-6 mt-6"
                    >
                        <motion.div
                            variants={numberVariants}
                            className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                        >
                            <FiBriefcase className="text-amber-400" />
                            <span className="text-white font-bold">{formatNumber(totalJobs)}</span>
                            <span className="text-gray-400 text-sm">Total Jobs</span>
                        </motion.div>
                        <motion.div
                            variants={numberVariants}
                            className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700/50"
                        >
                            <FiTrendingUp className="text-sky-400" />
                            <span className="text-white font-bold">{popularCount}</span>
                            <span className="text-gray-400 text-sm">Popular Categories</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* View Toggle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex justify-end mb-6"
                >
                    <div className="flex gap-1 bg-slate-800/30 backdrop-blur-sm rounded-xl p-1 border border-slate-700/50">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'grid'
                                    ? 'bg-sky-400 text-slate-900'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <FiGrid className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all ${viewMode === 'list'
                                    ? 'bg-sky-400 text-slate-900'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <FiList className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Categories Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className={`grid ${viewMode === 'grid'
                            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                            : 'grid-cols-1'
                        } gap-6`}
                >
                    <AnimatePresence>
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                variants={viewMode === 'grid' ? cardVariants : itemVariants}
                                layout
                                className="group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={viewMode === 'grid' ? {
                                    y: -8,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                } : {}}
                            >
                                <div className={`relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border ${category.borderColor} 
                  hover:bg-slate-800/60 transition-all duration-500 
                  ${viewMode === 'grid' ? 'p-6 h-full' : 'p-4 flex items-center gap-6'} 
                  ${hoveredIndex === index ? 'shadow-2xl shadow-sky-400/10' : ''}`}
                                >
                                    {/* Popular Badge */}
                                    {category.popular && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15,
                                                delay: index * 0.05 + 0.5
                                            }}
                                            className="absolute -top-2 -right-2"
                                        >
                                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-xs font-bold rounded-full shadow-lg">
                                                <FiStar className="w-3 h-3" />
                                                Popular
                                            </span>
                                        </motion.div>
                                    )}

                                    {/* Icon */}
                                    <motion.div
                                        className={`${viewMode === 'grid' ? 'mb-4' : 'flex-shrink-0'} relative`}
                                        whileHover={viewMode === 'grid' ? {
                                            rotate: [0, -10, 10, 0],
                                            scale: 1.1,
                                            transition: { duration: 0.5 }
                                        } : {}}
                                    >
                                        <div className={`w-14 h-14 rounded-xl ${category.iconBg} flex items-center justify-center text-white shadow-lg`}>
                                            {category.icon}
                                        </div>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                className="absolute inset-0 rounded-xl"
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                    opacity: [1, 0, 1]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                                style={{
                                                    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)'
                                                }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Content */}
                                    <div className={`flex-1 ${viewMode === 'grid' ? '' : 'flex items-center justify-between'}`}>
                                        <div>
                                            <motion.h3
                                                className={`font-bold text-white transition-colors duration-300
                          ${hoveredIndex === index ? 'text-amber-400' : ''}
                          ${viewMode === 'grid' ? 'text-lg mb-1' : 'text-xl'}`}
                                            >
                                                {category.title}
                                            </motion.h3>

                                            {viewMode === 'grid' && (
                                                <p className="text-sm text-gray-400 mb-2">
                                                    {category.description}
                                                </p>
                                            )}

                                            <div className="flex items-center gap-3">
                                                <span className="text-amber-400 font-bold text-lg">
                                                    {formatNumber(category.jobs)}
                                                </span>
                                                <span className="text-gray-400 text-sm">jobs</span>
                                                {viewMode === 'grid' && (
                                                    <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                                                        {category.growth}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {viewMode === 'list' && (
                                            <motion.button
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 font-semibold text-sm shadow-lg shadow-sky-400/20 hover:shadow-sky-400/40 transition-all"
                                            >
                                                Browse Jobs
                                                <FiArrowRight className="w-4 h-4" />
                                            </motion.button>
                                        )}
                                    </div>

                                    {/* Progress Bar */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl`}
                                        initial={{ scaleX: 0, opacity: 0 }}
                                        animate={hoveredIndex === index ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                        style={{ originX: 0 }}
                                    />

                                    {viewMode === 'grid' && (
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="mt-3 flex items-center gap-1 text-sky-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            View Jobs
                                            <FiArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >



                </motion.div>
            </div>
        </section>
    )
}

export default PopularCategories