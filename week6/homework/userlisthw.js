  var express = require("express");
  var app = express();
  var fs = require("fs"); //Read userlist.json
  var path = require('path');

  app.get("/insertUser/:name/:password/:occupation/:id", function (req, res) {
    const userId = "user" + req.params.id;
    const newName = req.params.name;
    const newPassword = req.params.password;
    const newOccupation = req.params.occupation;
    const filePath = path.join(__dirname, "user.json");

    fs.readFile(filePath, "utf8", function (err, data) {
      console.log(data); // user.json data
      var users = JSON.parse(data);
      
    // Add the new user
    users[userId] = {
      name: newName,
      password: newPassword,
      occupation: newOccupation,
    };
      
      //write new user to json file
      fs.writeFile(filePath,JSON.stringify(users, null, 2),"utf8",
      function (err) {
        res.send(JSON.stringify(users[userId]));
      });
    });
  });

  var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Application run at http://%s:%s", host, port);
  });
