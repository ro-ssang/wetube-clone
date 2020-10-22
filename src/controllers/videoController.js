import Video from "../models/Video";
import routes from "../routes";

// Home
export const getHome = async (req, res) => {
  try {
    const videos = await Video.find({}).populate("creator");
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
    const video = await Video.findById(videoId).populate("creator");
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (err) {
    console.log(err);
    res.status(404);
    res.render("404");
  }
};

// Edit Video
export const getEditVideo = (req, res) => {
  res.render("editVideo", { pageTitle: "Edit Video" });
};

// Delete Video
export const getDeleteVideo = (req, res) => {
  res.send("Delete Vdieo Page");
};
