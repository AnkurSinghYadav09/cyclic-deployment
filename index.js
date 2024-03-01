const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("you are at the home page please to welcome page");
});

app.get("/welcome", (req, res) => {
  res.send("welcome to the pt-web-16 b-33 students page");
});

app.get("/lecture", (req, res) => {
  res.send("today is the last lecture of backend batch");
});

let PORT = process.env.PORT;
app.listen(PORT);
