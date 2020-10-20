import passport from "passport";
import User from "../models/User";
import routes from "../routes";

// Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password1 },
  } = req;
  if (password !== password1) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const newUser = new User({ name, email });
      await User.register(newUser, password);
      next();
    } catch (err) {
      console.log(err);
      res.redirect(routes.join);
    }
  }
};

// Login
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

// Logout
export const getLogout = (req, res) => {
  res.send("Logout Page");
};

// User Detail
export const getUserDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail" });
};

// Edit Profile
export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

// Change Password
export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
