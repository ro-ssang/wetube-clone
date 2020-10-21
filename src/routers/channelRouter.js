import express from "express";
import { getChannelDetail, getMe } from "../controllers/userController";
import routes from "../routes";

const channelRouter = express.Router();

// Me
channelRouter.get(routes.me, getMe);

// Channel Detail
channelRouter.get(routes.channelDetail(), getChannelDetail);

export default channelRouter;
