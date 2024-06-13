var fs = require('fs')
var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


var jsonObj = []

app.get('/showForm', function(req, res){
    res.sendFile(__dirname+"/showForm.html")
})

app.post('/showData',function(req,res){
    var data = {
        fname: req.body.fname,
        lname: req.body.lname,
        result: req.body.result
    }

    if(jsonObj.length == 0){
        var txtFile = fs.readFileSync('./output.json', 'utf-8')
        jsonObj = JSON.parse(txtFile)
    }

    jsonObj.push(data)
    console.log(jsonObj)

    var output = JSON.stringify(jsonObj)
    fs.writeFileSync('./output.json', output, 'utf-8')
})

app.listen(8081)