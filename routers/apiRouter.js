import express from "express";
import { postCancel, postSubscribe } from "../controllers/userController";
import {
  postAddComment,
  postEraseLike,
  postRegisterLike,
} from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

// Like
apiRouter.post(routes.registerLike, postRegisterLike);
apiRouter.post(routes.eraseLike, postEraseLike);

// Subscribe
apiRouter.post(routes.subscribe, postSubscribe);
apiRouter.post(routes.cancel, postCancel);

// Comment
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
