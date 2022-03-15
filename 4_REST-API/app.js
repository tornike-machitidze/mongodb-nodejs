import express from "express";
import mongoose from "mongoose";
import regionRouter from "./routes/regionRoutes.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/georgia-app-data")
  .then(() => console.log("Connect to Mongodb"))
  .catch(() => console.log("Cant connect to Mongodb"));

const app = express();
app.use(express.json());
app.use(regionRouter);

app.listen(3000, () => {
  console.log("Server is up and running");
});

// REST API for georgia regions
//
//1. Start up mongodb
//2. connect server and mongodb databse use mongoose
//3. setart up server
//4. create model for region
//5. create route for region CRUD operations
