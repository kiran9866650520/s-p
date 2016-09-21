var http = require("http");
var fs = require("fs");

var config = JSON.parse(fs.readFileSync("./config.json"));

var server = http.createServer(function(req,res){

    fs.readFile("./"+req.url, function(error, data){
        if(error){
            res.writeHead(404, {"Content-type": "text/html"});
            res.write("<h1>no donuts found : 404</h1>");
            res.end();
        }else{
            // res.writeHead(200, {"Content-type": "text/html"});
            res.writeHead(200, {"Content-type": "application/json"});
            res.write(data);
            res.end();
        }
    })
});

server.listen(config.port, config.host, function(){
    console.log("server is now running on port 9990");
});
