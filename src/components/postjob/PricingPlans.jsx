// src/components/PostJob/PricingPlans.jsx
import React from 'react';
import { motion } from "framer-motion";
import { FiCheck, FiTarget, FiClock, FiUsers, FiPhone, FiMail } from "react-icons/fi";

const PricingPlans = () => {
    const plans = [
        {
            id: 1,
            name: "Basic",
            description: "Great for getting started",
            price: "$129",
            period: "/ 30 days",
            features: [
                "1 Job Posting",
                "30-Day Listing",
                "Standard Visibility",
                "Email Support"
            ],
            color: "border-sky-400/30",
            buttonColor: "bg-sky-400 hover:bg-sky-300",
            popular: false,
            iconColor: "text-sky-400"
        },
        {
            id: 2,
            name: "Featured",
            description: "Boost visibility and reach more qualified candidates",
            price: "$249",
            period: "/ 30 days",
            features: [
                "1 Job Posting",
                "30-Day Listing",
                "Featured Placement",
                "Priority Visibility",
                "Email & Phone Support"
            ],
            color: "border-amber-400/30",
            buttonColor: "bg-amber-400 hover:bg-amber-300",
            popular: true,
            iconColor: "text-amber-400"
        },
        {
            id: 3,
            name: "Premium",
            description: "Maximum exposure for faster hiring",
            price: "$399",
            period: "/ 30 days",
            features: [
                "1 Job Posting",
                "30-Day Listing",
                "Premium Placement",
                "Top Search Priority",
                "Email & Phone Support",
                "Social Media Promotion"
            ],
            color: "border-sky-400/30",
            buttonColor: "bg-sky-400 hover:bg-sky-300",
            popular: false,
            iconColor: "text-sky-400"
        }
    ];

    const benefits = [
        {
            id: 1,
            icon: FiTarget,
            title: "Targeted Reach",
            description: "Get your job in front of qualified candidates across Canada."
        },
        {
            id: 2,
            icon: FiClock,
            title: "Save Time",
            description: "Streamline your hiring process and focus on what matters most."
        },
        {
            id: 3,
            icon: FiUsers,
            title: "Quality Talent",
            description: "Connect with skilled professionals who are ready to make an impact."
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
                        Posting Plans
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Choose the right plan to find top talent in healthcare, hospitality, and the service industry.
                        All plans are designed to help you hire faster and better across Canada.
                    </motion.p>
                </div>

                {/* Benefits Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
                >
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                            <motion.div
                                key={benefit.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-400/10 text-sky-400 mb-4">
                                    <IconComponent size={28} />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                            className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} shadow-sm hover:shadow-xl transition-all hover:-translate-y-1`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-amber-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-slate-900">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500 text-sm">
                                    {plan.period}
                                </span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                        <FiCheck className={`flex-shrink-0 ${plan.iconColor}`} size={18} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className={`w-full py-3 ${plan.buttonColor} text-slate-900 font-semibold rounded-xl transition-all hover:scale-105`}>
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Help Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center py-16 rounded-2xl my-7 border border-slate-700 bg-slate-900"
                >
                    <p className="text-white text-lg mb-2">
                        Need help choosing the right plan?
                    </p>
                    <p className="text-gray-400 text-sm mb-6">
                        Our team is here to help you find the best solution for your hiring needs.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <FiPhone className="text-sky-400" size={18} />
                            <span className="text-white font-medium">1-800-123-4567</span>
                        </div>
                        <span className="text-gray-600">|</span>
                        <div className="flex items-center gap-2">
                            <FiMail className="text-sky-400" size={18} />
                            <span className="text-sky-400 font-semibold">Contact Us</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PricingPlans;