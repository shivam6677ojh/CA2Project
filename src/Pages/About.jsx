import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RocketLaunchIcon, SparklesIcon, AcademicCapIcon, ChartBarIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid';
import Header from '../Component/Header';

const About = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-700 via-black to-gray-700">
            <Header />
            {/* Hero Section with Floating Animation */}
            <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 rounded-2xl mb-20 overflow-hidden"
            >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')]"></div>
                <motion.div 
                    className="relative max-w-4xl mx-auto px-4 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400"
                        {...fadeInUp}
                    >
                        About Career Compass
                    </motion.h1>
                    <motion.p 
                        className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
                        {...fadeInUp}
                    >
                        Where <span className="font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Passion</span> Meets{' '}
                        <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Profession</span>
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Mission Section with Parallax Effect */}
            <motion.section 
                className="mb-28 relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-12 shadow-2xl">
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
                        {...fadeInUp}
                    >
                        Our Mission
                    </motion.h2>
                    <motion.div 
                        className="prose prose-lg text-slate-600 dark:text-slate-300 mx-auto max-w-4xl text-center leading-relaxed space-y-6"
                        {...fadeInUp}
                    >
                        <p className="text-xl">
                            We're revolutionizing career guidance through <span className="font-semibold text-indigo-600">AI-powered insights</span> and{' '}
                            <span className="font-semibold text-purple-600">human expertise</span>. Our platform acts as your personal career architect,
                            blending cutting-edge technology with psychological principles to map your ideal professional journey.
                        </p>
                        <motion.div 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <HeartIcon className="w-6 h-6 text-pink-500" />
                            <span className="font-medium text-indigo-700">95% User Satisfaction Rate</span>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Features Grid with Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28 px-4">
                {[
                    { icon: SparklesIcon, title: 'AI-Powered Matching', color: 'from-purple-500 to-indigo-500' },
                    { icon: ChartBarIcon, title: 'Career Analytics', color: 'from-blue-500 to-cyan-500' },
                    { icon: AcademicCapIcon, title: 'Learning Paths', color: 'from-green-500 to-emerald-500' },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`}></div>
                        <feature.icon className={`w-12 h-12 mb-6 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`} />
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">{feature.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">
                            {idx === 0 && 'Deep learning algorithms analyze 50+ career factors'}
                            {idx === 1 && 'Real-time market trends and salary predictions'}
                            {idx === 2 && 'Personalized courses and certification tracking'}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* How It Works Timeline */}
            <motion.section 
                className="my-28 px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent"
                    {...fadeInUp}
                >
                    Your Success Blueprint
                </motion.h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 transform -translate-x-1/2"></div>
                    {[1, 2, 3, 4].map((step) => (
                        <motion.div
                            key={step}
                            className={`mb-16 flex ${step % 2 === 0 ? 'flex-row-reverse' : ''} items-center justify-between`}
                            initial={{ opacity: 0, x: step % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: step * 0.2 }}
                        >
                            <div className="w-5/12 px-4 py-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-3">Step {step}</h3>
                                <p className="text-slate-200 dark:text-white">
                                    {step === 1 && 'Complete our interactive assessment'}
                                    {step === 2 && 'Receive personalized career matches'}
                                    {step === 3 && 'Build your development roadmap'}
                                    {step === 4 && 'Launch your career transformation'}
                                </p>
                            </div>
                            <div className="w-1/12 flex justify-center">
                                <motion.div 
                                    className="flex items-center justify-center w-16 h-16 bg-indigo-900 text-white rounded-full text-2xl font-bold shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {step}
                                </motion.div>
                            </div>
                            <div className="w-5/12"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section 
                className="my-28 bg-gradient-to-br from-indigo-50 to-purple-50 py-20 rounded-2xl px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-4xl md:text-5xl font-bold text-center mb-16 text-indigo-900"
                    {...fadeInUp}
                >
                    Success Stories
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[1, 2, 3].map((_, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <UserGroupIcon className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">Sarah Johnson</h4>
                                    <p className="text-sm text-slate-500">Product Manager @Google</p>
                                </div>
                            </div>
                            <p className="text-slate-600">
                                "Career Compass completely transformed my career trajectory. The personalized roadmap helped me make strategic moves I never would have considered!"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* CTA Section with Gradient Glow */}
            <motion.section 
                className="text-center my-32 relative px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white dark:bg-slate-900 py-16 px-8 rounded-2xl shadow-2xl">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <RocketLaunchIcon className="w-24 h-24 mb-8 mx-auto text-indigo-600" />
                    </motion.div>
                    <motion.h2 
                        className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
                        {...fadeInUp}
                    >
                        Launch Your Dream Career
                    </motion.h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/assessment"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                                rounded-xl text-xl font-semibold transition-transform duration-300 shadow-lg
                                hover:shadow-xl"
                            >
                                Start Free Assessment
                                <SparklesIcon className="w-6 h-6 animate-bounce" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/CareerResource"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white 
                                rounded-xl text-xl font-semibold transition-transform duration-300 shadow-lg
                                hover:shadow-xl"
                            >
                                Start Free Resources
                                <SparklesIcon className="w-6 h-6 animate-bounce" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default About;
