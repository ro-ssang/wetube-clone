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

// Github Login
export const getGihubLogin = passport.authenticate("github");

export const postGithubLogin = (req, res) => res.redirect(routes.home);

export const getGihubCallback = passport.authenticate("github", {
  failureRedirect: routes.login,
});

export const githubCallback = async (_, __, profile, cb) => {
  const {
    _json: { id: githubId, avatar_url: avatarUrl, name },
  } = profile;
  const email = profile.emails.filter((item) => item.primary)[0].value;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = githubId;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({ name, email, avatarUrl, githubId });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

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
