import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import Loader from "./Loader"; // Ensure correct path

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-gradient-to-r  from-gray-700 via-black to-gray-700 min-h-screen flex flex-col">
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
              <button className="mt-6 px-6 py-3 text-lg font-semibold from-gray-700 via-black to-gray-700 text-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:bg-purple-700 hover:text-white">
                Start Exploring
              </button>
            </Link>
          </header>

          {/* Features Section */}
          <section className="bg-gray-300 via-20% to-gray-400 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="p-6 bg-black border-2 border-purple-500 rounded-lg shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold text-purple-600">Career Guidance</h3>
                  <p className="text-gray-700 mt-2 font-bold">
                    Personalized recommendations based on your skills and interests.
                  </p>
                </div>
                <div className="p-6 bg-black rounded-lg shadow-lg hover:shadow-2xl transition border-2 border-purple-500">
                  <h3 className="text-2xl font-bold text-purple-600">Expert Mentors</h3>
                  <p className="text-gray-700 mt-2 font-bold">
                    Learn from industry professionals with years of experience.
                  </p>
                </div>
                <div className="p-6 bg-black border-2 border-purple-500 rounded-lg shadow-lg hover:shadow-2xl transition">
                  <h3 className="text-2xl font-bold text-purple-600">Job Assistance</h3>
                  <p className="text-gray-700 mt-2 font-bold">
                    Get access to exclusive job opportunities and internships.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className=" from-gray-700 via-black to-gray-700 text-white py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold">What Our Users Say</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
                  <p className="italic">
                    "Career Explorer helped me find the perfect career path!"
                  </p>
                  <h4 className="mt-2 font-bold text-purple-600">- Alex Johnson</h4>
                </div>
                <div className="p-6 bg-white text-gray-800 rounded-lg shadow-lg">
                  <p className="italic">
                    "The best platform for career guidance. Highly recommended!"
                  </p>
                  <h4 className="mt-2 font-bold text-purple-600">- Sarah Lee</h4>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-gray-300 py-6 text-center">
            <p>© 2024 Career Explorer. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default HomePage;
