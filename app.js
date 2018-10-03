var express = require('express')
var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/testing"

mongo.connect(url, function(err, db){
	if (err) throw err
	var dbo = db.db("testing")
	dbo.createCollection("motherfuckers", function(err, res){
		if (err) throw err
		console.log("Collection of motherfuckers created")
		db.close()
	})
})
