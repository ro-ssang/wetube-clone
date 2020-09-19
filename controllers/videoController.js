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
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
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
    const newVideo = await Video.create({ videoUrl: path, title, description });
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// Edit Video
export const getEditVideo = (req, res) => {
  res.render("editVideo", { title: "Edit Video" });
};

// Delete Video
export const getDeleteVideo = (req, res) => {
  res.render("deleteVideo", { title: "deleteVideo" });
};
