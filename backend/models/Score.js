const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
  }
);

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;