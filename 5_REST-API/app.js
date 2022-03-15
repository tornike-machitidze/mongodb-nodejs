import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

const app = express();

const url = "mongodb://127.0.0.1:27017/rest-api-data";
mongoose
  .connect(url)
  .then(() => console.log("Mongodb is connected"))
  .catch(() => console.log("Cant connect to database"));

app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
