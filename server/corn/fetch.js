const cron = require("node-cron");
const axios = require("axios");

// Run every 30 mins
cron.schedule("*/30 * * * *", async () => {
  await axios.post("http://localhost:5000/api/news/fetch");
});
