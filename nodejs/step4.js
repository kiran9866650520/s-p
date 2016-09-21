var express = require("express");
var app = express();
    app.listen(5566);
var data = {
    "heroes": [{
        "id": 1,
        "movies": 3,
        "title": "Batman",
        "city": "Gothem",
        "power": 8,
        "photo": "images/batman.jpg"
    }, {
        "id": 2,
        "movies": 3,
        "title": "Superman",
        "city": "Metropolis",
        "power": 8,
        "photo": "images/superman.jpg"
    }, {
        "id": 3,
        "movies": 3,
        "title": "Ironman",
        "city": "New York",
        "power": 3,
        "photo": "images/ironman.jpg"
    }, {
        "id": 4,
        "movies": 1,
        "title": "Phantom",
        "city": "Bhangala",
        "power": 6,
        "photo": "images/phantom.jpg"
    }, {
        "id": 5,
        "movies": 3,
        "title": "Spiderman",
        "city": "New York",
        "power": 8,
        "photo": "images/spiderman.jpg"
    }]
};
// Middleware
app.get("/", function(req,res){
    res.send("hello from express")
})
app.get("/heroes", function(req,res){
    res.send(data);
})
console.log("server is running on 5566");