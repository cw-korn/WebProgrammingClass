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
var i = 0;
var Counter = setInterval(counter, 2000);
function counter() {
  i++;
  console.log(i);
}
setTimeout(function () {
  clearInterval(Counter);
}, 10000);
