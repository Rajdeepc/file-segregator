// const multer = require("multer");

// const upload = multer({
//   dest: "C:\\Temp",
//   // you might also want to set some limits: https://github.com/expressjs/multer#limits
// });

app.post("/upload", (req, res) => {
  fs.readdir(testFolder, (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
});



