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
  const avatarUrl = "/static/profile.png";
  if (password !== password1) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const newUser = new User({ name, email, avatarUrl });
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
  req.logout();
  res.redirect(routes.home);
};

// User Detail
export const getUserDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail" });
};

// Edit Profile
export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "Edit Profile" });
};

export const postEditProfile = async (req, res) => {
  const {
    body: { name },
    file: { path: avatarUrl },
    user: { id: loggedUserId },
  } = req;
  try {
    await User.findByIdAndUpdate(loggedUserId, { avatarUrl, name });
    res.redirect(routes.userDetail(loggedUserId));
  } catch (err) {
    res.status(304);
    res.redirect(routes.editProfile(loggedUserId));
  }
};

// Change Password
export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
