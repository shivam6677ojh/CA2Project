import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Loader from "./Loader"; // Ensure correct path
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState(null);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: "career-guidance",
      title: "Career Explorer",
      description: "Discover your perfect career path with personalized guidance.",
      icon: "🎯",
      details: {
        benefits: [
          "Personalized career path recommendations",
          "Skills assessment and gap analysis",
          "Industry trend insights",
          "Career transition planning"
        ],
        process: [
          "Complete our comprehensive skills assessment",
          "Get matched with suitable career paths",
          "Receive detailed career roadmaps",
          "Access ongoing career development resources"
        ],
        tools: [
          "Career Assessment Tests",
          "Skills Mapping Tools",
          "Industry Research Reports",
          "Career Planning Templates"
        ]
      }
    },
    {
      id: "expert-mentors",
      title: "Expert Mentors",
      description: "Connect with industry professionals for personalized guidance.",
      icon: "👨‍🏫",
      details: {
        benefits: [
          "One-on-one mentorship sessions",
          "Industry-specific guidance",
          "Career development planning",
          "Professional network expansion"
        ],
        process: [
          "Match with suitable mentors based on your goals",
          "Schedule regular mentoring sessions",
          "Receive personalized career advice",
          "Get industry insights and connections"
        ],
        tools: [
          "Mentor Matching System",
          "Video Call Platform",
          "Progress Tracking Tools",
          "Resource Library"
        ]
      }
    },
    {
      id: "job-assistance",
      title: "Job Assistance",
      description: "Get access to exclusive job opportunities and career support.",
      icon: "💼",
      details: {
        benefits: [
          "Exclusive job listings",
          "Resume and cover letter review",
          "Interview preparation",
          "Career fair access"
        ],
        process: [
          "Create your professional profile",
          "Get matched with relevant opportunities",
          "Receive application support",
          "Access interview preparation resources"
        ],
        tools: [
          "Job Matching Algorithm",
          "Resume Builder",
          "Interview Simulator",
          "Career Fair Platform"
        ]
      }
    }
  ];

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gradient-to-r from-gray-700 via-black to-gray-700 min-h-screen flex flex-col">
          <Header />

          {/* Hero Section */}
          <header className="flex flex-col items-center justify-center text-center text-white min-h-screen px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold opacity-0 animate-fade-in">
              Discover Your Dream Career 🚀
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Find the best career path tailored just for you.
            </p>
            <Link to="/explore">
              <button className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-700 hover:text-white">
                Start Exploring
              </button>
            </Link>
          </header>

          {/* Features Section */}
          <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black py-20">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-5xl font-extrabold text-purple-400 tracking-wide">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Explore the key benefits that make Career Explorer the perfect choice for your future.
              </p>

              <div className="grid md:grid-cols-3 gap-10 mt-12">
                {features.map((feature) => (
                  <motion.div
                    key={feature.id}
                    className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedFeature(feature)}
                  >
                    <span className="text-5xl">{feature.icon}</span>
                    <h3 className="mt-4 text-3xl font-bold text-purple-400">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mt-2 text-lg">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Details Modal */}
          <AnimatePresence>
            {selectedFeature && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedFeature(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{selectedFeature.icon}</span>
                      <h2 className="text-3xl font-bold text-purple-400">{selectedFeature.title}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Key Benefits</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {selectedFeature.details.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">How It Works</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-300">
                        {selectedFeature.details.process.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-3">Available Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedFeature.details.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-900/50 text-purple-400 rounded-full text-sm border border-purple-500"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setSelectedFeature(null)}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Testimonials Section */}
          <section className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-20">
            <div className="container mx-auto text-center px-6">
              <h2 className="text-5xl font-extrabold tracking-wide text-purple-400">
                What Our Users Say
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Real stories from people who found success with Career Explorer.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {[
                  {
                    quote: "Career Explorer helped me find the perfect career path!",
                    name: "Alex Johnson",
                  },
                  {
                    quote: "The best platform for career guidance. Highly recommended!",
                    name: "Sarah Lee",
                  },
                  {
                    quote: "Amazing resources and expert advice. 10/10 experience!",
                    name: "David Smith",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-8 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-purple-500/50"
                  >
                    <p className="italic text-xl font-semibold text-white">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="mt-4 font-bold text-purple-400">- {testimonial.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Footer Section */}
          {/* <footer className="bg-gray-900 text-gray-300 py-6 text-center">
            <p>© 2024 Career Explorer. All rights reserved.</p>
          </footer> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default HomePage;
