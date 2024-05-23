
//MongoDB

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'; // MUST use port 27017 for MongoDB
const client = new MongoClient(url);

// Database Name
const dbName = 'Product_CI2024';

// main function to connect to the database
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('products');
  //Insert One Item
  var obj = { name: "Coffee Mug", price: 10 }

    var obj = [

        { name: "Book", price: 10 },
        { name: "Pencil", price: 5 },
        { name: "Calculator", price: 40 },
        { name: "Notebook", price: 15 },
        { name: "T-Shirt", price: 20 },
        { name: "Jacket", price: 20 }

    ]
   //const insertResult = await collection.insertOne(obj);
const insertResult = await collection.insertMany(obj);

console.log('Inserted documents =>', insertResult);

// FIND ONE
// const findResult = await collection.findOne({})

// FINE ALL
// const findResult = await collection.find({}).toArray()

// Query Speific Document
// var query = {name: "Pencil"}
// var query = {price: 10}
var query = {name: /^C/} //find one with first character with C 
const findResult = await collection.find(query).toArray()
console.log('Found documents =>', findResult)

  return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());