/*
var http=require('http'); 
http.createServer(function(request, response)
{ 
    response.writeHead(200,{'Content-Type':'text/plain'}); 
    response.end('Hello World\n');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
*/
// -----------------------------------------------------------
//console.log(filename);
//console.log(dirname);
// function helloWorld()
// {
//     console.log("Hello World.....")
// }
// var 
// t=setTimeout(helloWorld,3000);
//clearTimeout(t);
// -----------------------------------------------------------
// var i =0;
// var Counter = setInterval(counter,2000);
// function counter(){
// i++;
// console.log(i);
// }
// setTimeout(function(){
// clearInterval(Counter);
// },10000);
// -----------------------------------------------------------
var calc = require('./basiccalc.js');
console.log(calc.squarearea(5));
console.log(calc.add(1,2));
console.log(calc.minus(1,2));
console.log(calc.multiply(1,2));
console.log(calc.divide(1,2));
console.log(calc.divide(1,0));
console.log(calc.pi());