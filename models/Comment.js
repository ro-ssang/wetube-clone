import mongoose, { Schema } from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  commentor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Comment", CommentSchema);

export default model;
