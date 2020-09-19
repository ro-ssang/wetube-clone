import express from "express";
import multer from "multer";
import {
  getDeleteVideo,
  getEditVideo,
  getUpload,
  getVideoDetail,
  postUpload,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();
const uploadVideo = multer({ dest: "uploads/videos/" });

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo.single("videoFile"), postUpload);

// Video Detail
videoRouter.get(routes.videoDetail, getVideoDetail);

// Edit Video
videoRouter.get(routes.editVideo, getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, getDeleteVideo);

export default videoRouter;
