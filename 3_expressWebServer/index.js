import request from "request";
const url =
  "http://api.weatherstack.com/current?access_key=a021d913c0ce6e7bc61b70b25d809b7d&query=ny";

request({ url, json: true }, (error, response, body) => {
  if (error) {
    console.log("Cant access weather stack api");
  } else if (body.error) {
    console.log("Unable to find location");
  } else {
    const { temperature, feelslike, weather_descriptions } = body.current;
    console.log(`It is ${temperature} degree, and it feels like ${feelslike}`);
    console.log(`Weather: ${weather_descriptions}`);
  }
});
