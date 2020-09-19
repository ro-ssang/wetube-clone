import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("Video", VideoSchema);

export default model;
