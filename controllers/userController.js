import passport from "passport";
import routes from "../routes";
import User from "../models/User";

// Login
export const getLogin = (req, res) => {
  res.render("login", { title: "Login" });
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

// Logout
export const getLogout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

// Join
export const getJoin = (req, res) => {
  res.render("join", { title: "Join" });
};

export const postJoin = async (req, res, next) => {
  const {
    body: { name, email, password, password1 },
  } = req;
  if (password !== password1) {
    res.status(400);
    res.redirect(routes.join);
  }
  try {
    // To do: Checking if there is already name and email
    const user = new User({ name, email });
    await User.register(user, password);
    next();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.redirect(routes.join);
  }
};

// User Detail
export const getUserDetail = (req, res) => {
  res.render("userDetail", { title: "User Detail" });
};

// Edit Profile
export const getEditProfile = (req, res) => {
  res.render("editProfile", { title: "Edit Profile" });
};

// Change Password
export const getChangePassword = (req, res) => {
  res.render("changePassword", { title: "Change Password" });
};
