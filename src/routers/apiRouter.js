import express from "express";
import {
  postAddComment,
  postDeleteComment,
} from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

// Comment
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.deleteComment, postDeleteComment);

export default apiRouter;
