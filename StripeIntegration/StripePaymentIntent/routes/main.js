var express = require("express");
var router = express.Router();
const stripe = require("stripe")(process.env.stripeKey);
router.post("/", async function (req, res, next) {
  var paymentMethod = await stripe.paymentMethods.create({
    type: "card",
    card: {
      number: "42424242424242",
      exp_month: 9,
      exp_year: 2023,
      cvc: "314",
    },
  });

  paymentIntent = await stripe.paymentIntents.create({
    payment_method: paymentMethod.id,
    amount: 75 * 100, // USD*100
    currency: "inr",
    confirm: true,
    payment_method_types: ["card"],
  });
  res.send(paymentIntent);
});

module.exports = router;
