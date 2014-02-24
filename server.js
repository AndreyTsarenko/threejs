var express = require('express');
var app = express();
var config = require("./config");
app.listen(80);
app.use(express.static(__dirname));

app.use(express.bodyParser());

app.post("/get_pages", function (req, res) {
    res.send(JSON.stringify(config.pages));
});

app.post("/get_navigation", function (req, res) {
    res.send(JSON.stringify(config.navigation));
});

app.post("/login", function (req, res) {
    var password = req.body.password;
    var login = req.body.login;
});

app.post("/registration", function (req, res) {
    console.log("all in its right place")
});