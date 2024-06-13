var express=require('express')
var fs = require('fs')
const crypto = require('crypto');
const secret = '1234567890'
let json = {}

fs.readFile('./users.json','utf8', function(err,data){
    json = JSON.parse(data)
    /* for(let i=0; i<json.users.length; i++){
        const hash = crypto.createHash('sha1')
                   .update(json.users[i].password)
                   .digest('hex')
        json.users[i].password = hash
    } */
})


var route =express()
route.get('/profile/:id',function(req,res){
    const hash = crypto.createHash('sha1')
                   .update(json.users[req.params.id].password)
                   .digest('hex')
    res.send(
        "<p>id: " + json.users[req.params.id].id+"<br>"+
        "username: "+ json.users[req.params.id].username+"<br>"+
        "password: "+ hash+"<br>"+
        "fullname: "+ json.users[req.params.id].fullname+
        "</p>"
    )
})
route.listen(8081)