import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

export default app;
