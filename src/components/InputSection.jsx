import React, { useState } from "react";

function InputSection() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [subject, setSubject] = useState("");
  const [numQuestions, setNumQuestions] = useState("");

  const handleQuestionsChange = (e) => {
    const value = Math.min(50, Number(e.target.value)); // limit max 50
    setNumQuestions(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !username || !subject || !numQuestions) {
      alert("Please fill out all fields before starting the quiz!");
      return;
    }
    alert(
      `Starting ${numQuestions} ${subject} questions for ${fullName} (@${username})!`
    );
  };

  return (
    <div className="mt-10 min-h-screen bg-[#0b0e26] flex flex-col items-center justify-center px-6 py-10">
      <div className="bg-white shadow-lg shadow-blue-500 rounded-xl p-6 w-full max-w-md sm:max-w-lg">
        <h1 className="text-2xl sm:text-2xl font-bold text-center text-[#0b0e26] mb-6">
          Enter Details
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
          {/* Full Name */}
          <div className="flex flex-col w-full ">
            <label htmlFor="fullName" className="text-gray-700 font-medium mb-1">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#71c8a8]"
              required
            />
          </div>

          {/* Username */}
          <div className="flex flex-col w-full">
            <label htmlFor="username" className="text-gray-700 font-medium mb-1">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#71c8a8]"
              required
            />
          </div>

          {/* Subject Selection */}
          <div className="flex flex-col w-full">
            <label htmlFor="subject" className="text-gray-700 font-medium mb-1">
              Select Subject:
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#71c8a8]"
              required
            >
              <option value="">-- Choose a subject --</option>
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
              <option value="DSA">DSA</option>
              <option value="Cpp">C++</option>
              <option value="React">React.js</option>
            </select>
          </div>

          {/* Number of Questions */}
          <div className="flex flex-col w-full">
            <label
              htmlFor="numQuestions"
              className="text-gray-700 font-medium mb-1"
            >
              Number of Questions (Max 50):
            </label>
            <input
              type="number"
              id="numQuestions"
              value={numQuestions}
              onChange={handleQuestionsChange}
              placeholder="Enter number"
              min="1"
              max="50"
              className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#71c8a8]"
              required
            />
          </div>

          {/* Start Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="bg-[#71c8a8] text-[#0b0e26] px-8 py-2.5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200"
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InputSection;

