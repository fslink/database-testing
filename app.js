var express = require('express')
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/testing"

MongoClient.connect(url, function(err, db){
	if (err) throw err
	console.log("Database created")
	db.close()
})
