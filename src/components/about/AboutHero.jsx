import React from 'react'
import { motion } from "framer-motion";
import { FiUsers, FiClock, FiMapPin } from "react-icons/fi";
import CardData from "../../data/public/cardData";
import FeaturedCard from "../common/FeaturedCard";
const AboutHero = () => {
    const backgroundImageLink = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80";

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
                            className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl lg:text-5xl"
                        >
                            About ServiceCare
                            <span className="block text-amber-400">JobLine</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-8 max-w-3xl text-base text-gray-300 sm:text-lg md:text-xl"
                        >
                            Learn more about our platform. Connecting top talent with employers in hospitality, healthcare, and service industries.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-start justify-start gap-4"
                        >
                            <button className="w-full sm:w-auto rounded-xl px-8 py-3.5  bg-sky-400 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-400/30 transition-all hover:bg-sky-300 hover:shadow-sky-400/50 hover:scale-105">
                                Browser Jobs
                            </button>
                            <button className="w-full sm:w-auto rounded-xl border  bg-amber-400 border-gray-600 px-8 py-3.5 text-sm font-medium  transition-all ">
                                Post a Job 
                            </button>
                        </motion.div>

                        {/* Feature Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
                        >
                            {/* Card 1 */}
                            {CardData.map((items, i) =>
                                <FeaturedCard
                                    key={items.id}
                                    icon={items.icon}
                                    title={items.title}
                                    color={items.color}
                                    iconColor={items.iconColor}
                                    description={items.description}


                                />
                            )
                            }


                        </motion.div>
                    </div>
                </div>
                {/* Adding About us info  */}
                
            </section>


        </>
    )
}

export default AboutHero

