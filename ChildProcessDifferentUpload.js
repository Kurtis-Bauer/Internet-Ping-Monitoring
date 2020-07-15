var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:admin@127.0.0.1:27017/test?authSource=admin";
var spawn = require('child_process').spawn,
  fs = require('fs');
var logFile = fs.createWriteStream("pingtest.txt", {flags:"w",mode:0777});
var pingCmd = spawn("ping", ["-t", "www.google.com"]);
var tmp = "";


//Connect to DB
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    //Start pinging to pingCmd
    pingCmd.stdout.on("data", function(buffer){
        tmp += buffer.toString();

        //Parse String
        var ping = tmp.split(" ")

        ping = ping[4]

        ping = ping.substring(5, ping.length-2);

        console.log(ping);

        process.stdout.write(tmp, 'binary');

        logFile.write(tmp, 'binary');
        
            var myobj = { PingMS: ping };
            dbo.collection("customers").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("Data point uploaded to MongoDB");
            });
		tmp = "";
        });

//db.close();
});