require('dotenv').config();
const express = require("express");
const path = require("path");
const port = 3005;
const ejs = require("ejs");
const DatabaseConnection =require('./app/config/dbcon')

// console.log(path);

const app = express();

//Database connection //
DatabaseConnection()
app.set("view engine", "ejs");
app.set("views", "views");

//Define JSON//
app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')));


const homeRoute = require("./app/routes/homeroute");
app.use(homeRoute);

const aboutRoute = require("./app/routes/aboutroute")
app.use(aboutRoute)

const blogRoute = require("./app/routes/blogroute");
app.use(blogRoute);

const contactRoute = require ("./app/routes/contactroute");
app.use(contactRoute);

const coursesRoute = require("./app/routes/coursesroute");
app.use(coursesRoute)

const userApiRoute=require('./app/routes/userApiRoute')
app.use('/api/v1', userApiRoute)


app.listen(port, () => {
  console.log("server is running on port", port);
});
