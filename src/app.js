import express from "express";
import helmet from "helmet";
import path from "path";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["*", "'unsafe-eval'"],
      },
    },
  })
);

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.video, videoRouter);
app.use(routes.user, userRouter);

export default app;
