import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";
import Comment from "../models/Comment";

// Home
export const getHome = async (req, res) => {
  const videos = await Video.find({});
  res.render("home", { title: "Home", videos });
};

// Search
export const getSearch = (req, res) => {
  res.render("search", { title: "Search" });
};

// Video Detail
export const getVideoDetail = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const video = await Video.findById(videoId)
      .populate("creator")
      .populate({
        path: "comments",
        populate: {
          path: "commentor",
          model: "User",
        },
      });
    const user = await User.findById(userId);
    const like = user.likeVideos.includes(videoId);
    const subscribe = user.subscribe.includes(video.creator.id);
    res.render("videoDetail", {
      title: video.title,
      video,
      like,
      subscribe,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Upload
export const getUpload = (req, res) => {
  res.render("upload", { title: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  try {
    const newVideo = await Video.create({
      videoUrl: path,
      title,
      description,
      creator: req.user.id,
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id: videoId },
  } = req;
  try {
    const video = await Video.findById(videoId);
    res.render("editVideo", { title: "Edit Video", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id: videoId },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate(videoId, { title, description });
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect(routes.videoDetail(videoId));
  }
};

// Delete Video
export const getDeleteVideo = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const user = await User.findById(userId);
    await Video.findByIdAndRemove(videoId);
    user.videos = user.videos.filter((id) => {
      return id.toString() !== videoId;
    });
    user.save();
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect(routes.home);
  }
};

// Register Like
export const postRegisterLike = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const video = await Video.findById(videoId);
    const user = await User.findById(userId);
    video.like += 1;
    video.save();
    user.likeVideos.push(videoId);
    user.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// Erase Like
export const postEraseLike = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: userId },
  } = req;
  try {
    const video = await Video.findById(videoId);
    const user = await User.findById(userId);
    video.like -= 1;
    video.save();
    user.likeVideos = user.likeVideos.filter((item) => {
      return item.toString() !== videoId;
    });
    user.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};

// Add Comment
export const postAddComment = async (req, res) => {
  const {
    params: { id: videoId },
    body: { comment },
    user,
  } = req;
  try {
    const video = await Video.findById(videoId);
    const newComment = await Comment.create({
      comment,
      commentor: user.id,
    });
    video.comments.push(newComment.id);
    video.save();
    res.status(200);
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
