const mongoose = require("mongoose");

const HighScoresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});


const AppHighScores = mongoose.model("Highscore", HighScoresSchema);

module.exports = AppHighScores;