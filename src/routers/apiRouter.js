import express from "express";
import { postAddComment } from "../controllers/videoController";
import routes from "../routes";

const apiRouter = express.Router();

// Comment
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
