import express from "express";
import {
  postEraseLike,
  postRegisterLike,
} from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.registerLike, postRegisterLike);
apiRouter.post(routes.eraseLike, postEraseLike);

export default apiRouter;
