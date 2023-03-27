const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const port = 3000;
const host = "127.0.0.1";

// const server = http.createServer(async (req, res) => {
//   if (req.url === "/herobg") {
//     let imagePath = path.join("database", "images");
//     imagePath = path.join(imagePath, "hero-bg.jpg");
//     console.log(imagePath);
//     await fs.readFile(imagePath, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.write("Not Found The Image!");
//       } else {
//         console.log(imagePath);
//         res.write(imagePath);
//       }
//       res.end();
//     });
//   } else if (req.url === "/hi") {
//     res.write("Hello World!");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.write("Not Found! :(");
//     res.end();
//   }
// });

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
