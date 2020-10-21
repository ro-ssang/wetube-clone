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

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  channel: CHANNEL,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: VIDEO_DATAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
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
};

export default routes;
