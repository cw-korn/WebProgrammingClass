const fs = require('fs');
const crypto = require('crypto');
const http = require('http');

const obj = JSON.parse(fs.readFileSync('user.json','utf8'))
const hash = crypto.createHash('sha1').update(obj.password).digest

obj.password = hash;

const keyOrder = ['id','username','password','fullname'];

http.createServer(function(req,res){
    if(!req.url.startsWith('/profile')){
        console.log("not found");
        return;
    }
    for (const key of keyOrder){
        res.write(`${key}: ${obj[key]}\n`);
    }
    res.end();
}).listen(8081);