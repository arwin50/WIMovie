import { User } from "../models/user.js";

export const usermount = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const user = await User.findById(req.user._id)
      console.log("user", user);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(401).json({ message: "User not authenticated" });
  }
};

export const userlogout = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5173");
  });
};
