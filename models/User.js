import mongoose, { Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  githubId: Number,
  googleId: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  likeVideos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  subscribe: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  subscribers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
