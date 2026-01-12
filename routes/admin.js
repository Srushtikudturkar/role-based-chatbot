const express = require("express");
const ChatbotData = require("../models/ChatbotData");

const router = express.Router();

// ADD chatbot data
router.post("/add", async (req, res) => {
  try {
    const data = new ChatbotData(req.body);
    await data.save();
    res.json({ message: "Data added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding data" });
  }
});

// VIEW all chatbot data
router.get("/all", async (req, res) => {
  try {
    const data = await ChatbotData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching data" });
  }
});

module.exports = router;
// UPDATE chatbot data
router.put("/update/:id", async (req, res) => {
  try {
    await ChatbotData.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// DELETE chatbot data
router.delete("/delete/:id", async (req, res) => {
  try {
    await ChatbotData.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});
