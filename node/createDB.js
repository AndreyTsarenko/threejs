/**
 * Created with JetBrains WebStorm.
 * User: andrey
 * Date: 15.02.14
 * Time: 13:09
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/db/users");

var schema = mongoose.Schema({
    login: String,
    password: String
});
schema.methods.getUserData = function () {
    console.log("Hello World");
}

var User = mongoose.model("User", schema);
var NewUser = new User({
    login: "AndreyTsarenko",
    password: "hello world"
});

NewUser.save(function (err, user, affected) {
    debugger;
    NewUser.getUserData();
});