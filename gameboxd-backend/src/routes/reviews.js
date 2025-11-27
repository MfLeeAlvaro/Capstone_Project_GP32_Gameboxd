const express = require("express");
const router = express.Router();

// TODO: Implement review routes
// GET /reviews
// POST /reviews
// GET /reviews/:id
// PUT /reviews/:id
// DELETE /reviews/:id

router.get("/", (req, res) => {
  res.json({ message: "Reviews endpoint - to be implemented" });
});

module.exports = router;

