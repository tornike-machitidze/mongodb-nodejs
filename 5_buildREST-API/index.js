import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose from "mongoose";
import crmRoute from "./src/routes/crmRoutes.js";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connect to Mongodb"))
  .catch(() => console.log("Cant connct to Mongodb"));

const app = express();
app.use(express.json());
app.use(crmRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.listen(4000, () => {
  console.log("Server is up and running on port 4000");
});
