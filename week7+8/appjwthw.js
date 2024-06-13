// npm install jsonwebtoken

var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var jwt = require("jsonwebtoken");

app.get("/api", function api(req, res) {
  res.json({
    description: "My API. Please authenticate!",
  });
});

app.get("/api/userprofile", ensureToken, (req, res) => {
  jwt.verify(req.token, "secret_key_goes_here", function (err, data) {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        description: "User profile: username",
        data: data,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  var user = req.body;
  if (user.username == "test" && user.password == "1234") {
    // then return a token, secret key should be an env variable
    const token = jwt.sign({ user: user.username }, "secret_key_goes_here");
    res.json({
      message: 'Authenticated! Use this token in the "Authorization" header',
      token: token,
    });
  } else {
    res.json({
      message: "Invalid Username or Password",
      user: req.body,
    });
  }
});

app.listen(8180, function () {
  console.log("App listening on port !");
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;  
    next();
  } else {
    res.sendStatus(403);
  }
}
