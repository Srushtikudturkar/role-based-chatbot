const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// 🔽 ADD THESE TWO LINES HERE
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/chat", require("./routes/chat"));


app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
