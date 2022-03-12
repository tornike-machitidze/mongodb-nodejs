import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);

const app = express();
const PORT = 3000;

const __dirname = dirname(__filename);

// So server will use 3_public directory
// and all the files inside it will be accessable
//
// myapp.com/ or myapp.com/index.html
// myapp.com/about.html
app.use(express.static(path.join(__dirname, "3_public")));

// this page will be loadid from response
app.get("/projetcs", (req, res) => {
  res.send([{ name: "project1" }, { name: "project2" }]);
});

app.listen(PORT, () => {
  console.log("Server is up and running on port" + PORT);
});
