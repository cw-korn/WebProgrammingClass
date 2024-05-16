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

//EXAMPLE 7
//sha1 crypto
var crypto = require('crypto');
var fs = require('fs');
var shasum = crypto.createHash('sha1');
var s = fs.ReadStream('file.txt');
s.on('data', function (d) {
    shasum.update(d);
});
s.on('end', function () {
    var d = shasum.digest('hex');
    console.log(d + ' => file.txt');
});

//EXAMPLE 8
//simple for loop
// for(var i=0;i<10;i++){
//     console.log(i);
// }

//EXAMPLE 9
//dns look up
// var dns = require('dns');
// dns.lookup('www.google.com', function
//     onLookup(err, addresses, family) {
//     console.log('addresses:', addresses);
// });

//EXAMPLE 10
//writing to a file
// var fs = require('fs');
// fs.writeFile('message.txt', 'Hello Node',
//     function (err) {
//         if (err) throw err;
//         console.log('It\'s saved!');
//     });

//EXAMPLE 10 more
//read from file and then make directory and then write to a new file
// var fs=require('fs')
// var readMe = fs.readFileSync('./file.txt','utf8')
// // console.log(readMe)

// fs.mkdir('Project', function(){
//     fs.writeFileSync('./Project/Output.txt', readMe)
//     })

//EXAMPLE 13
// var os=require('os');
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());

//EXAMPLE 14
//readline
// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question("What do you think of node.js? (easy/difficult)", function (answer) {
//     // TODO: Log the answer in a database
//     console.log("Thank you for your valuable feedback:", answer);
//     rl.close();
// });

//EXAMPLE 15
// var fs = require('fs');
// var zlib = require('zlib');
// var r = fs.createReadStream('file.txt');
// var z = zlib.createGzip();
// var w = fs.createWriteStream('file.txt.gz');
// r.pipe(z).pipe(w);

//EXAMPLE 15 MORE
// var fs = require("fs");
// var data =
//   "Hello World Modi quia maiores. Nihil sapiente etatque. Sint numquam molestiae iure nemo fugiat asperioresaspernatur ducimus. Sit rerum officiis reprehenderit hic nisiodit officia accusantium eos.";

// var writerStream = fs.createWriteStream("output.txt");
// writerStream.write(data, "utf8");
// writerStream.end();
// writerStream.on("finish", function () {
//   console.log("Output finish");
// });

//EXAMPLE 16
// var url = require("url");
// var result = url.parse(
//   "http://user:pass@host.com:8080/p/a/t/h?query=string#hash"
// );
// console.log(result);

//EXAMPLE 17
// var http = require("http");
// var fs = require("fs");
// http.createServer(function (rew, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var myStream = fs.createReadStream(__dirname + "/" + "index.html", "utf8");
//     myStream.pipe(res);
//   }).listen(8081, "127.0.0.1");

//EXAMPLE 17
// var http = require("http");
// var fs = require("fs");
// var myUser = {
//   name: "Reese",
//   job: "Coordinator",
//   age: "30",
// };
// http
//   .createServer(function (rew, res) {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(myUser));
//   })
//   .listen(8081, "127.0.0.1");
