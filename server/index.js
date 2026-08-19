const express = require("express");
const app = express();
const axios = require("axios");

axios.get("https://api.github.com/users/harpreet").then(function (response) {
  console.log(response);
});

app.get("/", (req, res) => {
  x;
  res.send("hello ray");
});

app.listen(3001, () => {
  console.log("Running");
});
