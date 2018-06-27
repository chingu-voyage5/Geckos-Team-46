//declaring dependencies for app
var express = require("express");
var app = express();

//tells express to look in CSS folder for CSS styles
app.use(express.static("css"));

//tells express to expect ejs files
app.set("view engine", "ejs");

//database here

//Routes here

//Landing page
app.get("/", function(req, res) {
    res.render("landing");
});