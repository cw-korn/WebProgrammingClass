const express = require('express');
const app = express();
const PORT = 8081
const fs = require('fs');
const crypto = require('crypto');

//getting users.json
const data = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
const users = data.users;


//get post patch put delete
app.get('/profile/:x',(req, res) => {
    const x = req.params.x; 
    const user = users[x];
    const hash = crypto.createHash('sha1').update(user.password).digest('hex')
    const selectedUsers = {
        id: user.id,
        username: user.username,
        password: hash,
        fullname: user.fullname
    }
    res.json(selectedUsers);
})


app.listen(PORT,() => console.log(`server online`));