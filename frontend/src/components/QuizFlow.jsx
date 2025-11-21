// src/components/QuizFlow.jsx
import React, { useState } from "react";
import InputSection from "./InputSection";
import QuizSection from "./Quiz";

export default function QuizFlow() {
  const [quizData, setQuizData] = useState(null); // ab questions + config dono
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStartQuiz = async (config) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/generate-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: config.subject,
          numQuestions: config.numQuestions,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate quiz");
      }

      setQuizData({
        ...config,
        questions: data.questions,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setQuizData(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0e26] text-white flex items-center justify-center">
        <p className="text-xl">🧠 Generating your quiz...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0b0e26] text-white flex flex-col items-center justify-center p-6">
        <p className="text-red-400 text-center">❌ {error}</p>
        <button
          onClick={handleRestart}
          className="mt-4 px-6 py-2 bg-[#71c8a8] text-[#0b0e26] rounded-full"
        >
          Try Again
        </button>
      </div>
    );
  }

  return quizData ? (
    <QuizSection quizData={quizData} onRestart={handleRestart} />
  ) : (
    <InputSection onStartQuiz={handleStartQuiz} />
  );
}