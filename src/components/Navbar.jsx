import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent text-[#71c8a8] font-extrabold text-lg px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-1">
          <img
            src="QuizWhiz.png"
            alt="QuizWhiz Logo"
            className="w-10 h-10 object-contain"
          />
          <h3 className="text-1xl tracking-wide text-[gray]">QuizWhiz</h3>
        </div>

        {/* Hamburger Menu (visible on small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Right: Nav Links (Desktop) */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            to="/"
            className="bg-[#71c8a8] text-[#0b0e26] px-5 py-2 rounded-md hover:scale-105 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="bg-[#71c8a8] text-[#0b0e26] px-5 py-2 rounded-md hover:scale-105 transition-transform duration-200"
          >
            AboutUs
          </Link>
          <Link
            to="/Leader-Board"
            className="text-[#71c8a8] hover:text-[#8fe0bf] transition-colors duration-200"
          >
            LeaderBoard
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col items-start gap-4 bg-[#0b0e26]/90 p-4 rounded-lg shadow-lg">
          <Link
            to="/"
            className="w-full text-left text-[#71c8a8] hover:text-[#8fe0bf]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/About"
            className="w-full text-left text-[#71c8a8] hover:text-[#8fe0bf]"
            onClick={() => setIsOpen(false)}
          >
            AboutUs
          </Link>
          <Link
            to="/Leader-Board"
            className="w-full text-left text-[#71c8a8] hover:text-[#8fe0bf]"
            onClick={() => setIsOpen(false)}
          >
            LeaderBoard
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
