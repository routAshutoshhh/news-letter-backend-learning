const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

///sending the html file for the sign up
//we going to send the css and js files  as they are static in nature so for me being able to send ths files using exress i need to do it using static
app.use(express.static("public")); // here public is a foldeer inside of which i am going to send all the local files
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  //declaring variable
  var email = req.body.email;
  var name = req.body.fname;

  console.log(email, name);
});

app.listen(3000, function () {
  console.log("server running in 3000");
});
