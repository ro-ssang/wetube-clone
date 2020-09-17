import express from "express";
import {
  getDeleteVideo,
  getEditVideo,
  getUpload,
  getVideoDetail,
} from "../controllers/videoController";
import routes from "../routes";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);

// Video Detail
videoRouter.get(routes.videoDetail, getVideoDetail);

// Edit Video
videoRouter.get(routes.editVideo, getEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, getDeleteVideo);

export default videoRouter;
