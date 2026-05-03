const express = require("express");
const fetch = require("node-fetch");

const app = express();

const BASE = "http://57.131.51.215/auth/ynB0vyJ8WO9D8XgqeZDbCZGDYzJ170vLmoiN7At9w2omH2IUMn2M6nWeozCykFhGznIwK7qqxk_ycVVldib8INnAA5to9360IXFWuN88KuXvQaAjQ7047BlgtEnyrH3bBsiJc0ba4Rz-SsJbcEpodrtwaHtIHa1d0JNLRGxdlgXcTFbfHtGHmeYSk_Y0sIl6ziMnhbQx2OLaXEnAHzrjU72DBENentK2Yyo3fyFi2sHj-uSIKUkSRjBwDgbR_IvKssgYJRRn7YPX45ZCY1QXpt8DXcxYOww8LO68p_efZelIAP2oMzV7Fljgb22UwW2LMesUsx0Se4woN4IFAJ9KiMbUspc0i4GYSXLHp6D3GEWholj0G7_VXwfzkWxzbTT3rleUD1hHcD15mD0cSfzB_cW0OsxzsFIKKK4kasvNHijvJiu14vkHl9vcb7OIJA-3v_uPZuoy5SLKxZ1v_bIfPAwa08o-hx-PTZKVuEERjXIFAuKVFVCmMFYRHoWJBE_-oRoBDjHPxYsz24Y_qbbx-nurk5kn9nICxiZ4SOtKagHTsOLIF3y9E-D1KKam5zIYHCNq7SSdRMUwv6jtt6m8GB4VhiwA27mmT3gBl3B_UWSqpkMnWe9lQAMjVmGkoAIe";

app.get("*", async (req, res) => {
  const path = req.path === "/" ? "/index.m3u8" : req.path;
  const target = BASE + path;

  try {
    const response = await fetch(target, {
      headers: {
        "User-Agent": "VLC/3.0.18 LibVLC/3.0.18",
        "Referer": "http://57.131.51.215/"
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
