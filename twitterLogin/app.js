const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const db = require("./config/dbconfig");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const app = express();
app.use(
  session({
    secret: "Keyboard",
    resave: false,
    saveUninitialized: false,
  })
);
const register = require("./Models/register");
const authRoute = require("./Routes/auth");
const passport = require("passport");
app.set("view engine", "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
//Routes Middleware
app.use(authRoute);

app.use(passport.authenticate("session"));

app.listen(3000, "localhost", () => {
  console.log("App listening on 3000 port");
});
