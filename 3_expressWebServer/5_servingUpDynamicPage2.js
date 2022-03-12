import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import hbs from "hbs";

const app = express();

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filname);

// as we see express by default looking for views directory in root folder
// but we can tell it where to find custom path
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", {
    content: "About Content",
  });
});

app.get("/projects", (req, res) => {
  res.render("projects", {
    content: "Projects Content",
  });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
