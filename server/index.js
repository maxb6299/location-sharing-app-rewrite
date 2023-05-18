const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json()); // middleware for handling json data

const FILE_PATH = "./server/data/data.json"; // path to all user data

// sends ./data/data.json through get request
app.get("/data/data.json", (req, res) => {
  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
      console.log("File read for GET request");
    }
  });
});

// appends new user object to array in data/data.json
// done by copying data.json to variable tempData, appending the new data to it,
// and rewriting the file with that variable
app.post("/data/data.json", (req, res) => {
  const NEW_DATA = req.body;

  fs.readFile(FILE_PATH, (err, data) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      console.log("File read for POST request");

      var newFile = JSON.parse(data);
      newFile.push(NEW_DATA); // appends new data to temporary variable
      newFile = JSON.stringify(newFile); // converts new file to JSON

      fs.writeFile(FILE_PATH, newFile, (err) => {
        if (err) {
          res.send(err);
          console.log(err);
        } else {
          console.log("File written for POST request");
          res.send(newFile);
        }
      });
    }
  });
});

const PORT = 3000;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
