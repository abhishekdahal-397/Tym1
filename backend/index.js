// index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Added this line to import the cors middleware

const app = express();
const PORT = 3002;
// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "*" })); // Allow all origins

// Define the /date route
app.get("/date", (req, res) => {
	const now = new Date();

	res.send(new Date());
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
