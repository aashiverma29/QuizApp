// src/components/QuizSection.jsx
import React, { useState } from "react";

function QuizSection({ quizData, onRestart }) {
  // ✅ Directly use quizData.questions
  const { questions, fullName, username, subject } = quizData;

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerClick = (qIndex, optionIndex) => {
    if (selectedAnswers[qIndex] !== undefined) return;
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optionIndex });
  };

  const handleFinalSubmit = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correct) score++;
    });
    alert(`Quiz submitted!\nScore: ${score}/${questions.length}`);
    onRestart();
  };

  const allAnswered = questions.length > 0 && 
                     Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="min-h-screen bg-[#0b0e26] text-white flex flex-col items-center py-12 px-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-[#71c8a8]">
        Quiz Time!
      </h1>
      <p className="mb-6 text-white/80">
        Subject: <span className="font-semibold">{subject}</span> | 
        Questions: {questions.length}
      </p>

      <div className="w-full max-w-3xl space-y-8">
        {questions.map((q, qIndex) => {
          const userAnswer = selectedAnswers[qIndex];
          const isAnswered = userAnswer !== undefined;
          const isCorrect = isAnswered && userAnswer === q.correct;

          return (
            <div
              key={q.id || qIndex}
              className="bg-white/10 border border-[#71c8a8]/30 rounded-2xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">
                {qIndex + 1}. {q.question}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {q.options.map((option, oIndex) => {
                  const isSelected = userAnswer === oIndex;
                  const isCorrectOption = oIndex === q.correct;

                  let bgColor = "bg-white/10 hover:bg-[#71c8a8]/20";
                  let textColor = "text-white";

                  if (isAnswered) {
                    if (isSelected && isCorrectOption) {
                      bgColor = "bg-[#71c8a8]/80";
                      textColor = "text-black";
                    } else if (isSelected && !isCorrectOption) {
                      bgColor = "bg-red-500/60";
                    } else if (isCorrectOption) {
                      bgColor = "bg-green-500/40";
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswerClick(qIndex, oIndex)}
                      disabled={isAnswered}
                      className={`rounded-xl p-3 text-left font-medium transition-colors duration-200 ${bgColor} ${textColor} disabled:cursor-default`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <p className="mt-3 text-sm text-white/90">
                  ✅ Correct answer:{" "}
                  <span className="font-semibold">{q.options[q.correct]}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <button
          onClick={handleFinalSubmit}
          disabled={!allAnswered}
          className={`px-8 py-3.5 rounded-2xl font-bold text-lg transition-all duration-200 ${
            allAnswered
              ? "bg-[#71c8a8] text-[#0b0e26] hover:scale-105 shadow-md"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Final Submit
        </button>
      </div>
    </div>
  );
}

export default QuizSection;