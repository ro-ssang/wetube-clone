// Global routes
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// Video routes
const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEO_DATAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

// User routes
const USER = "/user";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Channel routes
const CHANNEL = "/channel";
const ME = "/me";
const CHANNEL_DETAIL = "/:id";

// Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK = "/auth/google/callback";

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  channel: CHANNEL,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: (id) => {
    if (id) {
      return `${routes.video}/${id}`;
    }
    return VIDEO_DATAIL;
  },
  editVideo: (id) => {
    if (id) {
      return `${routes.video}/${id}/edit-video`;
    }
    return EDIT_VIDEO;
  },
  deleteVideo: (id) => {
    if (id) {
      return `${routes.video}/${id}/delete-video`;
    }
    return DELETE_VIDEO;
  },
  user: USER,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  channel: CHANNEL,
  me: ME,
  channelDetail: (id) => {
    if (id) {
      return `${routes.channel}/${id}`;
    }
    return CHANNEL_DETAIL;
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK,
};

export default routes;
