var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/showForm',function(req,res){
    res.sendFile(__dirname+"/"+"showForm.html")
})

app.post('/showData',function(req,res){
    data= {
        fname: req.body.fname,
        lname: req.body.lname
    }
    console.log(data)

    res.end(JSON.stringify(data))
})

app.listen(8081)
