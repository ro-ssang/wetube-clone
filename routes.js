// Global
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";
const JOIN = "/join";
const SEARCH = "/search";

// User
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// Video
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

// API
const API = "/api";
const REGISTER_LIKE = "/:id/like-up";
const ERASE_LIKE = "/:id/like-down";

const routes = {
  home: HOME,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if (id) {
      return `${USERS}/${id}`;
    }
    return USER_DETAIL;
  },
  editProfile: (id) => {
    if (id) {
      return `${USERS}/${id}/edit-profile`;
    }
    return EDIT_PROFILE;
  },
  changePassword: (id) => {
    if (id) {
      return `${USERS}/${id}/change-password`;
    }
    return CHANGE_PASSWORD;
  },
  videos: VIDEOS,
  videoDetail: (id) => {
    if (id) {
      return `${VIDEOS}/${id}`;
    }
    return VIDEO_DETAIL;
  },
  upload: UPLOAD,
  editVideo: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/edit-video`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: (id) => {
    if (id) {
      return `${VIDEOS}/${id}/delete-video`;
    }
    return DELETE_VIDEO;
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
  api: API,
  registerLike: REGISTER_LIKE,
  eraseLike: ERASE_LIKE,
};

export default routes;
