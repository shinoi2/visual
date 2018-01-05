var express = require('express');
var app = express();
var MongoDB = require('./server/mongodb');

app.use(express.static('js'));

app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');});
app.use(express.static('public'));

app.get('/GetPackages', function(req, res) {
    MongoDB.aggregate('PHP', {$group: {_id : "$Package", count: {$sum : 1} }}, function(result){
        var json = result.sort(function(x,y){return y['count']-x['count']});
        res.send(json);
        res.end();
    });
});

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Server on localhost:8081")
 
})