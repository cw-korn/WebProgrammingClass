//MongoDB

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'; // MUST use port 27017 for MongoDB
const client = new MongoClient(url);

// Database Name
const dbName = 'Product_CI2024';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('student_records');
      var obj = [
          { name: "Bob",courseid:"egci111",coursename:"computer programming",mark:80 },
          { name: "Tom",courseid:"egci111",coursename:"computer programming",mark:50 },
          { name: "Sue",courseid:"egci427",coursename:"Web programming",mark: 90 },
          { name: "John",courseid:"egci427",coursename:"Web programming",mark: 70},
          { name: "Jame",courseid:"egci427",coursename:"Web programming",mark: 60},
      ]
      const insertResult = await collection.insertMany(obj);

      console.log('Inserted documents =>', insertResult);
  
    return 'done.';
  }

  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());