var http = require("http");
var fs = require("fs");
var crypto=require('crypto');

//need to get value 
var myUser = {
  name: "Reese",
  job: "Coordinator",
  age: "30",
};

//this is for output
http
  .createServer(function (rew, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(myUser));
  })
  .listen(8081, "127.0.0.1");