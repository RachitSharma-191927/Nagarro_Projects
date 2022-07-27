const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");
const session = require("express-session");
const app = express();

app.listen(3000, "localhost", () => {
  console.log("Server is Created and Running");
});
app.set("view engine", "ejs");

app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.render("view");
});

app.get("/home", (req, res) => {
  res.render("view");
});
