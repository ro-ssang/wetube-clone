import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};
