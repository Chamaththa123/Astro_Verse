const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
require("dotenv").config();
const userRoutes = require("./route/UserRoute");
const cors = require("cors");
// Importing express module
const app = express();

const corsOptions = {
  origin: '*', // Allow only requests from this origin
};

// Use CORS middleware with options
app.use(cors(corsOptions));


// Defining port number
const PORT = process.env.PORT || 8000;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

app.use(bodyParser.json());

app.use("/api/users", userRoutes);
// Connecting to the database
connectDB();

// Start the server and listen on the 8000 port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
