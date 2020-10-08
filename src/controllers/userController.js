// Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

// Login
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};

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
