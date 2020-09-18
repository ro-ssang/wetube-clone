import express from "express";
import {
  getGihubLogin,
  getGihubCallback,
  getGoogleLogin,
  getGoogleCallback,
  getJoin,
  getLogin,
  getLogout,
  postGithubLogin,
  postGoogleLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { getHome, getSearch } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, getHome);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// Github Login
globalRouter.get(routes.github, getGihubLogin);
globalRouter.get(routes.githubCallback, getGihubCallback, postGithubLogin);

// Google Login
globalRouter.get(routes.google, getGoogleLogin);
globalRouter.get(routes.googleCallback, getGoogleCallback, postGoogleLogin);

// Logout
globalRouter.get(routes.logout, getLogout);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

// Search
globalRouter.get(routes.search, getSearch);

export default globalRouter;
