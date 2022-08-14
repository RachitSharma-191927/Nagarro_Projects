const express = require("express");
const passport = require("passport");
const pasport = require("passport");
var GoogleStrategy = require("passport-google-oidc");
var db = require("../config/dbconfig");
const session = require("express-session");
const router = express.Router();
const register = require("../Models/register");

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.post("/savedata", async (req, res) => {
  const data = new register({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  await data.save().then((res) => {
    console.log(res);
  });
  res.send("0k :)");
});

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);
router.get("/success", (req, res) => {
  console.log("Succesfully Added the data");
  res.send("Done and Done In the file");
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: "/oauth2/redirect/google",
      scope: ["profile", "email"],
    },
    function verify(issuer, profile, cb) {
      register.find(
        {
          name: profile.displayName,
        },
        (err, dat) => {
          if (err) {
            return cb(err);
          }
          if (dat.length == 0) {
            console.log(profile.email);
            const data = profile;
            // register
            //   .create({
            //     name: profile.name,
            //     email: profile.email,
            //     age: profile.age,
            //   })
            //   .then(() => {
            // });
            return cb(null, data);
          } else {
            console.log(dat);
            console.log("In the else Part");
            const data = profile;
            console.log("Data is already Present");
            return cb(null, data);
          }
        }
      );
    }
  )
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/",
  })
);
module.exports = router;
