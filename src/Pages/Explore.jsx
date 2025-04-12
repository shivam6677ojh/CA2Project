import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Component/Header";

const careers = [
    // Technology
    
    { title: "AI Engineer", category: "Technology", description: "Develop AI models and machine learning solutions.", icon: "🧠",
        details: {
            responsibilities: [
                "Design and implement machine learning models",
                "Train and optimize AI systems",
                "Develop natural language processing solutions",
                "Work with large datasets and data pipelines"
            ],
            skills: [
                "Python, TensorFlow, PyTorch",
                "Machine Learning Algorithms",
                "Data Analysis",
                "Cloud Computing"
            ],
            salary: "$100,000 - $180,000",
            growth: "High (30% projected growth)",
            education: "Bachelor's in Computer Science or related field"
        }
    },
    { title: "Cloud Architect", category: "Technology", description: "Design and manage cloud infrastructure solutions.", icon: "☁️",
        details: {
            responsibilities: [
                "Design scalable cloud architectures",
                "Implement cloud security best practices",
                "Optimize cloud costs and performance",
                "Manage cloud migration projects"
            ],
            skills: [
                "AWS, Azure, GCP",
                "Infrastructure as Code",
                "Cloud Security",
                "DevOps Practices"
            ],
            salary: "$120,000 - $200,000",
            growth: "High (25% projected growth)",
            education: "Bachelor's in Computer Science or Cloud Computing"
        }
    },
    { title: "DevOps Engineer", category: "Technology", description: "Streamline development and operations processes.", icon: "🔄",
        details: {
            responsibilities: [
                "Implement CI/CD pipelines",
                "Automate infrastructure deployment",
                "Monitor system performance",
                "Manage container orchestration"
            ],
            skills: [
                "Docker, Kubernetes",
                "Jenkins, GitLab CI",
                "Infrastructure as Code",
                "Linux Administration"
            ],
            salary: "$90,000 - $160,000",
            growth: "High (22% projected growth)",
            education: "Bachelor's in Computer Science or related field"
        }
    },
    { title: "Blockchain Developer", category: "Technology", description: "Build decentralized applications and smart contracts.", icon: "⛓️",
        details: {
            responsibilities: [
                "Develop smart contracts",
                "Create decentralized applications",
                "Implement blockchain protocols",
                "Ensure security of blockchain systems"
            ],
            skills: [
                "Solidity, Web3.js",
                "Smart Contract Development",
                "Cryptography",
                "Blockchain Architecture"
            ],
            salary: "$110,000 - $190,000",
            growth: "High (28% projected growth)",
            education: "Bachelor's in Computer Science or related field"
        }
    },
    
    // Marketing
    { title: "Content Strategist", category: "Marketing", description: "Plan and manage content creation across platforms.", icon: "📝",
        details: {
            responsibilities: [
                "Develop content strategies",
                "Create editorial calendars",
                "Analyze content performance",
                "Manage content teams"
            ],
            skills: [
                "Content Marketing",
                "SEO",
                "Analytics",
                "Project Management"
            ],
            salary: "$60,000 - $120,000",
            growth: "Medium (15% projected growth)",
            education: "Bachelor's in Marketing, Communications, or related field"
        }
    },
    { title: "Social Media Manager", category: "Marketing", description: "Manage brand presence across social platforms.", icon: "📱",
        details: {
            responsibilities: [
                "Create social media content",
                "Engage with online communities",
                "Analyze social metrics",
                "Develop social media strategies"
            ],
            skills: [
                "Social Media Platforms",
                "Content Creation",
                "Community Management",
                "Analytics Tools"
            ],
            salary: "$50,000 - $90,000",
            growth: "Medium (12% projected growth)",
            education: "Bachelor's in Marketing, Communications, or related field"
        }
    },
    
    // Design
    { title: "UX Designer", category: "Design", description: "Create intuitive user experiences for digital products.", icon: "🖌️",
        details: {
            responsibilities: [
                "Conduct user research",
                "Create wireframes and prototypes",
                "Design user interfaces",
                "Test and iterate designs"
            ],
            skills: [
                "Figma, Sketch",
                "User Research",
                "Prototyping",
                "Interaction Design"
            ],
            salary: "$70,000 - $130,000",
            growth: "High (20% projected growth)",
            education: "Bachelor's in Design, HCI, or related field"
        }
    },
    { title: "Product Designer", category: "Design", description: "Design physical and digital products from concept to production.", icon: "🎯",
        details: {
            responsibilities: [
                "Create product concepts",
                "Develop design systems",
                "Collaborate with engineers",
                "Conduct user testing"
            ],
            skills: [
                "3D Modeling",
                "Industrial Design",
                "User-Centered Design",
                "Prototyping"
            ],
            salary: "$75,000 - $140,000",
            growth: "Medium (18% projected growth)",
            education: "Bachelor's in Industrial Design or related field"
        }
    },
    
    // Healthcare
    { title: "Nurse Practitioner", category: "Healthcare", description: "Provide advanced nursing care and treatment.", icon: "💊",
        details: {
            responsibilities: [
                "Diagnose and treat illnesses",
                "Prescribe medications",
                "Order diagnostic tests",
                "Provide patient education"
            ],
            skills: [
                "Clinical Assessment",
                "Patient Care",
                "Medical Knowledge",
                "Communication"
            ],
            salary: "$90,000 - $150,000",
            growth: "High (26% projected growth)",
            education: "Master's in Nursing (MSN)"
        }
    },
    { title: "Physical Therapist", category: "Healthcare", description: "Help patients recover mobility and manage pain.", icon: "🏃♂️",
        details: {
            responsibilities: [
                "Assess patient conditions",
                "Develop treatment plans",
                "Guide rehabilitation exercises",
                "Monitor patient progress"
            ],
            skills: [
                "Physical Therapy Techniques",
                "Patient Assessment",
                "Exercise Prescription",
                "Manual Therapy"
            ],
            salary: "$70,000 - $120,000",
            growth: "High (21% projected growth)",
            education: "Doctor of Physical Therapy (DPT)"
        }
    },
    
    // Engineering
    { title: "Civil Engineer", category: "Engineering", description: "Design and supervise infrastructure projects.", icon: "🌉",
        details: {
            responsibilities: [
                "Design infrastructure projects",
                "Supervise construction",
                "Ensure safety standards",
                "Manage project budgets"
            ],
            skills: [
                "CAD Software",
                "Structural Analysis",
                "Project Management",
                "Construction Methods"
            ],
            salary: "$65,000 - $130,000",
            growth: "Medium (8% projected growth)",
            education: "Bachelor's in Civil Engineering"
        }
    },
    { title: "Biomedical Engineer", category: "Engineering", description: "Develop medical devices and healthcare technologies.", icon: "🦾",
        details: {
            responsibilities: [
                "Design medical devices",
                "Test equipment safety",
                "Research new technologies",
                "Collaborate with healthcare professionals"
            ],
            skills: [
                "Medical Device Design",
                "Biomechanics",
                "Regulatory Compliance",
                "Research Methods"
            ],
            salary: "$70,000 - $140,000",
            growth: "High (17% projected growth)",
            education: "Bachelor's in Biomedical Engineering"
        }
    },
    
    // Finance
    { title: "Investment Banker", category: "Finance", description: "Advise on mergers, acquisitions, and capital raising.", icon: "💹",
        details: {
            responsibilities: [
                "Analyze financial data",
                "Prepare pitch books",
                "Structure deals",
                "Manage client relationships"
            ],
            skills: [
                "Financial Modeling",
                "Valuation",
                "Deal Structuring",
                "Market Analysis"
            ],
            salary: "$100,000 - $300,000+",
            growth: "Medium (10% projected growth)",
            education: "Bachelor's in Finance, Economics, or related field"
        }
    },
    { title: "Risk Manager", category: "Finance", description: "Identify and mitigate financial risks for organizations.", icon: "🛡️",
        details: {
            responsibilities: [
                "Assess financial risks",
                "Develop risk management strategies",
                "Monitor market conditions",
                "Ensure regulatory compliance"
            ],
            skills: [
                "Risk Assessment",
                "Financial Analysis",
                "Regulatory Knowledge",
                "Data Analysis"
            ],
            salary: "$80,000 - $160,000",
            growth: "Medium (12% projected growth)",
            education: "Bachelor's in Finance, Risk Management, or related field"
        }
    },
    
    // Creative
    { title: "Video Producer", category: "Design", description: "Create visual content for various media platforms.", icon: "🎥",
        details: {
            responsibilities: [
                "Plan video shoots",
                "Direct production",
                "Edit video content",
                "Manage post-production"
            ],
            skills: [
                "Video Editing",
                "Camera Operation",
                "Storytelling",
                "Post-Production"
            ],
            salary: "$50,000 - $100,000",
            growth: "Medium (14% projected growth)",
            education: "Bachelor's in Film, Media, or related field"
        }
    },
    { title: "Game Developer", category: "Technology", description: "Design and program interactive video games.", icon: "🎮",
        details: {
            responsibilities: [
                "Develop game mechanics",
                "Write game code",
                "Create game assets",
                "Test and debug games"
            ],
            skills: [
                "Unity, Unreal Engine",
                "C++, C#",
                "Game Design",
                "3D Modeling"
            ],
            salary: "$60,000 - $130,000",
            growth: "High (19% projected growth)",
            education: "Bachelor's in Game Development or Computer Science"
        }
    },
    
    // Emerging Fields
    { title: "AR/VR Developer", category: "Technology", description: "Create immersive augmented/virtual reality experiences.", icon: "👓",
        details: {
            responsibilities: [
                "Develop AR/VR applications",
                "Create 3D environments",
                "Implement interactive features",
                "Optimize performance"
            ],
            skills: [
                "Unity, Unreal Engine",
                "3D Modeling",
                "AR/VR SDKs",
                "Spatial Computing"
            ],
            salary: "$80,000 - $150,000",
            growth: "High (27% projected growth)",
            education: "Bachelor's in Computer Science or related field"
        }
    },
    { title: "Ethical Hacker", category: "Technology", description: "Test systems security through controlled attacks.", icon: "🕵️♂️",
        details: {
            responsibilities: [
                "Conduct security assessments",
                "Identify vulnerabilities",
                "Perform penetration testing",
                "Write security reports"
            ],
            skills: [
                "Penetration Testing",
                "Network Security",
                "Cryptography",
                "Security Tools"
            ],
            salary: "$90,000 - $170,000",
            growth: "High (23% projected growth)",
            education: "Bachelor's in Cybersecurity or related field"
        }
    },
    
    // Existing entries
    { title: "Software Engineer", category: "Technology", description: "Develop and maintain software applications.", icon: "💻",
        details: {
            responsibilities: [
                "Write clean, efficient code",
                "Debug and fix issues",
                "Collaborate with teams",
                "Maintain software systems"
            ],
            skills: [
                "Programming Languages",
                "Software Architecture",
                "Version Control",
                "Problem Solving"
            ],
            salary: "$80,000 - $160,000",
            growth: "High (22% projected growth)",
            education: "Bachelor's in Computer Science or related field"
        }
    },
    { title: "Data Scientist", category: "Technology", description: "Analyze and interpret complex data to aid decision-making.", icon: "📊",
        details: {
            responsibilities: [
                "Analyze large datasets",
                "Build predictive models",
                "Create data visualizations",
                "Communicate insights"
            ],
            skills: [
                "Python, R",
                "Machine Learning",
                "Statistics",
                "Data Visualization"
            ],
            salary: "$90,000 - $170,000",
            growth: "High (25% projected growth)",
            education: "Bachelor's in Data Science, Statistics, or related field"
        }
    },
    { title: "Digital Marketer", category: "Marketing", description: "Use online strategies to promote products and services.", icon: "📈",
        details: {
            responsibilities: [
                "Develop digital campaigns",
                "Manage online advertising",
                "Analyze marketing metrics",
                "Optimize conversion rates"
            ],
            skills: [
                "SEO/SEM",
                "Social Media Marketing",
                "Analytics",
                "Content Marketing"
            ],
            salary: "$50,000 - $100,000",
            growth: "Medium (15% projected growth)",
            education: "Bachelor's in Marketing or related field"
        }
    },
    { title: "Graphic Designer", category: "Design", description: "Create visually appealing designs for branding and media.", icon: "🎨",
        details: {
            responsibilities: [
                "Create visual designs",
                "Develop brand identities",
                "Design marketing materials",
                "Work with clients"
            ],
            skills: [
                "Adobe Creative Suite",
                "Typography",
                "Color Theory",
                "Layout Design"
            ],
            salary: "$45,000 - $90,000",
            growth: "Medium (10% projected growth)",
            education: "Bachelor's in Graphic Design or related field"
        }
    },
    { title: "Cybersecurity Analyst", category: "Technology", description: "Protect organizations from cyber threats and attacks.", icon: "🛡️",
        details: {
            responsibilities: [
                "Monitor security systems",
                "Investigate security incidents",
                "Implement security measures",
                "Conduct security audits"
            ],
            skills: [
                "Network Security",
                "Threat Analysis",
                "Security Tools",
                "Incident Response"
            ],
            salary: "$80,000 - $150,000",
            growth: "High (24% projected growth)",
            education: "Bachelor's in Cybersecurity or related field"
        }
    },
    { title: "Doctor", category: "Healthcare", description: "Diagnose and treat medical conditions.", icon: "⚕️",
        details: {
            responsibilities: [
                "Diagnose illnesses",
                "Prescribe treatments",
                "Perform medical procedures",
                "Provide patient care"
            ],
            skills: [
                "Medical Knowledge",
                "Clinical Skills",
                "Patient Care",
                "Diagnosis"
            ],
            salary: "$150,000 - $300,000+",
            growth: "Medium (13% projected growth)",
            education: "Medical Degree (MD or DO)"
        }
    },
    { title: "Psychologist", category: "Healthcare", description: "Help individuals improve their mental well-being.", icon: "🧠",
        details: {
            responsibilities: [
                "Conduct therapy sessions",
                "Assess mental health",
                "Develop treatment plans",
                "Provide counseling"
            ],
            skills: [
                "Therapeutic Techniques",
                "Psychological Assessment",
                "Counseling",
                "Research Methods"
            ],
            salary: "$70,000 - $120,000",
            growth: "Medium (14% projected growth)",
            education: "Doctoral Degree in Psychology"
        }
    },
    { title: "Architect", category: "Engineering", description: "Design and oversee the construction of buildings.", icon: "🏗️",
        details: {
            responsibilities: [
                "Design buildings",
                "Create blueprints",
                "Manage construction",
                "Ensure building codes"
            ],
            skills: [
                "CAD Software",
                "Building Design",
                "Project Management",
                "Building Codes"
            ],
            salary: "$70,000 - $140,000",
            growth: "Medium (8% projected growth)",
            education: "Bachelor's in Architecture"
        }
    },
    { title: "Mechanical Engineer", category: "Engineering", description: "Develop and test mechanical devices and systems.", icon: "⚙️",
        details: {
            responsibilities: [
                "Design mechanical systems",
                "Test prototypes",
                "Analyze performance",
                "Improve efficiency"
            ],
            skills: [
                "CAD Software",
                "Thermodynamics",
                "Materials Science",
                "Mechanical Design"
            ],
            salary: "$65,000 - $130,000",
            growth: "Medium (9% projected growth)",
            education: "Bachelor's in Mechanical Engineering"
        }
    },
    { title: "Financial Analyst", category: "Finance", description: "Guide businesses in making financial decisions.", icon: "💰",
        details: {
            responsibilities: [
                "Analyze financial data",
                "Create financial models",
                "Prepare reports",
                "Make investment recommendations"
            ],
            skills: [
                "Financial Analysis",
                "Excel",
                "Financial Modeling",
                "Market Research"
            ],
            salary: "$60,000 - $120,000",
            growth: "Medium (11% projected growth)",
            education: "Bachelor's in Finance, Economics, or related field"
        }
    }
];

const categories = ["All", "Technology", "Marketing", "Design", "Healthcare", "Engineering", "Finance"];

const categoryIcons = {
    All: "🌐",
    Technology: "💻",
    Marketing: "📈",
    Design: "🎨",
    Healthcare: "⚕️",
    Engineering: "🏗️",
    Finance: "💰"
};

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedCareer, setSelectedCareer] = useState(null);

    const filteredCareers = careers.filter(
        (career) =>
            (selectedCategory === "All" || career.category === selectedCategory) &&
            career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-700 via-black to-gray-700">
            <Header />

            {/* Hero Section */}
            <motion.div 
                className="relative text-center pt-28 pb-20 px-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                    className="absolute -bottom-20 -left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.h1 
                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Discover Your Future
                </motion.h1>
                <motion.p 
                    className="text-xl text-purple-500 font-bold max-w-2xl mx-auto mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Explore career paths that match your passion and skills. Find your perfect fit in our curated collection.
                </motion.p>
            </motion.div>

            {/* Search and Filter Section */}
            <motion.div 
                className="container mx-auto px-4 mb-12 -mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20">
                    <div className="flex flex-col md:flex-row gap-4">
                        <motion.div 
                            className="flex-1 relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <input
                                type="text"
                                placeholder="Search careers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                            />
                            <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
                        </motion.div>

                        <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full md:w-64 pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition-all text-white"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category} className="bg-gray-800">
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <span className="absolute left-4 top-3.5 text-gray-400 text-xl">
                                {categoryIcons[selectedCategory]}
                            </span>
                            <span className="absolute right-4 top-4 text-gray-400">▼</span>
                        </motion.div>
                    </div>

                    {/* Mobile Category Chips */}
                    <motion.div 
                        className="mt-4 flex flex-wrap gap-2 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                                    selectedCategory === category
                                        ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                                }`}
                            >
                                <span>{categoryIcons[category]}</span>
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Career Cards Grid */}
            <motion.div 
                className="container mx-auto px-4 pb-16"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <AnimatePresence mode="wait">
                    {filteredCareers.length > 0 ? (
                        <motion.div 
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                        >
                            {filteredCareers.map((career, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    onHoverStart={() => setHoveredCard(index)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    onClick={() => setSelectedCareer(career)}
                                    className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg border border-white/10 transition-all hover:border-purple-500/50 hover:shadow-purple-500/20 relative overflow-hidden cursor-pointer"
                                >
                                    <motion.div 
                                        className="absolute -top-2 left-6 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg"
                                        animate={{ 
                                            scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                                            rotate: hoveredCard === index ? [0, 10, -10, 0] : 0
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <span className="text-3xl">{career.icon}</span>
                                    </motion.div>
                                    <motion.h3 
                                        className="text-2xl font-bold text-white mb-2 mt-4"
                                        animate={{ 
                                            color: hoveredCard === index ? "#a855f7" : "#ffffff"
                                        }}
                                    >
                                        {career.title}
                                    </motion.h3>
                                    <motion.p 
                                        className="text-gray-400 mb-4"
                                        animate={{ 
                                            color: hoveredCard === index ? "#d8b4fe" : "#9ca3af"
                                        }}
                                    >
                                        {career.description}
                                    </motion.p>
                                    <div className="flex items-center justify-between">
                                        <motion.span 
                                            className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium"
                                            animate={{ 
                                                backgroundColor: hoveredCard === index ? "rgba(168, 85, 247, 0.2)" : "rgba(168, 85, 247, 0.1)"
                                            }}
                                        >
                                            {career.category}
                                        </motion.span>
                                        <motion.button 
                                            className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 group"
                                            whileHover={{ x: 5 }}
                                        >
                                            Learn More
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div 
                            className="text-center py-20"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <motion.div 
                                className="text-6xl mb-4"
                                animate={{ 
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                            >
                                😕
                            </motion.div>
                            <h3 className="text-2xl text-white mb-2">No careers found</h3>
                            <p className="text-gray-400">Try adjusting your search filters</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Career Details Modal */}
            <AnimatePresence>
                {selectedCareer && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedCareer(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <span className="text-4xl">{selectedCareer.icon}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">{selectedCareer.title}</h2>
                                        <span className="text-purple-400">{selectedCareer.category}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCareer(null)}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                                    <p className="text-gray-300">{selectedCareer.description}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Key Responsibilities</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                                        {selectedCareer.details.responsibilities.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Required Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCareer.details.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <h4 className="text-sm text-gray-400 mb-1">Average Salary</h4>
                                        <p className="text-white font-semibold">{selectedCareer.details.salary}</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <h4 className="text-sm text-gray-400 mb-1">Growth Prospects</h4>
                                        <p className="text-white font-semibold">{selectedCareer.details.growth}</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl">
                                        <h4 className="text-sm text-gray-400 mb-1">Education</h4>
                                        <p className="text-white font-semibold">{selectedCareer.details.education}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Explore;