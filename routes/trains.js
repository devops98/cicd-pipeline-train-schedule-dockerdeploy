var express = require('express');
var router = express.Router();
//var low = require('lowdb')
//var FileSync = require('lowdb/adapters/FileSync')

//var adapter = new FileSync('data/trains.json')
//var db = low(adapter)

var MongoClient = require('mongodb').MongoClient;
/* GET trains listing. */
router.get('/', function(req, res, next) {
//  res.send(db.get('trains').sortBy('name').value());

  // Connect to the db
MongoClient.connect("mongodb://34.244.90.245:27017/traindb", function (err, db) {
    
  db.collection('trains', function (err, collection) {      
 collection.find().toArray(function(err, items) {
  if(err) throw err;
  res.send(items[0].trains);
});
      
  });                
});
});

module.exports = router;
