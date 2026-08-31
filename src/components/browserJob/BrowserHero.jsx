import React from 'react'
import { motion } from "framer-motion";
import { FiUsers, FiClock, FiMapPin, FiBriefcase, FiSearch, FiTrendingUp } from "react-icons/fi";
import CardData from "../../data/public/cardData";
import FeaturedCard from "../common/FeaturedCard";

const BrowserHero = () => {
    const backgroundImageLink = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80";

    // Job categories data for the badge
    const jobCategories = [
        "Receptionist",
        "Executive Assistant", 
        "Office Coordinator",
        "Data Entry",
        "Customer Service",
        "Office Manager"
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 md:py-14">
                {/* Background Image */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url(${backgroundImageLink})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />

                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-sky-400 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-400 blur-3xl"></div>
                </div>

                <div className="mx-auto w-full max-w-full relative px-[10%]">
                    <div className="max-w-4xl text-start">

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-6 text-2xl font-bold tracking-tight w-3/4 text-white sm:text-3xl md:text-5xl lg:text-5xl"
                        >
                            Browse Office & Administrative Jobs
                            <span className="block text-amber-400">Across Canada</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-8 max-w-3xl text-base w-3/4 text-gray-300 sm:text-lg md:text-xl"
                        >
                            Find office jobs, administrative jobs, receptionist jobs, executive assistant jobs, 
                            office coordinator jobs, data entry jobs, customer service office roles, and office 
                            manager jobs with top employers hiring across Canada.
                        </motion.p>

                        {/* Job Categories Tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {jobCategories.map((category, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: 0.3 + (index * 0.05) 
                                    }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(251, 191, 36, 0.2)",
                                        borderColor: "#fbbf24"
                                    }}
                                    className="px-3 py-1.5 text-xs rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-300 hover:text-amber-400 transition-all cursor-pointer"
                                >
                                    {category}
                                </motion.span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-start justify-start gap-4"
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto rounded-xl px-8 py-3.5 bg-sky-400 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-400/30 transition-all hover:bg-sky-300 hover:shadow-sky-400/50"
                            >
                                Browse Jobs
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto rounded-xl border bg-amber-400 border-gray-600 px-8 py-3.5 text-sm font-medium text-slate-900 transition-all hover:bg-amber-300"
                            >
                                Post a Job
                            </motion.button>
                        </motion.div>

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            {CardData.map((items, i) =>
                                <FeaturedCard
                                    key={items.id}
                                    icon={items.icon}
                                    title={items.title}
                                    color={items.color}
                                    iconColor={items.iconColor}
                                    description={items.description}
                                />
                            )}
                        </motion.div>

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8 flex items-center gap-6 text-sm text-gray-400"
                        >
                            <span className="flex items-center gap-2">
                                <FiUsers className="w-4 h-4 text-amber-400" />
                                10,000+ Jobs Posted
                            </span>
                            <span className="flex items-center gap-2">
                                <FiMapPin className="w-4 h-4 text-amber-400" />
                                Across Canada
                            </span>
                            <span className="flex items-center gap-2">
                                <FiBriefcase className="w-4 h-4 text-amber-400" />
                                Top Employers
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrowserHero;