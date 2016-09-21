var http = require("http");
var fs = require("fs");
        http.createServer(function(req,res){
            res.writeHead(200, {
                "Content-Type" : "text/html"
            });
            var file = fs.readFileSync("./data/heroes.json");
            // console.log(file.toString())
            res.end(file.toString());
        }).listen(1122,"localhost", function(error){
            if(error){
                console.log(error+" happened")
            }else{
                console.log(" server is now running on port 1122")
            }
    })
