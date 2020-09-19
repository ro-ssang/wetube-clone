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
export const getVideoDetail = (req, res) => {
  res.render("videoDetail", { title: "Video Detail" });
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
    await Video.create({ videoFile: path, title, description });
  } catch (error) {
    console.log(error);
  } finally {
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
