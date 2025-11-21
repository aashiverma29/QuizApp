import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Homepage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/quiz"); // ✅ Changed from "/domains" to "/quiz"
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-start justify-center px-6 sm:px-10 lg:px-24 py-16 md:py-24 text-white w-full max-w-6xl mx-auto gap-8">
                {/* Logo + Heading */}
                <div className="flex flex-col sm:flex-row sm:items-center w-full mb-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 bg-[#0b0e26] p-1 rounded-2xl shadow-lg flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
                        <img
                            src="/QuizWhiz.png"
                            alt="QuizWhiz Logo"
                            className="object-contain w-full h-full"
                        />
                    </div>

                    {/* Title Text */}
                    <div className="text-left mt-4 sm:mt-0 sm:ml-6">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-gray-400">
                            Quiz Application -
                        </h3>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">
                            Quiz<span className="text-[#71c8a8]">Whiz</span>
                        </h1>
                    </div>
                </div>

                {/* Description */}
                <p className="text-[#b0b0b0] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-left mb-8">
                    Think you’re a whiz at trivia? Prove it! Jump into{" "}
                    <span className="text-[#71c8a8] font-semibold">QuizWhiz</span> and test your
                    knowledge with dynamically generated quizzes powered by AI — fun, smart, and
                    endlessly challenging.
                </p>

                {/* Button */}
                <button
                    onClick={handleStart}
                    id="getStart"
                    className="bg-[#71c8a8] text-[#0b0e26] text-lg sm:text-xl font-bold px-10 sm:px-12 py-3 sm:py-4 rounded-2xl hover:bg-[#5bb597] hover:scale-105 transition-all duration-200 shadow-md"
                >
                    Get Started
                </button>

                <hr className="mt-16 border-[#71c8a8] w-full opacity-30 mb-6" />
            </div>

            <Footer />
        </div>
    );
}

export default Homepage;