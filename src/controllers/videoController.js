import Video from "../models/Video";
import routes from "../routes";

// Home
export const getHome = (req, res) => {
  res.render("home", { pageTitle: "Home" });
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
  } = req;
  try {
    const newVideo = await Video.create({ videoFile, title, description });
    res.redirect(routes.videoDetail(newVideo.id));
  } catch (err) {
    console.lor(err);
    res.redirect(`${routes.video}${routes.upload}`);
  }
};

// Video Detail
export const getVideoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

// Edit Video
export const getEditVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "EditVideo" });
};

// Delete Video
export const getDeleteVideo = (req, res) => {
  res.send("Delete Vdieo Page");
};
