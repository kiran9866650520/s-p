var num = 1000;

addEventListener("message", function(evt){
    num = evt.data;
});
setInterval(function(){
    postMessage(Math.round(Math.random()*num));
},100)