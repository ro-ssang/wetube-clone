import express from "express";
import {
  getChangePassword,
  getEditProfile,
  getUserDetail,
} from "../controllers/userController";
import routes from "../routes";

const userRouter = express.Router();

// User Detail
userRouter.get(routes.userDetail, getUserDetail);

// Edit Profile
userRouter.get(routes.editProfile, getEditProfile);

// Change Password
userRouter.get(routes.changePassword, getChangePassword);

export default userRouter;
