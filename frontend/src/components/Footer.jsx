import React from "react";
import logo from "/QuizWhiz.png"; 

function Footer() {
  return (
    <footer className="mt-15 w-full bg-[#1a1d35] text-gray-300 py-10 px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-start sm:items-center relative overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col items-start gap-2 mb-8 sm:mb-0">
        <h3 className="text-2xl font-bold text-white">QuizWhiz</h3>
        <p className="text-sm text-gray-400 max-w-xs">
          Empowering curious minds to learn, compete, and grow.
        </p>
      </div>

      {/* Center Section */}
      <div className="flex flex-col gap-1 mb-8 sm:mb-0 text-[gray]">
        <h3 className="text-[gray] font-semibold mb-1">Useful Links</h3>
        <a href="/" className="hover:text-[#71c8a8] text-sm">
          Home
        </a>
        <a href="/about" className="hover:text-[#71c8a8] text-sm">
          About
        </a>
        <a href="/domains" className="hover:text-[#71c8a8] text-sm">
          StartQuiz
        </a>
        <a href="/leader-board" className="hover:text-[#71c8a8] text-sm">
          LeaderBoard
        </a>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-start sm:items-start gap-0">
        <h3 className="text-[gray] font-semibold mb-1">Contact :</h3>
        <p className="text-sm text-[gray]">aashi2178@gmail.com</p>
        <div className="w-35 h-35 bg-[#1a1d35] rounded-full flex justify-center items-center mt-3">
          <img
            src={logo}
            alt="QuizWhiz Logo"
            className="w-35 h-35 rounded-full bg-[#1a1d35] p-2"
          />
        </div>
      </div>

    </footer>
  )
}

export default Footer;
