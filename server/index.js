require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
const newsRoutes = require("./routes/news");
app.use("/api/news", newsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
