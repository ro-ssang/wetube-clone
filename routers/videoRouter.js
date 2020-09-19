import express from "express";
import {
  getDeleteVideo,
  getEditVideo,
  getUpload,
  getVideoDetail,
  postUpload,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), getVideoDetail);

// Edit Video
videoRouter.get(routes.editVideo, getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, getDeleteVideo);

export default videoRouter;
