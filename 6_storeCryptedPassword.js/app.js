import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/password")
  .then(() => console.log("Connect to db"))
  .catch(() => console.log("Cant connect to db"));

app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is up and running");
});
