const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
require("dotenv").config();
app.use(express.static("public"));

app.use(bodyparser.json());
app.set("view engine", "ejs");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.passwords,
  database: "Movies",
});

con.connect((err) => {
  if (err) console.log(err);
  console.log("Connected to database");
});

app.listen(3000, "localhost", () => {
  console.log("App is Listening on Port 3000");
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/data", (req, res) => {
  var data = req.query;
  con.query(
    `insert into newtable values("${data.name}","${data.genre}",${data.year})`,
    (err, result) => {
      if (err) console.log(err);
      else console.log("Added Data");
    }
  );
  res.send("Ok");
});

app.post("/data", (req, res) => {
  const data = req.body;
  con.query(
    `insert into newtable values("${data.Name}","${data.Genre}",${data.Year})`,
    (err, result) => {
      if (err) console.log(err);
      else console.log("Added Data");
    }
  );
  res.send("OK");
});
