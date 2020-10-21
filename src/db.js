import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = () => {
  console.log("❌ Failed to connect to DB");
};

const handleOpen = () => {
  console.log("✅ Connected to DB");
};

db.on("error", handleError);
db.once("open", handleOpen);
