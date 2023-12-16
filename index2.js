require("dotenv").config();
const express = require("express"); // require module syntax
const app = express();
const port = 4000;
//Making the URL
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("akankshadotcom");
});
app.get("/login", (req, res) => {
  res.send("<h1>please login here</h1>");
});
app.get("/handle", (req, res) => {
  res.send("<h2> put your password</h2>");
});
app.listen(process.env.PORT, () => {
  //callback
  console.log(`Example app listening on port ${port}`);
});
