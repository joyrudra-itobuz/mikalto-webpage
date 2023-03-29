import * as http from "http";
import * as fs from "fs";

const port = "3000";
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/hi") {
    res.write("Hey");
    res.end();
  } else {
    res.write("Hi?");
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server Running at http://${host}:${port}`);
});
