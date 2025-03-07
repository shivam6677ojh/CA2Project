import React, { useState } from "react";
import Header from "../Component/Header";

const careers = [
    { title: "Software Engineer", category: "Technology", description: "Develop and maintain software applications." },
    { title: "Data Scientist", category: "Technology", description: "Analyze and interpret complex data to aid decision-making." },
    { title: "Digital Marketer", category: "Marketing", description: "Use online strategies to promote products and services." },
    { title: "Graphic Designer", category: "Design", description: "Create visually appealing designs for branding and media." },
    { title: "Cybersecurity Analyst", category: "Technology", description: "Protect organizations from cyber threats and attacks." },
    { title: "Doctor", category: "Healthcare", description: "Diagnose and treat medical conditions." },
    { title: "Psychologist", category: "Healthcare", description: "Help individuals improve their mental well-being." },
    { title: "Architect", category: "Engineering", description: "Design and oversee the construction of buildings." },
    { title: "Mechanical Engineer", category: "Engineering", description: "Develop and test mechanical devices and systems." },
    { title: "Financial Analyst", category: "Finance", description: "Guide businesses in making financial decisions." }
];

const categories = ["All", "Technology", "Marketing", "Design", "Healthcare", "Engineering", "Finance"];

const Explore = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCareers = careers.filter(
        (career) =>
            (selectedCategory === "All" || career.category === selectedCategory) &&
            career.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            {/* Hero Section */}
            <div className="text-center mt-16">
                <h1 className="text-5xl font-extrabold text-purple-600 animate-fade-in">
                    Explore Career Paths 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Choose from a variety of career options tailored to your skills and interests.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="container mx-auto mt-8 p-4 flex flex-col md:flex-row items-center justify-between">
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search careers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                />

                {/* Category Filter */}
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="mt-4 md:mt-0 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Career Cards */}
            <div className="container mx-auto grid md:grid-cols-3 gap-6 mt-8 p-4">
                {filteredCareers.length > 0 ? (
                    filteredCareers.map((career, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer"
                        >
                            <h3 className="text-2xl font-bold text-purple-600">{career.title}</h3>
                            <p className="mt-2 text-gray-700">{career.description}</p>
                            <span className="inline-block mt-3 px-3 py-1 text-sm font-medium bg-purple-100 text-purple-600 rounded-full">
                                {career.category}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-3">No careers found.</p>
                )}
            </div>
        </div>
    );
};

export default Explore;
