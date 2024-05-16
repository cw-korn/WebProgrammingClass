var http = require("http");
var fs = require("fs");
var crypto = require('crypto');

//get data from file
const data = fs.readFileSync('./users.json', 'utf8');
//parse data into object
const obj = JSON.parse(data);
//create hash
const hash = crypto.createHash('sha1').update(obj.password).digest('hex')

obj.password = hash;

const keyOrder = ['id', 'username', 'password', 'fullname'];

//this is for output
http.createServer(function (req, res) {
  for (const key of keyOrder) {
    res.write(`${key}:${obj[key]}\n`);
  }
  res.end();
}).listen(8081, "127.0.0.1");