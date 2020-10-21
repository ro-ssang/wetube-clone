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
