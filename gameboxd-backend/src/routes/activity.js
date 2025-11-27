const express = require("express");
const router = express.Router();

// TODO: Implement activity routes
// GET /activity
// GET /activity/user/:userId

router.get("/", (req, res) => {
  res.json({ message: "Activity endpoint - to be implemented" });
});

module.exports = router;

