import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(4000, () => {
  console.log(`✅ Listening on: http://localhost:4000`);
});
