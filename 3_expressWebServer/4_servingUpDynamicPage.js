import express from "express";

const app = express();

app.set("view engine", "hbs"); // for handlerbars setup we use only this line

// myapp.com render index.hbs page
app.get("", (req, res) => {
  res.render("index", {
    title: "My Hbs App",
    packageName: "hbs",
    description:
      "res.render() takes two arguments, first is which file should render on this link, and second is object of values which we want to view to access",
    example: `
  res.render("index", {
    title: "My Hbs App",
    packageName: "hbs",
  })
   So index.hbs view will see title and pckageName value and will be usable with syntax {{}} double carlybrase
  `,
  }); // we can say to response to send or render page from views directory this way
});

// myapp.com render about.hbs page
app.get("/about", (req, res) => {
  res.render("about", {
    about: `hbs is html with extra features it can get values from server`,
  });
});

app.listen(3000, () => {
  console.log("Server is up and running on port 3000");
});
