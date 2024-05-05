const userService = require("../service/UserService");

// Function to handle user registration
async function registerUser(req, res) {
  try {
    const userData = req.body;

    const user = await userService.registerUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to handle user login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const { token, user } = await userService.loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

module.exports = { registerUser, loginUser };
