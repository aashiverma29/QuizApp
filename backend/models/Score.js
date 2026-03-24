const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  fullName: String,
  username: { type: String, required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Score", scoreSchema);
