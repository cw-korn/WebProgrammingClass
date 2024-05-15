//EXAMPLE 1
// var http = require("http");
// http
//   .createServer(function (request, response) {
//     response.writeHead(200, { ContentType: "text/plain" });
//     response.end("Hello Boys\n");
//   })
//   .listen(8081);
// console.log("Server running at http://127.0.0.1:8081/");

//EXAMPLE 2
// var i = 0;
// var Counter = setInterval(counter, 2000);
// function counter() {
//   i++;
//   console.log(i);
// }
// setTimeout(function () {
//   clearInterval(Counter);
// }, 10000);

//EXAMPLE 3
// var circle = require('./circle_example.js');
// console.log(circle.area(5));

//EXAMPLE 4
//setup
// var util = require('util');
// var fs = require('fs');
// function readFile(str, callback) {
//   var lines = [];
//   fs.readFile(str, function (err, data) {
//     if (err) throw err;
//     lines.push(data);
//     console.log(data.toString());
//   });
//   callback(lines);
// }
// //assign
// var a, b;
// readFile('./20.txt', function (data) {
//   a = data;
// });
// readFile('./10.txt', function (data) {
//   b = data;
// });
// //output
// util.log("a: " + a + "\n");
// util.log("b: " + b + "\n");

//EXAMPLE 5 
// for unit testing
// var assert = require('assert');
// function add(a, b) {
// return a+b;
// }
// var expected = add(1,2);
// assert( expected=== 4,'one plus two is three');

//EXAMPLE 6 
// buf = new Buffer(10);
// buf.write("abcdefghj","ascii");
// // console.log(buf.toString('base64')); //don't work well
// buf = buf.slice(0,5);
// console.log(buf.toString('utf8'));

//EXAMPLE 6 MORE
// var buf = new Buffer(10)
// console.log(buf)

// var buf = new Buffer([10, 20, 30])
// console.log(buf)

// var buf = new Buffer("Hello World")
// console.log(buf.toString())

// var buf = new Buffer(200)
// len = buf.write("Hello World")
// console.log(len)

// var buf = new Buffer(26)
// for (let index = 0; index < 26; index++) {
//   buf[index] = index + 97
// }
// console.log(buf)

// var buf = new Buffer(26)
// for (let index = 0; index < 26; index++) {
//   buf[index] = index + 97
// }
// console.log(buf.toString('utf8'))
// //console.log(buf.toString('ascii'))

// var buf = new Buffer('Hello World')
// var json = buf.toJSON(buf)
// console.log(json)

// var buf1 = new Buffer('Hello World')
// var buf2 = new Buffer('Good Afternoon')
// var buf = Buffer.concat([buf1, buf2])
// console.log(buf.toString())
// console.log(buf1.toString() + buf2.toString())