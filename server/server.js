const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/herobg") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let imagePath = path.join("database", "images");
    imagePath = path.join(imagePath, "hero-bg.jpg");
    console.log(imagePath);
    res.write(imagePath);
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on port http://${host}:${port}`);
});
