var http=require('http')
var crypto = require('crypto')
var fs=require('fs')
// var myUser={
//   "name":"Reese",
//   "job":"Coordinator",
//   "age":"30"
// }
var data = JSON.parse(fs.readFileSync('./users.json', 'utf8'))
console.log(data.id)
console.log(data.username)

const hash = crypto.createHash('sha1').update(password).digest('hex')


http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'application/json'})
  res.end(JSON.stringify(data))
}).listen(8081,'127.0.0.1')
