import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LeaderBoard() {
  const leaderboardData = [
    { rank: 1, username: "Aashi", score: 95, subject: "React.js" },
    { rank: 2, username: "Rohan", score: 90, subject: "Python" },
    { rank: 3, username: "Priya", score: 88, subject: "Java" },
    { rank: 4, username: "Neha", score: 85, subject: "DSA" },
    { rank: 5, username: "Vikram", score: 82, subject: "C++" },
    { rank: 6, username: "Karan", score: 79, subject: "JavaScript" },
  ];

  return (
    <div className="bg-[#0b0e26] text-white min-h-screen flex flex-col">
    <Navbar />
      
      {/* Leaderboard Section */}
      <section className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-3xl font-extrabold text-center mb-10 sm:mb-14">
          <span className="text-[white]">QuizWhiz</span> Leaderboard
        </h1>

        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto bg-[#101436] rounded-2xl shadow-lg border border-[#71c8a8]/30 scrollbar-thin scrollbar-thumb-[#71c8a8]/50 scrollbar-track-[#0b0e26]">
          <table className="w-full min-w-[500px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#71c8a8]/15 text-[#71c8a8] uppercase tracking-wider">
                <th className="py-4 px-4 sm:px-6 font-semibold">Rank</th>
                <th className="py-4 px-4 sm:px-6 font-semibold">Username</th>
                <th className="py-4 px-4 sm:px-6 font-semibold">Subject</th>
                <th className="py-4 px-4 sm:px-6 text-right font-semibold">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user) => (
                <tr
                  key={user.rank}
                  className="border-b border-[#71c8a8]/20 hover:bg-[#71c8a8]/10 transition-all duration-200"
                >
                  <td className="py-4 px-4 sm:px-6 text-[#71c8a8] font-bold text-sm sm:text-base">
                    #{user.rank}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-gray-200">{user.username}</td>
                  <td className="py-4 px-4 sm:px-6 text-gray-300">{user.subject}</td>
                  <td className="py-4 px-4 sm:px-6 text-right text-[#71c8a8] font-semibold">
                    {user.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Encouragement Section */}
        <div className="text-center mt-10 sm:mt-14">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Keep practicing and climb your way up to become the next{" "}
            <span className="text-[#71c8a8] font-semibold">QuizWhiz Champion!</span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LeaderBoard;
