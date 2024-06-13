var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
var jwt = require('jsonwebtoken');

app.get('/api', function api(req, res) {
    res.json({
      description: 'My API. Please authenticate!'
    });
  })
  
  app.get('/api/protected', ensureToken, (req, res) => {
    jwt.verify(req.token, 'secret_key_goes_here', function(err, data) {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          description: 'Protected information. Congrats!',
          data: data
        });
      }
    });
  })
  
  app.post('/api/login', (req, res) => {
  
    // insert code here to actually authenticate, or fake it
    const user = { id: 3 };
  
    // then return a token, secret key should be an env variable
    const token = jwt.sign({ user: user.id }, 'secret_key_goes_here');
    res.json({
      message: 'Authenticated! Use this token in the "Authorization" header',
      token: token
    });
  })
  
  app.listen(8081, function () {
    console.log('App listening on port 8081!');
  })
  
  function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }