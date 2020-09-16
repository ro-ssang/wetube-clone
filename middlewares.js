import routes from "./routes";

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    id: 1,
    isAuthenticated: true,
  };
  next();
};

export default localsMiddleware;