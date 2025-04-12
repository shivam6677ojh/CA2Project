import { FaBriefcase, FaBookOpen, FaFileAlt, FaChalkboardTeacher, FaQuestionCircle, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../Component/Header";

const CareerResource = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-black to-gray-700">
      <Header />
      
      {/* 🌟 Hero Section */}
      <header className="relative text-center py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
            Career Resources
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Level up your career with expert guidance and insights.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-6 py-12">
        
        {/* 📘 Featured Career Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-12">
            Featured Career Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Choosing the Right Career", "Top 10 In-Demand Skills", "Resume & Cover Letter Tips"].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 p-8 transition-all hover:border-purple-400 hover:shadow-purple-500/50"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-300">{title}</h3>
                <p className="text-gray-300 mb-4">Discover expert insights and strategies to help you advance.</p>
                <a href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                  Read More <span className="ml-2">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 📝 Resume & Interview Preparation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-12">
            Resume & Interview Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 p-8 transition-all hover:border-purple-400 hover:shadow-purple-500/50"
            >
              <FaFileAlt className="text-indigo-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-300">Resume & Cover Letter Templates</h3>
              <p className="text-gray-300 mb-4">Download professional resume templates.</p>
              <a href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                Download <span className="ml-2">→</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 p-8 transition-all hover:border-purple-400 hover:shadow-purple-500/50"
            >
              <FaChalkboardTeacher className="text-indigo-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-300">Mock Interview Practice</h3>
              <p className="text-gray-300 mb-4">Improve your interview skills with mock tests.</p>
              <a href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                Start Practicing <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 💻 Online Courses & Networking */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-12">
            Online Courses & Networking
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 p-8 transition-all hover:border-purple-400 hover:shadow-purple-500/50"
            >
              <FaLaptopCode className="text-indigo-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-300">Top Online Courses</h3>
              <p className="text-gray-300 mb-4">Enhance your skills with the best online courses.</p>
              <a href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                Explore Courses <span className="ml-2">→</span>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg border border-purple-500 p-8 transition-all hover:border-purple-400 hover:shadow-purple-500/50"
            >
              <FaUsers className="text-indigo-400 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-3 text-purple-300">Professional Networking</h3>
              <p className="text-gray-300 mb-4">Build connections and grow your professional network.</p>
              <a href="#" className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                Join Now <span className="ml-2">→</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 🌍 Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>© {new Date().getFullYear()} Career Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CareerResource;
