const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + "/components"))); //  "public" off of current is root




app.post("/upload", (req, res) => {
  console.log(req.body)
  fs.readdir(folder, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file);
    });
  });
});





app.get("/", function (req, res) {
  res.sendfile(__dirname + "/components/dashboard.html");
});

app.listen(PORT, () => {
  console.log("App is listening in POST" + PORT);
});
