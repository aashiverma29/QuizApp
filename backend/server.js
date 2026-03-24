// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const connectDB = require("./db");
const Score = require("./models/score");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
connectDB();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate-quiz', async (req, res) => {
  const { subject, numQuestions } = req.body;

  if (!subject || !numQuestions) {
    return res.status(400).json({ error: "Subject and number of questions are required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Generate exactly ${numQuestions} multiple choice questions for the subject: ${subject}.
      Each question must have 4 options and one correct answer index (0-based).
      Return ONLY a valid JSON array in this exact format:
      [
        {
          "question": "Question text?",
          "options": ["Option A", "Option B", "Option C", "Option D"],
          "correct": 0
        }
      ]
      Do not add any other text, explanation, or markdown.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Clean potential markdown
    const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();

    let questions;
    try {
      questions = JSON.parse(cleanText);
      // Optional: validate structure
      if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error("Invalid format");
      }
    } catch (e) {
      console.error("Parse error. Raw response:", cleanText);
      return res.status(500).json({
        error: "Failed to parse AI response. Try again."
      });
    }

    res.json({ questions });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({
      error: "Failed to generate quiz. Check API key or try again."
    });
  }
});

//Post Route
app.post("/api/scores", async (req, res) => {
  try {
    const { username, score, subject } = req.body;

    if (!username || score === undefined || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newScore = new Score({
      username,
      score,
      subject,
    });

    await newScore.save();

    res.status(201).json({
      message: "Score saved successfully",
      data: newScore,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving score",
      error: error.message,
    });
  }
});

// Get Route
app.get("/api/leaderboard", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 });

    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching leaderboard",
      error: error.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});