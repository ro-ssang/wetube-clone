import express from "express";
import {
  getChangePassword,
  getEditProfile,
  getUserDetail,
  postEditProfile,
} from "../controllers/userController";
import { uploadAvatar } from "../middlewares";
import routes from "../routes";

const userRouter = express.Router();

// User Detail
userRouter.get(routes.userDetail(), getUserDetail);

// Edit Profile
userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), uploadAvatar, postEditProfile);

// Change Password
userRouter.get(routes.changePassword, getChangePassword);

export default userRouter;
