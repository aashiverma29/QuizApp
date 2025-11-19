import React, { useState } from "react";

function QuizSection() {
  // Sample quiz data (can be replaced by API data later)
  const questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Transfer Machine Language",
        "Hyperlink Text Making Language",
        "Home Tool Markup Language",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "Which keyword is used to define a constant in JavaScript?",
      options: ["let", "var", "const", "constant"],
      correct: 2,
    },
    {
      id: 3,
      question: "In React, which hook is used to manage state?",
      options: ["useFetch", "useState", "useEffect", "useReducer"],
      correct: 1,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (qIndex, optionIndex) => {
    if (selectedAnswers[qIndex] !== undefined) return; // Prevent reselecting once answered
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optionIndex });
  };

  const handleFinalSubmit = () => {
    alert("Your quiz has been submitted! Score will be displayed soon.");
    // Later: you can store username, subject, and score in your database or leaderboard
  };


  return (
    <div className="min-h-screen bg-[#0b0e26] text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-[#71c8a8]">Quiz Time!</h1>

      <div className="w-full max-w-3xl space-y-10">
        {questions.map((q, qIndex) => (
          <div
            key={q.id}
            className="bg-white/10 border border-[#71c8a8]/30 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">
              {qIndex + 1}. {q.question}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {q.options.map((option, oIndex) => {
                const isSelected = selectedAnswers[qIndex] === oIndex;
                const isCorrect = q.correct === oIndex;
                const userSelected = selectedAnswers[qIndex];

                let bgColor = "bg-white/10 hover:bg-[#71c8a8]/20";
                if (userSelected !== undefined) {
                  if (isSelected && !isCorrect) bgColor = "bg-red-500/60";
                  if (isCorrect) bgColor = "bg-[#71c8a8]/80 text-black";
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleAnswerClick(qIndex, oIndex)}
                    className={`rounded-xl p-3 text-left font-medium transition-colors duration-200 ${bgColor}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Show correct answer feedback */}
            {selectedAnswers[qIndex] !== undefined && (
              <p className="mt-4 text-m text-[white]">
                ✅ Correct answer : {q.options[q.correct]}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* Final Submit Button */}
      <div className="flex justify-center mt-15">
        <button
          onClick={handleFinalSubmit}
          className="bg-[#71c8a8] text-[#0b0e26] text-lg sm:text-xl font-bold px-5 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
        >
          Final Submit
        </button>
      </div>

    </div>
  );
}

export default QuizSection;
