const mongoose = require("mongoose");

const ChatbotDataSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ChatbotData", ChatbotDataSchema);
