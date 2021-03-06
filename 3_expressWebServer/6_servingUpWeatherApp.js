import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import hbs from "hbs";
import request from "request";

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
// localhost:3000/weather?search=tbilisi
app.get("/weather", (req, res) => {
  if (!req.query.search) {
    res.render("error", {
      text: "Please enter place",
    });
    return;
  }
  if (req.query.search) {
    const city = req.query.search;
    const url = `http://api.weatherstack.com/current?access_key=a021d913c0ce6e7bc61b70b25d809b7d&query=${city}`;

    request({ url, json: true }, (error, response, body) => {
      if (error) {
        res.render("error", {
          text: "Cant access weather stack api",
        });
        console.log("Cant access weather stack api");
        return;
      } else if (body.error) {
        res.render("error", {
          text: "Unable to find location",
        });
        console.log("Unable to find location");
        return;
      } else {
        const { temperature, feelslike, weather_descriptions } = body.current;
        res.render("result", {
          city,
          weather_descriptions,
          temperature,
          feelslike,
        });
      }
    });
  }
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});

// This is one way of doing this
// Client types city and redirect to the url http://localhost:3000/weather?search=city
// backend on this url /weather?search=city gets search value, send request and renders new page with returned values
//

// 1) client redirect page
// 2) server gets url, req.query.search parameter
// 3) sends request with this word
// 4) gets response
// 5) renders page with got values
