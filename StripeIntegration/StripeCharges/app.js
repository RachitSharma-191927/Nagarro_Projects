const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const routes = require("./routes/main");

const app = express();
const stripe = require("stripe")(process.env.stripeKey);
const YOUR_DOMAIN = "http://localhost:3000";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use(routes);

app.listen(3000, "localhost", () => {
  console.log("Connected");
});
