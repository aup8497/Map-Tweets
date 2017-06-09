// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
// 	res.sendFile('/home/akshayuprabhu/Desktop/Company/Web-LM/Webstuff/index1.html');
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

//*************************************

// var express = require("express");
// var app     = express();
// var path    = require("path");


// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });

// app.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// app.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

// app.listen(3000);

// console.log("Running at Port 3000");



var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'	));
});

app.listen(3000);
console.log("Running");
