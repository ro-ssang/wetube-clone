import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleError = (err) => {
  console.log(`❌ connection error: ${err}`);
};

const handleConnection = () => {
  console.log(`✅ Connected DB`);
};

db.on("error", handleError);
db.once("open", handleConnection);
