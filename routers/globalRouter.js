import express from "express";
import { getJoin, getLogin, getLogout } from "../controllers/userController";
import { getHome, getSearch } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, getHome);

// Login
globalRouter.get(routes.login, getLogin);

// Logout
globalRouter.get(routes.logout, getLogout);

// Join
globalRouter.get(routes.join, getJoin);

// Search
globalRouter.get(routes.search, getSearch);

export default globalRouter;
