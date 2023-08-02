const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

// Middlewares
app.use(express.json());

// Connect to database
const connectDB = require("./config/database");
connectDB();

// Config CORS
app.use(cors());
