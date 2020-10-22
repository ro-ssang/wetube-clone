import Comment from "../models/Comment";
import Video from "../models/Video";
import routes from "../routes";

// Home
export const getHome = async (req, res) => {
  try {
    const videos = await Video.find({})
      .populate("creator")
      .sort({ createdAt: "desc" });
    res.render("home", { pageTitle: "Home", videos });
  } catch (err) {
    console.log(err);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// Search
export const getSearch = (req, res) => {
  res.render("search", { pageTitle: "Search" });
};

// Upload
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path: videoFile },
    user: { id: creatorId },
    user: loggedUser,
  } = req;
  try {
    const newVideo = await Video.create({
      videoFile: `/${videoFile}`,
      title,
      description,
      creator: creatorId,
    });
    loggedUser.videos = newVideo.id;
    loggedUser.save();
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (err) {
    console.lor(err);
    res.redirect(`${routes.video}${routes.upload}`);
  }
};

// Video Detail
export const getVideoDetail = async (req, res) => {
  const {
    params: { id: videoId },
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
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    console.log(err);
    res.status(404);
    res.render("404");
  }
};

// Edit Video
export const getEditVideo = async (req, res) => {
  const {
    params: { id: videoId },
  } = req;
  try {
    const video = await Video.findById(videoId);
    res.render("editVideo", { pageTitle: "Edit Video", video });
  } catch (err) {
    console.log(err);
    res.status(404);
    res.render("404");
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id: videoId },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate(videoId, { title, description });
    res.redirect(routes.videoDetail(videoId));
  } catch (err) {
    console.log(err);
    res.status(400);
    res.redirect(routes.editVideo(videoId));
  }
};

// Delete Video
export const getDeleteVideo = async (req, res) => {
  const {
    params: { id: videoId },
    user: { id: loggedUserId },
  } = req;
  try {
    await Video.findByIdAndDelete(videoId);
    res.redirect(routes.channelDetail(loggedUserId));
  } catch (err) {
    console.log(err);
    res.redirect(routes.editProfile(videoId));
  }
};

// Add Comment
export const postAddComment = async (req, res) => {
  const {
    body: { comment },
    params: { id: videoId },
    user: { id: commentorId },
  } = req;
  console.log(req.body);
  try {
    const newComment = await Comment.create({
      commentor: commentorId,
      comment,
    });
    const video = await Video.findById(videoId);
    video.comments.push(newComment.id);
    video.save();
  } catch (err) {
    console.log(err);
    res.status(400);
  } finally {
    res.end();
  }
};
