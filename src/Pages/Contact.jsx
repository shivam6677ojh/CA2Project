import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Header from "../Component/Header";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-700 via-black to-gray-700 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Animated background elements */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -bottom-20 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row gap-8"
            >
                {/* Contact Info Section */}
                <motion.div 
                    className="md:w-1/2 p-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl flex flex-col justify-center relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-noise opacity-10"></div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <motion.h2 
                            className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent"
                            {...fadeInUp}
                        >
                            Let's Connect
                        </motion.h2>
                        <motion.p 
                            className="text-lg mb-8 opacity-90"
                            {...fadeInUp}
                        >
                            Have a question or want to collaborate? We're here to help and excited to hear from you!
                        </motion.p>

                        <div className="space-y-6">
                            {[
                                { icon: FaPhone, title: "Phone", value: "7704986795" },
                                { icon: FaEnvelope, title: "Email", value: "sojha3022@gmail.com" },
                                { icon: FaMapMarkerAlt, title: "Office", value: "Lovely Professional University", subValue: "BH-4" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                                >
                                    <motion.div 
                                        className="p-3 bg-white/20 rounded-lg"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <item.icon className="text-2xl" />
                                    </motion.div>
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="opacity-90">{item.value}</p>
                                        {item.subValue && <p className="opacity-90">{item.subValue}</p>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Contact Form Section */}
                <motion.div 
                    className="md:w-1/2 p-8 flex flex-col justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.h2 
                            className="text-3xl font-bold text-gray-800 mb-6"
                            {...fadeInUp}
                        >
                            Send Your Message
                            <motion.span 
                                className="block w-12 h-1.5 bg-purple-600 mt-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            ></motion.span>
                        </motion.h2>

                        {success && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200 flex items-center gap-3"
                            >
                                <motion.div 
                                    className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <FaPaperPlane className="text-green-600" />
                                </motion.div>
                                <p className="text-green-700 font-medium">Message sent successfully!</p>
                            </motion.div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {[
                                { name: "name", label: "Your Name", type: "text" },
                                { name: "email", label: "Email Address", type: "email" },
                                { name: "message", label: "Your Message", type: "textarea" }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    {field.type === "textarea" ? (
                                        <textarea
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 peer resize-none"
                                            rows="4"
                                            placeholder=" "
                                        ></textarea>
                                    ) : (
                                        <input
                                            type={field.type}
                                            name={field.name}
                                            value={formData[field.name]}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-200 focus:border-purple-500 peer"
                                            placeholder=" "
                                        />
                                    )}
                                    <label className="absolute left-4 top-3 px-1 bg-white transition-all duration-200 
                                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-2 peer-focus:text-purple-600 peer-focus:text-sm
                                        text-gray-600 text-sm -top-2">
                                        {field.label}
                                    </label>
                                </motion.div>
                            ))}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                                    py-4 rounded-xl font-bold flex items-center justify-center gap-2
                                    hover:shadow-lg transition-all"
                            >
                                <FaPaperPlane className="text-lg" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactPage;