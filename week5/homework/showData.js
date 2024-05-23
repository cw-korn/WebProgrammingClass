var express = require("express");
var app = express();
const fs = require('fs'); // File system module
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/showForm", function (req, res) {
  res.sendFile(__dirname + "/" + "showForm.html");
});

app.post("/showData", function (req, res) {
  // Parse input values as integers to ensure numerical addition
  const input1 = parseInt(req.body.input1, 10);
  const input2 = parseInt(req.body.input2, 10);
  data = {
    fname: req.body.fname,
    lname: req.body.lname,
    result: input1 +input2
  };
  console.log(data);
  
  let jsonData = [];
  try {
      jsonData = JSON.parse(fs.readFileSync("output.json", "utf8"));
    } catch (err) {
        // Ignore error if file doesn't exist
    }
    // Append new data
    jsonData.push(data);

    // Write data to JSON file
    fs.writeFileSync('output.json', JSON.stringify(jsonData), 'utf8');
    
    res.json(jsonData);
});

app.listen(8081);
