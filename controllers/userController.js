// Login
export const getLogin = (req, res) => {
  res.render("login", { title: "Login" });
  console.log("hi");
};

// Logout
export const getLogout = (req, res) => {
  res.render("logout", { title: "Logout" });
};

// Join
export const getJoin = (req, res) => {
  res.render("join", { title: "Join" });
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
