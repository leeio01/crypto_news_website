const express = require("express");
const router = express.Router();
const axios = require("axios");
const News = require("../models/News");
const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// 🔁 Fetch -> Rewrite -> Store
router.post("/fetch", async (req, res) => {
  try {
    // Get basic headlines from CryptoPanic or NewsAPI (or use sample below)
    const headlines = [
      "Bitcoin drops 5% amid SEC uncertainty",
      "Ethereum gas fees fall to 6-month low"
    ];

    for (const title of headlines) {
      const rewritten = await openai.chat.completions.create({
        messages: [{
          role: "user",
          content: `Rewrite professionally: ${title}. Avoid financial advice.`
        }],
        model: "gpt-4",
      });

      const formatted = rewritten.choices[0].message.content;
      const slug = title.toLowerCase().replace(/ /g, "-");

      await News.create({
        title,
        slug,
        content: formatted,
        category: "Market",
        tags: ["crypto"],
        image: "", // optional
        timestamp: new Date()
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching news");
  }
});

// Get all news
router.get("/", async (req, res) => {
  const allNews = await News.find().sort({ timestamp: -1 });
  res.json(allNews);
});

// Get one news by slug
router.get("/:slug", async (req, res) => {
  const news = await News.findOne({ slug: req.params.slug });
  if (!news) return res.status(404).send("Not found");
  res.json(news);
});

module.exports = router;
