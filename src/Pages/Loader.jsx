import React from "react";
import "../App.css";

const Loader = () => {
    return (
        <div className="h-screen w-full fixed z-[999] top-0 left-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="mb-8 relative">
                    <div className="w-24 h-24 border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
                    <div className="absolute inset-0 w-24 h-24 border-4 border-indigo-500 rounded-full animate-spin-reverse border-t-transparent" style={{ animationDuration: '1.5s' }}></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4 animate-fade-in">
                    WELCOME
                </h1>

                <h1 className="text-3xl md:text-4xl font-medium text-purple-300 mb-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    To
                </h1>

                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 animate-fade-in" style={{ animationDelay: "1s" }}>
                    CAREER EXPLORER
                </h1>

                <p className="mt-6 text-purple-300 text-lg animate-fade-in" style={{ animationDelay: "1.5s" }}>
                    Your Journey to Success Starts Here
                </p>
            </div>
        </div>
    );
};

export default Loader;
