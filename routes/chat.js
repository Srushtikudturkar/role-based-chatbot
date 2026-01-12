const express = require("express");
const ChatbotData = require("../models/ChatbotData");

const router = express.Router();

router.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;

    const data = await ChatbotData.findOne({
      question: { $regex: message, $options: "i" }
    });

    if (data) {
      res.json({ reply: data.answer });
    } else {
      res.json({ reply: "Sorry, I don't understand that yet." });
    }
  } catch (err) {
    res.status(500).json({ reply: "Error processing message" });
  }
});

module.exports = router;
