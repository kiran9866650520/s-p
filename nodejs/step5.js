var express = require("express");
var bp = require("body-parser");
var fs = require("fs");

var app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname));
app.use(bp.json());
var heroes = null;

app.get("/", function(req, res){
    res.send();
});
app.get("/heros", function(req, res){
    fs.readFile("data/heroes.json",function(error, data){
        heroes = JSON.parse(data.toString());
        res.json(heroes);
    });
});
app.post("/heros", function(req, res){
    heroes.heros.push(req.body);
    fs.writeFile("data/heroes.json",JSON.stringify(heroes),function(){
        console.log("file updated")
        res.json(heroes);
    });
});

app.listen(4567);
console.log("server is now running on 4567");