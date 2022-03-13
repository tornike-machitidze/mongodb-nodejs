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

// weather.com ===> index.hbs file will be rendered
app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    description: "Hello and Welcome to my first express served app",
  });
});

// weather.com/about ===> about.hbs page will be rendered
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
  });
});

// weather.com/help ====> help.hbs file will be rendered
app.get("/help", (req, res) => {
  res.render("help", {
    title: "How can I help ?",
  });
});

// weather.com/weather ===> JSON { "weather": "rainy" } will be shown
app.get("/weather", (req, res) => {
  res.send({
    weather: "rainy",
  });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
