//EXAMPLE 19
// var express=require('express')
// var routing=express()
// routing.get('/',function(req,res){
// res.send("<h1>Hello World</h1>")
// })
// routing.listen(8081)

// //EXAMPLE 19-2
// //npm install express --save
// var express = require("express");
// var routing = express();

// routing.get('/',function(req,res){
// res.send("<h1>Hello World</h1>")
// })

// routing.get('/user/profile', function(req, res){
//     console.log("Request: " + new Date(),req.metho, req.url)
// })

// routing.get("/profile/:name", function (req, res) {
//   res.send("<h1>Welcome " + req.params.name + "</h1>");
// });
// routing.listen(8081);

//example 
// middleware

var express = require('express')
var app = express()


app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})

app.get('/showData',function(req,res){
    data= {
        fname: req.query.fname,
        lname: req.query.lname
    }
    console.log(data)

    res.end(JSON.stringify(data))
})

app.listen(8081)
