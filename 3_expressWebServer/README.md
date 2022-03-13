what we need for to create web server, very simple, is express package
express is a nodejs library which simplifies creating and working with web servers

**filename: Returns the absolute path to the current file
**dirname: Returns the absolute path to the parrent folder

To make a html page dynamic we can use handlebars, in this case npm package hbs
handlerbars are for js hbs is specific for express
by default express is looking for views directory in the root folder to find all the .hbs files
hbs file is nothing more then HTML file + some features to work with Dynamic values
file.hbs files can see res.render("file", {name: "Tornike"}) values or properties of render methods secend argument

we need to views folder was in the root folder where package.json is
and all its files is visible for res.render("here")

hbs.registerPartials(partialsPath); partials are like Components in react

we need to tell hbs where to find directory of partials (components)
and to use component hbs use syntacs {{>component}}

i use request npm package to send http requests from node app
request.get("url", (error, response, body) => {
JSON.parse(body)
})

request.get({url: url, json: true}, (err, res, body) => {
body // already parsed
})

for json format data it is nice to use JSON Formatter chrome extesnion
