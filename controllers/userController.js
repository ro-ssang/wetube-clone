import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import Video from "../models/Video";

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

// Google Login
export const getGoogleLogin = passport.authenticate("google", {
  scope: ["profile", "email"],
});

export const postGoogleLogin = (req, res) => res.redirect(routes.home);

export const getGoogleCallback = passport.authenticate("google", {
  failureRedirect: routes.login,
});

export const GoogleCallback = async (_, __, profile, cb) => {
  const {
    _json: { sub: googleId, name, picture: avatarUrl, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = googleId;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({ name, email, avatarUrl, googleId });
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
export const getUserDetail = async (req, res) => {
  const {
    params: { id: userId },
  } = req;
  try {
    const searchingUser = await User.findById(userId);
    res.render("userDetail", { title: "User Detail", user: searchingUser });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Profile
export const getEditProfile = (req, res) => {
  res.render("editProfile", { title: "Edit Profile" });
};

export const postEditProfile = async (req, res) => {
  const {
    params: { id },
    body: { name },
    file,
  } = req;
  try {
    if (file) {
      await User.findByIdAndUpdate(id, { name, avatarUrl: `/${file.path}` });
    } else {
      await User.findByIdAndUpdate(id, { name });
    }
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect(routes.userDetail(id));
  }
};

// Change Password
export const getChangePassword = (req, res) => {
  res.render("changePassword", { title: "Change Password" });
};

export const postChangePassword = async (req, res) => {
  const {
    params: { id },
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  if (newPassword !== newPassword1) {
    res.status(400);
    res.redirect(routes.changePassword(id));
    return;
  }
  try {
    const user = await User.findById(id);
    await user.changePassword(oldPassword, newPassword);
    res.redirect(routes.userDetail(id));
  } catch (error) {
    console.log(error);
    res.status(400);
    res.redirect(routes.changePassword(id));
  }
};

// Subscribe
export const postSubscribe = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const video = await Video.findById(videoId).populate("creator");
    const loggedUser = await User.findById(userId);
    video.creator.subscribers.push(userId);
    video.creator.save();
    loggedUser.subscribe.push(video.creator.id);
    loggedUser.save();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};

export const postCancel = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const video = await Video.findById(videoId).populate("creator");
    const loggedUser = await User.findById(userId);
    video.creator.subscribers = video.creator.subscribers.filter((item) => {
      return item.toString() !== userId;
    });
    video.creator.save();
    loggedUser.subscribe = loggedUser.subscribe.filter((item) => {
      return item.toString() !== video.creator.id;
    });
    loggedUser.save();
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(400);
  } finally {
    res.end();
  }
};
