import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Toggle dark mode when button is clicked
    const toggleDarkMode = () => {
        if (darkMode) {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    // Apply dark mode on first load
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, []);

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 w-full z-50 border-b border-purple-100 dark:bg-gray-900/90 dark:border-purple-900">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Brand Logo */}
                <Link to="/">
                    <motion.h1 
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 cursor-pointer transition-all"
                    >
                        Career Explorer
                    </motion.h1>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105">
                        Contact
                    </Link>
                    <Link to="/signup" className="text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105">
                        Sign up
                    </Link>

                    <button
                        onClick={toggleDarkMode}
                        className="bg-gradient-to-r from-purple-500 to-indigo-600 font-bold text-center flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                        <MdOutlineDarkMode size={24} className="text-white" />
                    </button>

                    <Link to="/explore">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
                        >
                            Get Started 🚀
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-purple-600 dark:text-purple-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg overflow-hidden ${isOpen ? "block" : "hidden"}`}
            >
                <div className="p-4 space-y-4">
                    <Link to="/" className="block text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400">
                        Home
                    </Link>
                    <Link to="/about" className="block text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400">
                        About
                    </Link>
                    <Link to="/contact" className="block text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400">
                        Contact
                    </Link>
                    <Link to="/signup" className="block text-gray-800 dark:text-gray-200 font-medium transition hover:text-purple-600 dark:hover:text-purple-400">
                        Sign up
                    </Link>
                    <Link to="/explore">
                        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-xl shadow-md hover:shadow-lg transition-all">
                            Get Started 🚀
                        </button>
                    </Link>
                </div>
            </motion.div>
        </nav>
    );
}
