// Global routes
const HOME = "/";
const SEARCH = "/search";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "logout";

// Video routes
const VIDEO = "/video";
const UPLOAD = "/upload";
const VIDEO_DATAIL = "/:id";
const EDIT_VIDEO = "/:id/edit-video";
const DELETE_VIDEO = "/:id/delete-video";

// User routes
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

const routes = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  video: VIDEO,
  upload: UPLOAD,
  videoDetail: VIDEO_DATAIL,
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO,
  user: USER,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
};

export default routes;
