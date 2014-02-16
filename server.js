var express = require('express');
var app = express();
var config = require("./config");
app.listen(80);
app.use(express.static(__dirname));

app.post("/get_pages", function (req, res) {
    res.send(JSON.stringify(config.pages));
});