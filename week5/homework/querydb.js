const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // MUST use port 27017 for MongoDB
const client = new MongoClient(url);

// Database Name
const dbName = 'Product_CI2024';

async function main() {
    try {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        
        const db = client.db(dbName);
        const collection = db.collection('student_records');

        // 1. Find who take "Computer Programming" (case-insensitive)
        console.log('Students who take "Computer Programming":');
        const computerProgrammingStudents = await collection.find({ coursename: { $regex: /Computer programming/i } }).toArray();
        console.log(computerProgrammingStudents);

        // 2. Find who have mark >60
        console.log('Students who have mark > 60:');
        const studentsWithMarkGreaterThan60 = await collection.find({ mark: { $gt: 60 } }).toArray();
        console.log(studentsWithMarkGreaterThan60);

        // 3. Find the student name start with J*
        console.log('Students whose name starts with "J":');
        const studentsWithNameStartingWithJ = await collection.find({ name: { $regex: /^J/i } }).toArray();
        console.log(studentsWithNameStartingWithJ);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

main().catch(console.error);
