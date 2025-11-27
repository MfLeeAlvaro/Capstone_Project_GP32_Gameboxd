const express = require("express");
const router = express.Router();

// TODO: Implement game routes
// GET /games
// GET /games/:id
// GET /games/search?q=query

router.get("/", (req, res) => {
  res.json({ message: "Games endpoint - to be implemented" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "Game detail endpoint - to be implemented" });
});

module.exports = router;

