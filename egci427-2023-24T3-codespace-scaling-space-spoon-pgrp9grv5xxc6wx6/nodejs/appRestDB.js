
const { MongoClient } = require('mongodb');

var express = require('express')
var app = express()

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

var result = []
var mj = ""
// Database Name
const dbName = 'egci427';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('students');
 

  var query = {major: mj} 
 
  result = await collection.find(query).toArray()
  console.log('Found documents => ', result)


  return 'done.';
}



  app.get('/findmajor/:major', function(req,res){
    //add your here
    mj = req.params.major

    main()
  .then(console.log)
  .catch(console.error)
  .finally(() => {client.close()
    res.end(JSON.stringify(result))
  });

    
  })

  var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Application run at http://%s:%s", host, port)
})