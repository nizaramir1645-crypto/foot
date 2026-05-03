const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("*", async (req, res) => {
  const base = "http://84.17.50.102/nbatv";
  const path = req.path === "/" ? "/index.m3u8" : req.path;
  const target = base + path;

  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "VLC/3.0.18 LibVLC/3.0.18",
        "Referer": "http://84.17.50.102/"
      }
    });

    res.set("Access-Control-Allow-Origin", "*");
    res.set("Content-Type", response.headers.get("content-type") || "application/octet-stream");
    response.body.pipe(res);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
