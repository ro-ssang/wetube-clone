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
  const avatarUrl = "static/profile.png";
  if (password !== password1) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
    return;
  }
  try {
    const newUser = new User({ name, email, avatarUrl });
    await User.register(newUser, password);
    next();
  } catch (err) {
    console.log(err);
    res.redirect(routes.join);
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
    res.redirect(`${routes.channel}${routes.me}`);
  } catch (err) {
    res.redirect(`${routes.user}${routes.editProfile}`);
  }
};

// Change Password
export const getChangePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};

export const postChangePassword = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
    user: { id: loggedUserId },
  } = req;
  if (newPassword !== newPassword1) {
    res.status(400);
    res.redirect(`${routes.user}${routes.changePassword}`);
    return;
  }
  try {
    const user = await User.findById(loggedUserId);
    await user.changePassword(oldPassword, newPassword);
    res.redirect(`${routes.channel}${routes.me}`);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.redirect(`${routes.user}${routes.changePassword}`);
  }
};

// Me
export const getMe = (req, res) => {
  const { user: loggedUser } = req;
  res.render("channelDetail", { pageTitle: "My Channel", user: loggedUser });
};

// Channel Detail
export const getChannelDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("channelDetail", { pageTitle: user.name, user });
  } catch (err) {
    console.log(err);
    res.status(404);
    res.render("404");
  }
};
