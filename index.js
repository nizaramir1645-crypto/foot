const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("*", async (req, res) => {
  const target = "http://atlan2025.me:80/Rochdi70sam/d3hm7lsqrh/534831";
  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "http://atlan2025.me/"
      }
    });
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Content-Type", "application/vnd.apple.mpegurl");
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
