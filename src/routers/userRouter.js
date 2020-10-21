import express from "express";
import {
  getChangePassword,
  getEditProfile,
  postChangePassword,
  postEditProfile,
} from "../controllers/userController";
import { uploadAvatar } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, uploadAvatar, postEditProfile);

// Change Password
userRouter.get(routes.changePassword, getChangePassword);
userRouter.post(routes.changePassword, postChangePassword);

export default userRouter;
