import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import hbs from "hbs";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsPath = path.join(__dirname, "../templates2/views");
const partialsPath = path.join(__dirname, "../templates2/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    description:
      "Hello and wellcome to my first real express served app, which uses weather api and for pages I used handlerbars, hbs.",
  });
});

// weather.com/help ==> renders help.hbs file
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
  });
});

// weather.com/about ==> renders about.hbs file
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
  });
});

// weather.com/weather ==> {  } JSON return jus json
app.get("/weather", (eq, res) => {
  res.send({
    forecast: "rainy",
    location: "Tbilisi",
  });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
