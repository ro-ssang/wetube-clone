import multer from "multer";
import routes from "./routes";

const multerAvatar = multer({ dest: "uploads/avatars" });
const multerVideo = multer({ dest: "uploads/videos" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const uploadAvatar = multerAvatar.single("avatarFile");

export const uploadVideo = multerVideo.single("videoFile");
