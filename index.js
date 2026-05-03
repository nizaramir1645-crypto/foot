const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("*", async (req, res) => {
  const target = "https://cdndirector.dailymotion.com/cdn/live/video/x9yjnv4.m3u8?sec=5uuRnS5bAa15nENZkvS4D9wQ4WqxCQuGh_P8N7IANOCchtSD5r3mpgIPVmI_0YSgk0WeXKij5yC_ra-8AzpNrj942CdrzJo15WPKft7ZmsX8BJN6L-CVQf3HK182jdFu&dmTs=311689&dmV1st=99981483-72d8-5726-aecc-1566c7809082";

  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://www.dailymotion.com/"
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
