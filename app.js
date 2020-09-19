import express from "express";
import path from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import localsMiddleware from "./middlewares";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import "./passport";

const CookieStore = MongoStore(session);

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    store: new CookieStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);

export default app;
