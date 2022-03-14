import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import hbs from "hbs";
import request from "request";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const viewsPath = path.join(__dirname, "../templates3/views");
const partialsPath = path.join(__dirname, "../templates3/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send("There is no searching parameter");
  }

  const { address } = req.query;
  const url = `http://api.weatherstack.com/current?access_key=a021d913c0ce6e7bc61b70b25d809b7d&query=${address}`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      // here we will need to send error with proper status code server error
      return res.send({
        temperature: "",
        feelslike: "",
        temperature: "",
        err: "Cant access api",
      });
    } else if (body.error) {
      // here also we will need to send error status code 404
      res.send({
        temperature: "",
        feelslike: "",
        temperature: "",
        err: "Cant find such a address",
      });
    } else {
      // here status code will be 200 ok
      const { temperature, feelslike, weather_descriptions } = body.current;
      res.send({
        weather_descriptions,
        feelslike,
        temperature,
        err: "",
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running ...");
});

// 1. client sends request on url localhost:3000/weather?address=city
// 2. server gets request on this link
// 3. request by itself also sends request to get data
// 4. returns or sends back response on the same url JSON format data
// 5. Until response will be returned client waits (Thatis what Promises does waits to the reponse and doesnt need to refresh page to see reponse)
// 6. gets reponse and uses it to diplay on the page
