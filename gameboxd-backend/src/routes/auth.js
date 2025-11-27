const express = require("express");
const router = express.Router();

// TODO: Implement authentication routes
// POST /auth/register
// POST /auth/login
// GET /auth/me
// POST /auth/logout

router.post("/register", (req, res) => {
  res.json({ message: "Register endpoint - to be implemented" });
});

router.post("/login", (req, res) => {
  res.json({ message: "Login endpoint - to be implemented" });
});

module.exports = router;

