import routes from "../routes";
import Video from "../models/Video";

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
  } = req;
  try {
    const video = await Video.findById(videoId).populate("creator");
    console.log(video);
    res.render("videoDetail", { title: "Video Detail", video });
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
  } = req;
  try {
    await Video.findByIdAndRemove(videoId);
  } catch (error) {
    console.log(error);
  } finally {
    res.redirect(routes.home);
  }
};
