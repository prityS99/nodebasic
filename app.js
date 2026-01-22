const express = require("express");
const path = require("path");
const port = 3005;
const ejs = require("ejs");

// console.log(path);

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");


app.use(express.static(path.join(__dirname,'public')));


const homeRoute = require("./app/routes/homeroute");
app.use(homeRoute);

app.get("/about", (req, res) => {
  res.send("About Us page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
});




app.listen(port, () => {
  console.log("server is running on port", port);
});
