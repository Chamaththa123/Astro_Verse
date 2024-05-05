const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/UserController");
const verifyToken = require("../middleware/UserMiddleware");

// user routes
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
