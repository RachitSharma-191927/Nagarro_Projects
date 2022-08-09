const express = require("express");
const app = express();
const bodyparser = require("body-parser");
require("dotenv").config();

const routes = require("./api/index");

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Express Server Started");
});

app.route("/books").post(routes.addBook);
app.route("/searchBook").post(routes.searBook);
app.route("/searchBookByHash").post(routes.searBook);
app.route("/deleteBooks").post(routes.delBook);

app.listen(8000, "localhost", () => {
  console.log("Express Server Started");
});
