var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
var fs = require('fs') //Read userlist.json

//return all data
app.get('/getUsers', function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        console.log(data) // userlist.json data
        res.end(data)
    })
})

//return json data according to the ID
app.get('/getUsers/:id', function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        var users = JSON.parse(data)
        var auser = users["user"+req.params.id]
        console.log(auser) // userlist.json data
        res.end(JSON.stringify(auser))
    })
})

var user = { //Global user
    "user4": {
        "name": "betty",
        "password": "4444",
        "occupation": "engineer",
        "id": 4
    }
}

//Add one user(json) to data
app.post('/addUser', function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        var users = JSON.parse(data)
        users["user4"] = user["user4"] 
        console.log(users) // userlist.json data
        res.end(JSON.stringify(users))
    })
})

//delete user
app.delete('/delUser/:id', function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        var users = JSON.parse(data)
        delete users['user'+req.params.id]
        console.log(users) // userlist.json data
        res.end(JSON.stringify(users))
    })
})

//update user with GET method
app.get("/updateUser/:id", function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        var users = JSON.parse(data)

        //add your code here
        users['user'+req.params.id].name = "test"

        console.log(users) // userlist.json data
        res.end(JSON.stringify(users))
    })
})

//update user with PUT method
app.put("/updateUser", function(req,res){
    fs.readFile(__dirname+"/"+"userlist.json", 'utf8', function(err,data){
        var users = JSON.parse(data)

        //add your code here
        users['user'+req.body.id] = req.body

        console.log(users) // userlist.json data
        res.end(JSON.stringify(users))
    })
})


var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})