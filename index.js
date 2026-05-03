addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname + url.search;

  let base;

  if (url.pathname.includes("dailymotion") || url.pathname === "/dm") {
    base = "https://cdndirector.dailymotion.com/cdn/live/video";
  } else {
    base = "http://57.131.51.215/live/niv@bask/bask@niva";
  }

  const target = url.pathname === "/" 
    ? "https://cdndirector.dailymotion.com/cdn/live/video/x9yjnv4.m3u8?sec=5uuRnS5bAa15nENZkvS4D9wQ4WqxCQuGh_P8N7IANOCchtSD5r3mpgIPVmI_0YSgk0WeXKij5yC_ra-8AzpNrj942CdrzJo15WPKft7ZmsX8BJN6L-CVQf3HK182jdFu&dmTs=311689&dmV1st=99981483-72d8-5726-aecc-1566c7809082"
    : base + path;

  const res = await fetch(target, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.dailymotion.com/"
    }
  });

  const headers = new Headers(res.headers);
  headers.set("Access-Control-Allow-Origin", "*");

  return new Response(res.body, {
    status: res.status,
    headers: headers
  });
}
