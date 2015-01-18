'use strict';

var express = require('express');
var http = require('http');
var https = require('https');

var env = {};
var app = require('./app.js')(env);

env.http = http.createServer(app);
//env.https = https.createServer(options, app);

env.http.listen(8089, function () {
  var host = env.http.address().address;
  var port = env.http.address().port;
  console.log('Website listening at http://%s:%s', host, port);
});
