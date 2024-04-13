import express from "express";
import passport from "passport";
const router = express.Router();

router
  .route("/")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router.route("/callback").get(
  passport.authenticate("google", { 
    failureRedirect: "http://localhost:5173/",
    successRedirect: "http://localhost:5173/",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

export default router;
