import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function LeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/leaderboard");

        // Add rank dynamically
        const rankedData = res.data.map((item, index) => ({
          ...item,
          rank: index + 1,
        }));

        setLeaderboardData(rankedData);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-[#0b0e26] text-white min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 sm:mb-14">
          <span className="text-white">QuizWhiz</span> Leaderboard
        </h1>

        <div className="overflow-x-auto bg-[#101436] rounded-2xl shadow-lg border border-[#71c8a8]/30">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#71c8a8]/15 text-[#71c8a8] uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Rank</th>
                <th className="py-4 px-6 font-semibold">Name</th>
                <th className="py-4 px-6 font-semibold">Subject</th>
                <th className="py-4 px-6 text-right font-semibold">Score</th>
                <th className="py-4 px-6 text-right font-semibold">Total</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : leaderboardData.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No data available
                  </td>
                </tr>
              ) : (
                leaderboardData.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-[#71c8a8]/20 hover:bg-[#71c8a8]/10 transition-all duration-200"
                  >
                    <td className="py-4 px-6 text-[#71c8a8] font-bold">
                      #{user.rank}
                    </td>

                    <td className="py-4 px-6 text-gray-200">
                      {user.fullName || user.username}
                    </td>

                    <td className="py-4 px-6 text-gray-300">{user.subject}</td>

                    <td className="py-4 px-6 text-right text-[#71c8a8] font-semibold">
                      {user.score}
                    </td>

                    <td className="py-4 px-6 text-right text-gray-300">
                      {user.total || "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Keep practicing and climb your way up to become the next{" "}
            <span className="text-[#71c8a8] font-semibold">
              QuizWhiz Champion!
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LeaderBoard;
