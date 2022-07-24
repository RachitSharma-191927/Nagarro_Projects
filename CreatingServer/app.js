const http = require("http");
const fs = require("fs");

const app = http.createServer((req, res) => {
  console.log("Server is Created");
  res.setHeader("content-type", "text/html");
  fs.readFile("../Pokemon/index.html", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });
});

app.listen(3000, "localhost", () => {
  console.log("Server Started");
});
