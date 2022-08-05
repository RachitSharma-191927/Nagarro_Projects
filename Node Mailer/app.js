const bodyParser = require("body-parser");
const express = require("express");
const { appendFile } = require("fs");
const nodemailer = require("nodemailer");
var multer = require("multer");
var upload = multer();

const app = express();
app.listen(3000, "localhost", () => {
  console.log("App Created");
});

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "82992a150c40ff",
    pass: "0333f074308516",
  },
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { redirect: false });
});

app.post("/sendemail", (req, res) => {
  let mailDetails = {
    from: req.body.emails,
    to: "rachitsharma3642@gmail.com",
    subject: "Test mail",
    text: req.body.data,
  };

  transporter.sendMail(mailDetails, (err, data) => {
    if (err) console.log(err);
    else console.log("Mail Sent");
  });
  res.redirect("/");
});
