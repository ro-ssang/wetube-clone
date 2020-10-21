import express from "express";
import passport from "passport";
import {
  getJoin,
  getLogin,
  getLogout,
  githubLogin,
  googleLogin,
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

// Search
globalRouter.get(routes.search, getSearch);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// Github Login
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: routes.login }),
  postGithubLogin
);

// Google Login
globalRouter.get(routes.google, googleLogin);
globalRouter.get(
  routes.googleCallback,
  passport.authenticate("google", { failureRedirect: routes.login }),
  postGoogleLogin
);

// Logout
globalRouter.get(routes.logout, getLogout);

export default globalRouter;
