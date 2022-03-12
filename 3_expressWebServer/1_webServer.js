import express from "express";

const app = express();
const PORT = 3000;

// myapp.com/
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(PORT, () => {
  console.log("Server is up and running on port " + PORT);
});
