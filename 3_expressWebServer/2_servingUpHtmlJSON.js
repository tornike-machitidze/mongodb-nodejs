import express from "express";
import res from "express/lib/response";

const app = express();
const PORT = 3000;

// serving up just text
//myapp.com
app.get("/", () => {
  res.send("Home Page");
});

// myapp.com/about
app.get("/about", (req, res) => {
  res.send(`
     <ul>
     <li>Home</li>
     <li>About</li>
     <li>Projects</li>
     </ul>
    `);
});

// myapp.com/projects
// serving up a json format data
app.get("/projects", (req, res) => {
  res.send([
    { title: "Project1", length: "2 month" },
    { title: "Project2", length: "4 month" },
    { title: "Project3", length: "2 month" },
  ]);
});

app.listen(PORT, () => {
  console.log("Server is up and running on port" + PORT);
});
