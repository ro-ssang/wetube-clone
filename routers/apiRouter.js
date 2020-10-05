import express from "express";
import { postCancel, postSubscribe } from "../controllers/userController";
import {
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

export default apiRouter;
