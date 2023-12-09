const http = require("http");
const { createSurvey } = require("./controller/survey");

function doOnRequest(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/api/form" && req.method === "POST") {
    createSurvey(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Route Not Found: Please use the api/form endpoint",
      })
    );
  }
}
const server = http.createServer(doOnRequest);

const PORT = 9001;

server.listen(PORT);
