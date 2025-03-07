import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [isSignIn, setIsSignIn] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-xl p-8 w-96 text-center">
                <h2 className="text-3xl font-bold text-black mb-6">
                    {isSignIn ? "Welcome Back!" : "Join Career Explorer"}
                </h2>

                {/* Form Fields */}
                {!isSignIn && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500"
                    />
                )}
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-4 bg-white bg-opacity-50 rounded-lg border-none text-gray-900 focus:ring-2 focus:ring-purple-500"
                />

                <button className="w-full py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-white mt-4 cursor-pointer hover:underline" onClick={() => setIsSignIn(!isSignIn)}>
                    {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </p>

                <div className="mt-6">
                    <Link to="/" className="text-purple-500 hover:text-white transition">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}
