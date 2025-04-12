import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RocketIcon, CheckCircleIcon, ArrowRightIcon } from "lucide-react";

const questions = [
    {
        id: 1,
        question: "Which activity do you enjoy the most?",
        options: ["Solving Puzzles", "Designing Art", "Helping People", "Leading Teams"],
    },
    {
        id: 2,
        question: "Which skill describes you best?",
        options: ["Analytical Thinking", "Creativity", "Empathy", "Leadership"],
    },
    {
        id: 3,
        question: "What motivates you the most?",
        options: ["Finding Solutions", "Expressing Ideas", "Making Impact", "Achieving Goals"],
    },
];

const suggestions = {
    "Solving Puzzles": "Data Scientist",
    "Designing Art": "Graphic Designer",
    "Helping People": "Social Worker",
    "Leading Teams": "Entrepreneur",
    "Analytical Thinking": "Engineer",
    "Creativity": "UI/UX Designer",
    "Empathy": "Psychologist",
    "Leadership": "Business Manager",
    "Finding Solutions": "Problem Solver",
    "Expressing Ideas": "Content Creator",
    "Making Impact": "NGO Volunteer",
    "Achieving Goals": "Startup Founder",
};

const CareerQuiz = () => {
    const [started, setStarted] = useState(false);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState("");
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const saved = localStorage.getItem("career-quiz-result");
        if (saved) setResult(saved);
    }, []);

    const handleOptionClick = (option) => {
        setSelected(option);
    };

    const handleSubmit = () => {
        if (selected !== "") {
            if (current < questions.length - 1) {
                setDirection(1);
                setCurrent(current + 1);
                setSelected("");
            } else {
                const suggestion = suggestions[selected] || "Multi-Talented Individual";
                setResult(suggestion);
                setSubmitted(true);
                localStorage.setItem("career-quiz-result", suggestion);
            }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 }
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-8">
            <AnimatePresence mode="wait">
                {!started && !result ? (
                    <motion.div
                        key="welcome"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-xl max-w-xl w-full text-center relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <RocketIcon className="w-20 h-20 mx-auto text-indigo-600 mb-6" />
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
                                Welcome to Career Explorer
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 mb-8">
                                Discover your best career path by answering 3 quick questions.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setStarted(true)}
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                            >
                                Start Quiz
                            </motion.button>
                        </motion.div>
                    </motion.div>
                ) : !submitted ? (
                    <motion.div
                        key="quiz"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-xl max-w-xl w-full relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <div className="relative z-10">
                            <motion.div 
                                className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-6 overflow-hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.div
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                            <motion.p 
                                className="text-lg font-medium mb-4 text-slate-800 dark:text-white"
                                {...fadeInUp}
                            >
                                {questions[current].question}
                            </motion.p>
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {questions[current].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-3 px-4 rounded-xl border text-left transition-all ${
                                            selected === option
                                                ? "border-indigo-600 bg-indigo-50 dark:bg-slate-700 text-indigo-600 dark:text-indigo-400"
                                                : "border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                                        }`}
                                    >
                                        {option}
                                    </motion.button>
                                ))}
                            </motion.div>
                            <motion.button
                                onClick={handleSubmit}
                                disabled={!selected}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-6 w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {current === questions.length - 1 ? "Finish Quiz" : "Next"}
                                <ArrowRightIcon className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.7 }}
                        className="bg-white dark:bg-slate-800 p-10 rounded-2xl shadow-xl max-w-xl w-full text-center relative overflow-hidden"
                    >
                        <motion.div
                            className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"
                            animate={{ scale: [1.2, 1, 1.2] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                            >
                                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4 mx-auto" />
                            </motion.div>
                            <motion.h3 
                                className="text-2xl font-semibold text-slate-800 dark:text-white mb-2"
                                {...fadeInUp}
                            >
                                Your Ideal Career Path
                            </motion.h3>
                            <motion.p 
                                className="text-indigo-600 text-xl font-bold mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {result}
                            </motion.p>
                            <motion.p 
                                className="text-slate-600 dark:text-slate-300 mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                We'll suggest resources & mentors for this career in your dashboard.
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setStarted(false);
                                    setSubmitted(false);
                                    setCurrent(0);
                                    setSelected("");
                                    localStorage.removeItem("career-quiz-result");
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                            >
                                Retake Quiz
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CareerQuiz;
