// Home
export const getHome = (req, res) => {
  res.render("home", { title: "Home" });
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

// Edit Video
export const getEditVideo = (req, res) => {
  res.render("editVideo", { title: "Edit Video" });
};

// Delete Video
export const getDeleteVideo = (req, res) => {
  res.render("deleteVideo", { title: "deleteVideo" });
};
