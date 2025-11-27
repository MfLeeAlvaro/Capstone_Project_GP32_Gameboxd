const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/database");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Gameboxd API running");
});

// API Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/games", require("./src/routes/games"));
app.use("/api/reviews", require("./src/routes/reviews"));
app.use("/api/activity", require("./src/routes/activity"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

