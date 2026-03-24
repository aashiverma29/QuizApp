require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const connectDB = require("./db");
const Score = require("./models/Score");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// Gemini setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ================= QUIZ GENERATE =================
app.post("/api/generate-quiz", async (req, res) => {
  const { subject, numQuestions } = req.body;

  if (!subject || !numQuestions) {
    return res
      .status(400)
      .json({ error: "Subject and number of questions are required" });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
Generate exactly ${numQuestions} multiple choice questions for the subject: ${subject}.
Each question must have 4 options and one correct answer index (0-based).

Return ONLY JSON:
[
  {
    "question": "Question text?",
    "options": ["A", "B", "C", "D"],
    "correct": 0
  }
]
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const cleanText = text.replace(/```json\n?|\n?```/g, "").trim();

    let questions;
    try {
      questions = JSON.parse(cleanText);
      if (!Array.isArray(questions)) throw new Error();
    } catch (err) {
      console.error("Parse error:", cleanText);
      return res.status(500).json({ error: "AI response invalid" });
    }

    res.json({ questions });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Quiz generation failed" });
  }
});

// ================= SAVE SCORE =================
app.post("/api/score", async (req, res) => {
  try {
    const { fullName, username, subject, score, total } = req.body;

    if (!username || score === undefined || !subject) {
      return res.status(400).json({
        message: "username, score, subject required",
      });
    }

    const newScore = new Score({
      fullName,
      username,
      subject,
      score,
      total,
    });

    await newScore.save();

    res.status(201).json({
      message: "Score saved successfully",
      data: newScore,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error saving score",
    });
  }
});

// ================= LEADERBOARD =================
app.get("/api/leaderboard", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(50);

    res.json(scores);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching leaderboard",
    });
  }
});

// ================= START SERVER =================
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
