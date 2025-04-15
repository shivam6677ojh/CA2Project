import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import Header from '../Component/Header';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGraduationCap, FaCheck } from 'react-icons/fa';

export default function SignUp() {
    const [isSignIn, setIsSignIn] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        education: ''
    });
    const [errors, setErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.education) newErrors.education = 'Education level is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setShowSuccess(true);
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phone: '',
                    education: ''
                });
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
            <Header />
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.name ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.email ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.confirmPassword ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaPhone className="text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.phone ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaGraduationCap className="text-gray-400" />
                            </div>
                            <select
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                className={`w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 ${
                                    errors.education ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            >
                                <option value="">Select Education Level</option>
                                <option value="highschool">High School</option>
                                <option value="undergraduate">Undergraduate</option>
                                <option value="graduate">Graduate</option>
                                <option value="postgraduate">Postgraduate</option>
                            </select>
                            {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Creating Account...' : 'Create Account'}
                        </motion.button>
                    </form>
                </motion.div>
            </div>

            {/* Success Popup */}
            {showSuccess && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setShowSuccess(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <FaCheck className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Account Created Successfully!</h3>
                            <p className="text-gray-300 text-center mb-6">
                                Your account has been created successfully. You can now log in to access your dashboard.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                            >
                                Continue
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
