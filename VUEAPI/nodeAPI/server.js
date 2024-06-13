var express = require('express')
var cors = require('cors')

app = express()
app.use(cors())

port = process.env.PORT || 3427
mongoose = require('mongoose')
User = require('./api/models/userListModel')
bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Userdb', function(error){
    if(error) throw error
    console.log('Successfully connected');
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./api/routes/userListRoutes')
routes(app)

app.listen(port)

console.log('User List started on : '+ port)

