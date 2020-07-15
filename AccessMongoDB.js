var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@127.0.0.1:27017/test?authSource=admin";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });