import passport from "passport";
import passportGithub from "passport-github";
import passportGoogle from "passport-google-oauth20";
import { githubCallback, GoogleCallback } from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

const GitHubStrategy = passportGithub.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

// Local login
passport.use(User.createStrategy());

// Github Login
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}${routes.githubCallback}`,
      scope: "user:email",
    },
    githubCallback
  )
);

// Google Login
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:${process.env.PORT}${routes.googleCallback}`,
    },
    GoogleCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
