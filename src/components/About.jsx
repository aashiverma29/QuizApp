import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="bg-[#0b0e26] text-[white] min-h-screen flex flex-col">
      <Navbar />

      {/* Main About Section */}
      <section className="flex-grow px-6 sm:px-16 lg:px-32 py-16 space-y-8 mb-10">
        <h1 className="text-4xl sm:text-3xl font-bold text-[white] mb-6">
          About <span className="text-[white]">QuizWhiz</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl">
          <span className="font-semibold text-[#71c8a8]">QuizWhiz</span> is an
          AI-powered quiz application built to make learning engaging, adaptive,
          and fun. Whether you’re sharpening your coding skills, preparing for
          exams, or just testing your knowledge, QuizWhiz turns quizzes into a
          smart learning experience.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl">
          Powered by{" "}
          <span className="font-semibold text-[#71c8a8]">Google’s Gemini API</span>,
          QuizWhiz dynamically generates questions based on your chosen domain —
          from Java and Python to DSA and React. Every quiz session feels unique,
          challenging, and perfectly tailored to your interests.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl">
          Our mission is simple —{" "}
          <span className="font-semibold text-[#71c8a8]">
            to make learning intelligent and interactive
          </span>.
          We believe education should inspire curiosity and growth, not boredom.
          That’s why every question, answer, and result is designed to push your
          limits while keeping the experience exciting.
        </p>

        <div className="bg-[#101436] p-6 rounded-2xl border border-[#71c8a8]/30 mt-8 shadow-md">
          <h2 className="text-2xl sm:text-2xl font-bold text-[white] mb-4">
            With QuizWhiz, you can:
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-400 text-lg">
            <li>
              🎯 Challenge yourself with AI-generated questions from multiple domains
            </li>
            <li>📊 Track your scores and see how your skills improve over time</li>
            <li>
              💡 Learn interactively with instant feedback on every answer
            </li>
            <li>
              🌐 Enjoy a responsive, modern quiz experience on any device
            </li>
          </ul>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mt-8">
          Built with{" "}
          <span className="text-[#71c8a8] font-semibold">
            React.js, Tailwind CSS, Node.js, and MongoDB
          </span>
          , QuizWhiz blends technology and learning into one seamless platform.
          It’s not just a quiz app — it’s a step toward smarter, personalized
          education.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default About;
