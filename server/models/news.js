const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  category: String,
  tags: [String],
  image: String,
  timestamp: Date
});

module.exports = mongoose.model("News", NewsSchema);
