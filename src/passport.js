import passport from "passport";
import passportGithub from "passport-github";
import passportGoogle from "passport-google-oauth20";
import {
  githubLoginCallback,
  googleLoginCallback,
} from "./controllers/userController";
import User from "./models/User";
import routes from "./routes";

const GitHubStrategy = passportGithub.Strategy;
const GoogleStrategy = passportGoogle.Strategy;

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
      scope: "user:email",
    },
    githubLoginCallback
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.googleCallback}`,
    },
    googleLoginCallback
  )
);
