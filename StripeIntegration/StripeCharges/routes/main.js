const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.stripeKey);

const STRIPEHANDLER = require("../controllers/stripehandler");

router.post("/create-Customer", STRIPEHANDLER.createNewCustomer);
router.post("/add-Card", STRIPEHANDLER.addNewCard);
router.post("/create-Charges", STRIPEHANDLER.createCharges);

module.exports = router;
