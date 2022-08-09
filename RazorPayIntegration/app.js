const express = require("express");
const Razorpay = require("razorpay");
var cors = require("cors");
const crypto = require("crypto");
const bodyparser = require("body-parser");
require("dotenv").config();

const razorpayInstance = new Razorpay({
  key_id: process.env.razorKey,
  key_secret: process.env.razorsecret,
});

const app = express();
app.use(bodyparser.json());
app.use(cors());

app.post("/createOrder", (req, res) => {
  // amount in the smallest currency unit
  var options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "Reciept Id",
  };

  // Creating Order Id For the particular Order;
  razorpayInstance.orders.create(options, (err, order) => {
    if (!err) res.json(order);
    else res.send(err);
  });

  // For Order Id Creation
});

// Verify The Integratin

//Inside app.js
app.post("/verifyOrder", (req, res) => {
  const { order_id, payment_id } = req.body();
  const razorpay_signature = req.headers["x-razorpay-signature"];
  const key_secret = process.env.razorsecret;
  let hmac = crypto.createHmac("sha256", key_secret);
  hmac.update(order_id + "|" + payment_id);
  const generated_signature = hmac.digest("hex");
  if (razorpay_signature === generated_signature) {
    res.json({ success: true, message: "Payment has been verified" });
  } else res.json({ success: false, message: "Payment verification failed" });
});

//Listening On Port
app.listen("3000", "localhost", () => {
  console.log("Server is Listening on Port ", 3000);
});
